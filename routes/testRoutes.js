import express from 'express'
import { testPostController } from '../controllers/testController.js'

//router object
const router = express.router()

//routes
router.post('/test',testPostController)

//export
export default router
