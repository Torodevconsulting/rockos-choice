import { PrismaClient } from "@/generated/prisma/client"

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient }

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    accelerateUrl: process.env.DATABASE_URL ?? "",
    ...(process.env.NODE_ENV !== "production" ? { log: ["query"] } : {}),
  })

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma
