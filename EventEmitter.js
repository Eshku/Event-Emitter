class GlobalEventEmitter {
	constructor() {
		this.eventSubscribers = {}
		this.nextId = 1
	}

	on(eventName, callback) {
		if (!this.eventSubscribers[eventName]) {
			this.eventSubscribers[eventName] = []
		}

		const id = this.nextId++
		this.eventSubscribers[eventName].push({ id, callback })
		return id
	}

	emit(eventName, ...args) {
		const listeners = this.eventSubscribers[eventName] || []
		for (const listener of listeners) {
			listener.callback(...args)
		}
	}

	off(eventName, id) {
		if (this.eventSubscribers[eventName]) {
			this.eventSubscribers[eventName] = this.eventSubscribers[eventName].filter(listener => listener.id !== id)
		}
	}

	once(eventName, callback) {
		const id = this.on(eventName, (...args) => {
			callback(...args)
			this.off(eventName, id)
		})
		return id
	}
}

export const eventEmitter = new GlobalEventEmitter()
