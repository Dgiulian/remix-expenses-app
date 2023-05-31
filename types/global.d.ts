import type { PrismaClient } from "@prisma/client";

declare global {
  var __db: PrismaClient;
  namespace NodeJS {
    interface Global {
      __db: any;
    }
  }
}

export {};
