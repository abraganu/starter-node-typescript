import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default {
  createUser: () => {
    return prisma.user.create({
      data: {
        firstName: 'Abraham',
        lastName: 'Garcia'
      }
    })
  }
}