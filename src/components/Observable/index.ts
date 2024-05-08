import { Observer, ObserverData } from './types'

class Observable {
	private observers: Observer[] = []

	constructor() {
		this.observers = []
	}

	subscribe(f: Observer) {
		this.observers.push(f)
	}

	unsubscribe(f: Observer) {
		this.observers = this.observers.filter((subscriber) => subscriber !== f)
	}

	notify(data: ObserverData) {
		this.observers.forEach((observer) => observer(data))
	}
}

export default new Observable()
