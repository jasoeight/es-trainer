import { SchemaDirectiveVisitor } from 'graphql-tools';
import { defaultFieldResolver } from 'graphql';

export default class PrivateDirective extends SchemaDirectiveVisitor {
    visitFieldDefinition (field) {
        const { resolve = defaultFieldResolver } = field;
        field.resolve = (root, args, context, info) => {
            if (!context.token) {
                throw new Error('Unauthorized');
            }

            return resolve(root, args, context, info);
        };
    }
};
