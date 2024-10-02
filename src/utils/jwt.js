import jwt from 'jsonwebtoken';

const createToken = (user) => {
    const payload = {
        email: user.email
    };
    
    const secretKey = process.env.JWT_SECRET;
    const options = {
        expiresIn: '1h'
    };

    return jwt.sign(payload, secretKey, options);
};

const verifyToken = (token) => {
    if (!token) {
        return False;
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return False;
        }
        return decoded;
    });
};

module.exports = {verifyToken, createToken};