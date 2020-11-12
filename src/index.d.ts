export {};

declare global {
  namespace NodeJS {
    interface Global extends WindowLocalStorage {}
  }
}
