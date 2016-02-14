# browser-viewport
Browser viewport lib – smooth scrolling and viewport operating methods

## Installation
```bash
npm install browser-viewport --save
```

## Usage
You can use library to smooth scrolling or detecting element in viewport or no

```javascript
var viewport = require('browser-viewport');
viewport.scrollTop(500, 1000);
```

```javascript
var viewport = require('browser-viewport');
var element = document.querySelector('#some-element-id');
viewport.scrollTo(element);
```

## Methods

### scrollTo(element, duration)
Little helper to do smooth scroll to element with duration of 700 ms

- **element** - DOM element to scroll to

### scrollTop(offset, duration)
Do window smooth scrolling to offset

- **offset** - scroll to that offset from top
- **duration** - how smooth your scroll? in ms

### isIn(element)
Check if element is visible in current viewport

- **element** - DOM element to check

### width()
Get current viewport width

### height()
Get  current viewport height
