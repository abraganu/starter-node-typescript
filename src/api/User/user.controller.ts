import { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function createUser(req: Request, res: Response) {
    const { firstName, lastName } = req.body
    try {
        const newUser = await prisma.user.create({
            data: {
                firstName,
                lastName,
            }
        })
        res.status(200).json(newUser)
    } catch (error) {
        console.error(error)
        res.status(500).json({
            error: 'Internal Server Error'
        })   
    }
}

export async function getUsers(req: Request, res: Response) {
    try {
        const users = await prisma.user.findMany()
        res.status(200).json(users)
    } catch (error) {
        console.log(error)
        res.status(500).json({
            error: 'Internal Server Error'
        })
    }
}