# browser-viewport
Browser viewport lib – smooth scrolling and viewport operating methods

## Installation
```bash
npm install browser-viewport --save
```

## Usage
You can use library to smooth scrolling or detecting element in viewport or no

```javascript
var viewport = require('browser-viewport')
var element = document.query('#some-element-id')
viewport.scrollTo(document.body, element.offsetTop, 500)
```
## Methods

### scrollTo(scrollable_container, offset, timeout)
Do smooth scrool to needed element offset

- **scrollable_container** - container that will be scrolled, normally its *document.body*
- **offset** - scroll to that offset from top
- **timeout** - how smooth your scroll? in ms

### isIn(element)
Check if element is visible in current viewport

- **element** - DOM element to check
