var events = require('events');
var emitter = require('emitter');

module.exports = ColorPicker;


// http://developer.android.com/design/style/color.html
var colors = [
  '#33b5e5',
  '#aa66cc',
  '#99cc00',
  '#ffbb44',
  '#ff4444',

  '#0099cc',
  '#9933cc',
  '#669900',
  '#ff8800',
  '#cc0000'
];

function ColorPicker(options) {
  var el = createPicker(options);

  this.events = events(el, this);
  this.events.bind('click .color-chooser-color', 'choose');
  this.events.bind('keyup .color-picker-editor', 'change');

  this.element = el;
}
emitter(ColorPicker.prototype);

ColorPicker.prototype.choose = function(e) {
  console.log(e);
}


/**
 * Create picker with the given `options`.
 */
function createPicker(options) {
  options = options || {};
  var chooser = createChooser(options.colors || colors);
  var editor = createEditor(options.defaultColor);

  var picker = document.createElement('div');
  picker.className = 'color-picker';
  picker.appendChild(chooser);
  picker.appendChild(editor);
  return picker;
};


function createChooser(colors) {
  var fields = colors.map(function(color) {
    return '<a class="color-chooser-color" href="' + color + '" style="background-color: ' + color + '!important"></a>';
  });
  var chooser = document.createElement('div');
  chooser.className = 'color-picker-chooser';
  chooser.innerHTML = fields.join('');
  return chooser;
}

function createEditor(color) {
  color = color || '#000000';
  var input = document.createElement('input');
  input.value = color;
  input.className = 'color-picker-editor';
  input.style.borderColor = color;
  return input;
}
