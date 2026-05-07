// create prisma client to access the database
import { PrismaClient } from '@prisma/client';

export const db = new PrismaClient();