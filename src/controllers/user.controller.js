import user from '../models/user.model';
import bcrypt from 'bcryptjs';

import crearToken from '../utils/jwt';

const createUser = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;
    
        const saltRounds = process.env.SALT_ROUNDS;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        const user = await user.create({ name, email, password: hashedPassword });
    
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
        next(error);
    }
};

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await user.findOne({ where: { email } });
    
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
    
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid password' });
        }
    
        res.status(200).json({ token: crearToken(user) });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}