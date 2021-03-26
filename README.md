<p align="center">
  <img width="100" height="100" src="https://github.com/mikro/stepdad/blob/main/assets/Logo_Stepdad.png?raw=true">
</p>

# stepdad

Stupid simple and lightweight dependency injection

## Install

Install the package from npm:

```sh
npm i --save stepdad
```

Make sure that your `tsconfig.json` has the decorator options enabled:

```json
{
	"compilerOptions": {
		"experimentalDecorators": true,
		"emitDecoratorMetadata": true
	}
}
```

## Usage

Stepdad supports dependecy injections for constructors so far.
You can create a class that will receive an injection by decorating it with `@Inject()` and bootstrap the class. Stepdad will then inject all needed dependencies that are specified in the constructor.

```typescript
import { dad, Inject } from 'stepdad'

class BaseClass {
	print() {
		console.log('I love you, daddy!')
	}
}

@Inject()
class DependentClass {
	constructor(private base: BaseClass) {}

	print() {
		this.base.print()
	}
}

let [DC] = dad<DependentClass>(DependentClass)

DC.print()
```

The dependet class has to implement the `Releasable` interface if you need to release it at some point.
The `dad` bootsrap function will then also export the release funtion.

```typescript
import { dad, Inject, Releaseable } from 'stepdad'

class BaseClass {
	print() {
		console.log('I love you, daddy!')
	}
}

@Inject()
class DependentClass implements Releaseable {
	constructor(private base: BaseClass) {}

	print() {
		this.base.print()
	}

	release() {
		console.log('Bye')
	}
}

let [DC, release] = dad<DependentClass>(DependentClass)

DC.print()
release()
```
