import express from 'express';

import * as userControllers from '../controllers/user.js';

const router = express.Router();

router.get('/user', userControllers.userInfo);
router.post('/login', userControllers.login);
router.post('/register', userControllers.register);
router.get('/logout', userControllers.logout);

router.post('/login/google', userControllers.googleUserLogin);
router.post('/register/google', userControllers.googleUserRegister);
export default router;
