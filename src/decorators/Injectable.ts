import { Type } from "../interfaces/Type";

export const Injectable = (): ((target: Type<any>) => void) => {
  return (target: Type<any>) => {};
};
