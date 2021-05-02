import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default {
  users: () => {
    return prisma.user.findMany({
      select: {
        firstName: true,
        lastName: true,
        role: true
      }
    })
  }
}