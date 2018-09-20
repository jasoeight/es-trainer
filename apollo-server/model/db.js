const Sequelize = require('sequelize');

const dbInstane = new Sequelize({
    username: process.env.VUE_APP_DB_USERNAME,
    password: process.env.VUE_APP_DB_PASSWORD,
    database: process.env.VUE_APP_DB_NAME,
    host: process.env.VUE_APP_DB_HOST,
    port: process.env.VUE_APP_DB_PORT,
    insecureAuth: process.env.VUE_APP_DB_INSECUREAUTH === 'true',
    dialect: 'mysql',
    debug: process.env.VUE_APP_DB_DEBUG === 'true'
});

export default dbInstane;
