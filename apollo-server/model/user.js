import Sequelize from 'sequelize';
import db from './db';
import jwt from 'jsonwebtoken';

const config = {
    jwtTokenSecret: process.env.VUE_APP_JWT_TOKEN_SECRET,
    jwtTokenExpiresIn: process.env.VUE_APP_JWT_EXPIRED_DATE
};

const User = db.define('users', {
    id: {
        type: Sequelize.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: Sequelize.STRING(150),
        allowNull: false,
        unique: true
    },
    email: {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    timestamps: false
});

User.prototype.generateAuthToken = function() {
    return jwt.sign(
        { id: this.id },
        config.jwtTokenSecret,
        { expiresIn: config.jwtTokenExpiresIn }
    );
};

User.prototype.generateRefreshToken = function() {
    return jwt.sign(
        { id: this.id },
        config.jwtTokenSecret,
        { expiresIn: config.jwtTokenExpiresIn }
    );
};

export default User;
