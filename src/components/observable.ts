interface IObserverData {
	isLoaded: boolean
	isError?: boolean
}

interface IObserver {
	(data: IObserverData): void
}

class Observable {
	private observers: IObserver[] = []

	constructor() {
		this.observers = []
	}

	subscribe(f: IObserver) {
		this.observers.push(f)
	}

	unsubscribe(f: IObserver) {
		this.observers = this.observers.filter((subscriber) => subscriber !== f)
	}

	notify(data: IObserverData) {
		this.observers.forEach((observer) => observer(data))
	}
}

export default new Observable()
