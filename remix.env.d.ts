/// <reference types="@remix-run/dev" />
/// <reference types="@remix-run/node" />

declare global {
  namespace NodeJS {
    interface Global {
      __db: any;
    }
  }
}

export {};
