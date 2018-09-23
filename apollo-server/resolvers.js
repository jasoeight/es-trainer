import GraphQLJSON from 'graphql-type-json';
import Sequelize from 'sequelize';
import ItemModel from './model/item';
import UserModel, { validateToken } from './model/user';
import bcrypt from 'bcrypt';

const Op = Sequelize.Op;

export default {
    JSON: GraphQLJSON,

    Query: {
        list: (_, { filter: { pagination, search } }) => {
            let offset = 0;
            const limit = pagination.rowsPerPage || 25;
            if (pagination.page) {
                offset = (pagination.page - 1) * limit;
            }

            let options = {
                limit,
                offset,
                order: [[pagination.sortBy || 'id', pagination.descending ? 'DESC' : 'ASC']],
                raw: true,
                where: {}
            };

            if (search) {
                if (search.id) {
                    options.where['id'] = search.id;
                }

                if (search.lesson) {
                    options.where['lesson'] = search.lesson;
                }

                if (search.type) {
                    options.where['type'] = search.type;
                }

                if (search.de) {
                    options.where['de'] = { [Op.like]: `%${search.de}%` };
                }

                if (search.es) {
                    options.where['es'] = { [Op.like]: `%${search.es}%` };
                }
            }

            return ItemModel.findAndCountAll(options);
        },
        randomItems: (_, { filter }) => {
            let options = {
                order: [ Sequelize.fn('RAND') ],
                raw: true,
                where: {}
            };

            if (filter.limit > 0) {
                options.limit = filter.limit;
            }

            if (filter.lessons && filter.lessons.length > 0) {
                options.where['lesson'] = { [Op.or]: filter.lessons };
            }

            if (filter.type) {
                options.where['type'] = filter.type;
            }

            return ItemModel.findAll(options);
        },
        translate: (_, { search, language }) => {
            const searchLanguage = language === 'de' ? 'es' : 'de';
            const options = {
                attributes: [
                    'id',
                    [language, 'searchText'],
                    [searchLanguage, 'matchedText']
                ],
                where: {
                    [language]: {
                        [Op.like]: `%${search}%`
                    }
                },
                raw: true
            };
            return ItemModel.findAll(options);
        },
        getLessons: () => {
            return ItemModel.findAll({
                attributes: [[Sequelize.fn('DISTINCT', Sequelize.col('lesson')), 'name']],
                order: Sequelize.col('lesson'),
                raw: true
            });
        }
    },

    Mutation: {
        saveItem: (_, { item }, { token }) => {
            validateToken(token);
            if (item.id !== null) {
                return ItemModel.update(item, {
                    where: { id: item.id }
                });
            }
            return ItemModel.create(item);
        },
        deleteItem: async (_, { id }, { token }) => {
            validateToken(token);
            await ItemModel.destroy({
                force: true,
                where: { id }
            });
            return { id };
        },
        login: async (_, { username, password }) => {
            let user = await UserModel.findOne({
                where: { username: username }
            });

            if (!user) {
                throw new Error('Invalider Benutzer oder invalides Passwort.');
            }

            const validPassword = await bcrypt.compare(password, user.password);
            if (!validPassword) {
                throw new Error('Invalider Benutzer oder invalides Passwort. 2');
            }

            user.token = user.generateAuthToken();

            return {
                id: user.id,
                username: user.username,
                token: user.token,
                refreshToken: user.refreshToken
            };
        }
    }
};
