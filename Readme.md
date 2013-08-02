# color-picker

Color picker with predefined colors.

![color-picker](https://f.cloud.github.com/assets/290496/898777/86a075da-fb21-11e2-8a77-1e95fc072976.png)

## Installation

Install with [component(1)](http://component.io):

    $ component install lepture/color-picker


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

## Event

Color picker only emit a `change` event.

```js
picker.on('change', function(color) {
});
```

## License

MIT
