const validateNewUser = (req, res, next) => {

    // Validates new user creation request body

    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        return res.status(400).json({ message: 'All fields are required' });
    }
    next();
};

const validateLogin = (req, res, next) => {

    // Validate login request body

    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: 'Both email and password are required' });
    }
    next();
};

export { validateNewUser };