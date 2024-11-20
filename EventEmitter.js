class EventEmitter {
	constructor() {
		this.listeners = new Map()
		this.nextId = 1
	}

	/**
	 * Attaches a listener.
	 * @param {string} event - Event name.
	 * @param {function} callback - Callback function.
	 * @returns {number} Listener ID.
	 */

	on(event, callback) {
		if (!this.listeners.has(event)) this.listeners.set(event, new Map())

		const id = this.nextId++
		this.listeners.get(event).set(id, callback)
		return id
	}

	/**
	 * Attaches a one-time listener.
	 * @param {string} event - Event name.
	 * @param {function} callback - Callback function.
	 */

	once(event, callback) {
		const id = this.on(event, (...args) => {
			callback(...args)
			this.off(id, event)
		})
	}

	/**
	 * Emits an event.
	 * @param {string} event - Event name.
	 * @param {*} data - Data to pass.
	 */

	emit(event, ...args) {
		const listeners = this.listeners.get(event)

		if (!listeners) return false

		for (const callback of listeners.values()) callback(...args)

		return true
	}

	/**
	 * Removes a listener.
	 * @param {number} id - Listener ID.
	 * @param {string} [event] - Event name (optional).
	 */

	off(id, event) {
		if (event) {
			const listener = this.listeners.get(event)
			if (listener) {
				listener.delete(id)
				if (listener.size === 0) {
					this.listeners.delete(event)
				}
			}
		} else {
			for (const listener of this.listeners.values()) {
				if (listener.delete(id)) {
					if (listener.size === 0) {
						this.listeners.delete(event)
					}
					break
				}
			}
		}
	}

	/**
	 * Removes all listeners.
	 * @param {string} [event] - Event name (optional).
	 */

	offAll(event) {
		event ? this.listeners.delete(event) : this.listeners.clear()
	}
}

export const eventEmitter = new EventEmitter()
