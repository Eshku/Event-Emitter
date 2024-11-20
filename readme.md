# Yet another Event Emitter

## Overview

Provides a simple global event emitter for client-side javascript, allowing different parts of application to communicate with each other by emitting and listening for events.

## Disclaimer

This is a basic implementation; there is no "caching" or "queuing" of events, meaning if you are emitting an event and there are no listeners - no listeners will recieve event, even when new listener joins.

Not optimized.
Use at your own risk, test for your needs before using.

## Features

- Emiter emits.
- Listeners listening.
- Listeners can stop listening.
- Listeners can listen only once.
- Can remove All listeners based on event or just delete all of them.
- Works with both anonymous and named functions, declarations and expressions.

## Usage

```js
const { eventEmitter } = await import(`${PATH_TO_MODULE}/EventEmitter.js`)

let listenerID = eventEmitter.on('nameOfEvent', data => {
	//Listen to an event, do something with data.
	//Assign ID to listener to stop listening later if needed.
})

eventEmitter.once('nameOfEvent', data => {
	//Listen once, do something with data, then stop listening.
})

eventEmitter.emit('nameOfEvent', data)
//Emit event, send data to all current listeners
//returns true if emited to at least 1 listener, false otherwise.
//Might add seperate debug functionality later on.


eventEmitter.off(listenerID)
//Remove listener by ID.

eventEmitter.offAll(event)
//Remove all listeners - if no event specified - remove all listeners for all events.
```

## TODO

:recycle: - Improve Performance<br>
:white_check_mark: - JSDoc.<br>
:x: - Debug output.<br>
:x: - Test properly.<br>
:x: - Add Unit tests.<br>
:recycle: - Refactor.<br>
:x: - Error handling<br>
