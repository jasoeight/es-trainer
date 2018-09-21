const winston = require('winston');
const path = require('path');
const server = require('vue-cli-plugin-apollo/graphql-server');

let logger;

const format = winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
);

let logPath = path.join(__dirname, 'application.log');
logger = new winston.transports.File({
    filename: logPath,
    handleExceptions: true,
    level: 'debug',
    format
});

winston.add(logger);

process.on('uncaughtException', ex => { throw ex; });
process.on('unhandledRejection', ex => { throw ex; });

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
    logger.info('Server running on port with the following options');
    logger.info(opts);
});
