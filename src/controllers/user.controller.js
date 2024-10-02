import user from '../models/user.model';
import bcrypt from 'bcryptjs';

const createUser = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;
    
        const saltRounds = process.env.SALT_ROUNDS;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        const user = await user.create({ name, email, password: hashedPassword });
    
        res.status(201).json(user);
    } catch (error) {
        next(error);
    }
};



const getUsers = async (req, res) => {
    try {
        const users = await user.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
