# Yet another Event Emitter

## Overview

Provides a simple global event emitter for client-side javascript, allowing different parts of application to communicate with each other by emitting and listening for events.

## Disclaimer

This is a basic implementation; there is no "caching" or "queuing" of events, meaning if you are emitting an event and there are no listeners - no listeners will recieve event, even when a new listener joins.

Do not expect it to be optimized for performance or, well, optimized at all at this point.
It works for my needs, I'ma call it good enough ¯\_(ツ)\_/¯

Use at your own risk, test for your needs before using.

## Features

- Emiter emits
- Listeners listening
- Listeners can stop listening
- Listeners can listen only once
- Works with anonymous functions (can access listener by it's ID)
- Should work with named functions (although not tested)

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

eventEmitter.off('nameOfEvent', listenerID)
//Remove listener by ID, probably could be made easier to use,
//since all you really need is ID, but I'm gonna leave it as it is.
```

## Boring stuff

Copyright (c) [2024] [Eshku]
Licensed under the MIT License.

---
