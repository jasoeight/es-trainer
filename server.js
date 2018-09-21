const server = require('vue-cli-plugin-apollo/graphql-server');

const opts = {
    host: process.env.VUE_APP_GRAPHQL_HOST,
    port: process.env.VUE_APP_GRAPHQL_PORT,
    graphqlPath: process.env.VUE_APP_GRAPHQL_PATH,
    subscriptionsPath: process.env.VUE_APP_GRAPHQL_PATH,
    enableMocks: false,
    enableEngine: false,
    cors: process.env.VUE_APP_GRAPHQL_CORS,
    timeout: process.env.VUE_APP_GRAPHQL_TIMEOUT,
    quiet: process.env.VUE_APP_GRAPHQL_QUIET === 'true',
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
