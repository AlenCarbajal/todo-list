import { Router } from express;
import { validateNewUser, validateLogin } from '../middleware/user.validators';
import { createUser, loginUser } from '../controllers/user.controller';

const router = Router();

router.post('/register', validateNewUser, createUser);
router.post('/login', validateLogin, loginUser);

export default router;