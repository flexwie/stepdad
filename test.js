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