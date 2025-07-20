import express from 'express'
import { pingCheck } from '../../controllers/Testing.js'
import projects from './Project.js'

const router=express.Router()

router.use('/ping',pingCheck)
router.use('/projects',projects)


export default router