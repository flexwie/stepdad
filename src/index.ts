import "reflect-metadata";
import { Injector } from "./container/Injector";
import { vaxx } from "./container/vaxx";
import { Injectable } from "./decorators/Injectable";
import { Releaseable } from "./interfaces/Releasable";

@Injectable()
class InjectClass {
  print() {
    console.log("hi");
  }
}

@Injectable()
class TestClass implements Releaseable {
  constructor(private printCl: InjectClass) {}

  get print(): InjectClass {
    return this.printCl;
  }

  release() {
    console.log("I am destroying");
  }
}

let [cl, release] = vaxx<TestClass>(TestClass);

console.log(cl.print.print());

release();
