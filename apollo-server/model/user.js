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

function checkToken(token) {
    try {
        jwt.verify(token, config.jwtTokenSecret);
    } catch (error) {
        if (error.name === 'TokenExpiredError') {
            throw new Error('Token expired.');
        }
        throw new Error('Invalid token.');
    }
}

export default User;
export async function validateToken(token) {
    try {
        checkToken(token);
        return token;
    } catch (error) {
        if (error.name !== 'Token expired') {
            throw error;
        }
    }

    const decoded = jwt.decode(token, { complete: true });
    if (!decoded.payload || !decoded.payload.id) {
        throw new Error('Invalid token');
    }

    const user = await User.findOne({
        where: { id: decoded.payload.id }
    });
    if (!user) {
        throw new Error('Invalid token');
    }

    return user.generateAuthToken();
};
