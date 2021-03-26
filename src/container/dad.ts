import { Type } from '../interfaces/Type'
import { Injector } from './Injector'

export const dad = <T>(target: Type<any>): [T, () => void] => {
	const injector = new Injector()
	const entryClass = injector.resolve<T>(target)

	return [entryClass, () => injector.release()]
}
