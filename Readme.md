# color-picker

Color picker with predefined colors.

[![Build Status](https://travis-ci.org/lepture/color-picker.png?branch=master)](https://travis-ci.org/lepture/color-picker)
[![Coverage Status](https://coveralls.io/repos/lepture/color-picker/badge.png)](https://coveralls.io/r/lepture/color-picker)

[![color-picker](https://f.cloud.github.com/assets/290496/898777/86a075da-fb21-11e2-8a77-1e95fc072976.png)](http://lab.lepture.com/color-picker/)

## Installation

Install with [component(1)](http://component.io):

    $ component install lepture/color-picker

Install with [spm](https://github.com/spmjs/spm2):

    $ spm install lepture/color-picker

## Example

```js
var ColorPicker = require('color-picker');

var picker = new ColorPicker();

picker.on('change', function(color) {
    console.log(color);
});
document.body.appendChild(picker.element);
```

## API

All methods are refered to the instance of `ColorPicker`:

```js
var picker = new ColorPicker();
```

It accepts parameters:

- colors for choosing: `new ColorPicker(['#ffcc00', '#ddccdd'])`
- default color: `new ColorPicker('#000000')`
- change both: `new ColorPicker(['#ffcc00', '#ddccdd'], '#000000')`

### .element

Property element of the color picker.

### .choose(color)

Choose a color, this is used by ColorPicker itself.

### .change(color)

Change a color, this is used by ColorPicker itself.

### .value(color)

Get or set the value.

```js
var color = picker.value();
picker.value('#ff33cc')
```

### .takeover(input)

Hide the input, and take position of it.

```
var input = document.querySelector('input.profile-color');
picker.takeover(input);
```

## Event

Color picker only emit a `change` event.

```js
picker.on('change', function(color) {
});
```

## License

MIT
