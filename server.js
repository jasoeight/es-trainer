const server = require('vue-cli-plugin-apollo/graphql-server');

const opts = {
    host: process.env.VUE_APP_GRAPHQL_HOST || 'localhost',
    port: process.env.VUE_APP_GRAPHQL_PORT || 4000,
    graphqlPath: process.env.VUE_APP_GRAPHQL_PATH || '/graphql',
    subscriptionsPath: process.env.VUE_APP_GRAPHQL_PATH || '/graphql',
    enableMocks: false,
    enableEngine: false,
    cors: process.env.VUE_APP_GRAPHQL_CORS || '*',
    timeout: process.env.VUE_APP_GRAPHQL_TIMEOUT || 1000000,
    quiet: true,
    paths: {
        typeDefs: require.resolve('./apollo-server/type-defs.js'),
        resolvers: require.resolve('./apollo-server/resolvers.js'),
        context: require.resolve('./apollo-server/context.js'),
        server: require.resolve('./apollo-server/server.js'),
        directives: require.resolve('./apollo-server/directives.js')
    }
};

server(opts, () => {
    console.log('Server is running!');
});
