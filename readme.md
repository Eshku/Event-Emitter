# Yet another Event Emitter

## Overview

Provides a simple global event emitter for client-side javascript, allowing different parts of application to communicate with each other by emitting and listening for events.

## Disclaimer

This is a basic implementation; there is no "caching" or "queuing" of events, meaning if you are emitting an event and there are no listeners - no listeners will recieve event, even when new listener joins.

Not optimized, made with thought of ease of use over performance.
Use at your own risk, test for your needs before using.

## Features

- Emiter emits
- Listeners listening
- Listeners can stop listening
- Listeners can listen only once
- Works with both anonymous and named functions, declarations and expressions.

## Usage

```js
const { eventEmitter } = await import(`${PATH_TO_MODULE}/EventEmitter.js`)

eventEmitter.once('nameOfEvent', data => {
	//Listen once, do something with data, then stop listening.
})

let listenerID = eventEmitter.on('nameOfEvent', data => {
	//Listen to an event, do something with data.
	//Assign ID to listener to remove it later if needed.
})

eventEmitter.emit('nameOfEvent', data)
//Emit event, send data to all current listeners

eventEmitter.off(listenerID)
//Remove listener by ID.
```

## Boring stuff

Copyright (c) [2024] [Eshku]
Licensed under the MIT License.

---
