import "reflect-metadata";
import { Type } from "../interfaces/Type";

export class Injector extends Map {
  public resolve<T>(target: Type<any>): T {
    const tokens = Reflect.getMetadata("design:paramtypes", target) || [];
    const injections = tokens.map((token: Type<any>) =>
      this.resolve<any>(token)
    );

    const classInstance = this.get(target);
    if (classInstance) {
      return classInstance;
    }

    //Object.defineProperty(target, );

    const newClassInstance = new target(...injections);
    this.set(target, newClassInstance);

    return newClassInstance;
  }

  public release(): void {
    for (const value of this.values()) {
      if (typeof value["release"] === "function") {
        value["release"]();
      }
    }

    this.clear();
  }
}
