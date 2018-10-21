import Sequelize from 'sequelize';
import db from './db';

const Item = db.define('items', {
    id: {
        type: Sequelize.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
    },
    lesson: {
        type: Sequelize.STRING(250),
        allowNull: false
    },
    type: {
        type: Sequelize.STRING(45),
        allowNull: false
    },
    de: {
        type: Sequelize.TEXT(),
        allowNull: false
    },
    es: {
        type: Sequelize.TEXT(),
        allowNull: false
    },
    info: {
        type: Sequelize.TEXT()
    },
    check: {
        type: Sequelize.TINYINT(),
        allowNull: false
    }

}, {
    timestamps: false
});

export default Item;
