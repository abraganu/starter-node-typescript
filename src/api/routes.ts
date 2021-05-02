import express from 'express'

import userRoutes from './User/user.route'

const router = express.Router()

router.use('/users', userRoutes)

export default router
