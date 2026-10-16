import express from 'express';
import { simulate } from '../controllers/simulateController.js';

const router = express.Router();

router.post('/', simulate);

export default router;
