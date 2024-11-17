# Yet another Event Emitter

## Overview

Provides a simple global event emitter for client-side javascript, allowing different parts of application to communicate with each other by emitting and listening for events.

## Disclaimer

This is a basic implementation; there is no "caching" or "queuing" of events, meaning if you are emitting an event and there are no listeners - no listeners will recieve event, even when a new listener joins.

Do not expect it to be optimized for performance or, well, optimized at all at this point.
It works for my needs, I'ma call it good enough ¯\_(ツ)\_/¯

Use at your own risk, test for your needs before using.

## features

- emiter emits
- listeners listen
- listeners can stop listening
- listeners can listen only once
- works with anonymous functions (can access listener by it's ID)
- should work with named functions (although not tested)

## Usage

```js
const { EventEmitter } = await import(`${PATH_TO_MODULE}/EventEmitter.js`)

globalEventManager.once('nameOfEvent', data => {
	//listen once, do something with data, then stop listening
})

globalEventManager.on('nameOfEvent', data => {
	//listen to an event, do something with data
})

globalEventManager.emit('nameOfEvent', data)
//emit event, send data to all current listeners

globalEventManager.off('nameOfEvent', listenerID)
//remove listener by ID, probably could be made easier to use, 
//since all you really need is ID, but I'm gonna leave it as it is.
```

## Boring stuff

Copyright (c) [2024] [Eshku]
Licensed under the MIT License.

---
