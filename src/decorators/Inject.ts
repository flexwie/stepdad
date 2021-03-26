import { Type } from '../interfaces/Type'

export const Inject = (): ((target: Type<any>) => void) => {
	return (target: Type<any>) => {}
}
