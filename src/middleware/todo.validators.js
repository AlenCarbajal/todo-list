import { verifyToken } from '../utils/jwt.js';

const validateToken = (req, res, next) => {
    const token = req.headers['authorization'];
    const verification = verifyToken(token);
    if(!verification){
        return res.status(401).json({ message: 'Unauthorized' });
    }
    req.user = verification;
    next();
}