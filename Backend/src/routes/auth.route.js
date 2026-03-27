import {Router} from 'express'
import { getMeController, loginUserController, logoutUserController, registerUserController } from '../controllers/auth.controller.js';

const authRouter = Router();

authRouter.post('/register', registerUserController);
authRouter.post('/login', loginUserController);
authRouter.get('/logout', logoutUserController);
authRouter.get('/get-me', getMeController);

export default authRouter;
