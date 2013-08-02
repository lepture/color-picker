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
  var picker = createPicker(options);
  this.element = picker.picker;
  this.editor = picker.editor;

  this.events = events(this.element, this);
  this.events.bind('click .color-chooser-color', 'choose');
  this.events.bind('keyup .color-picker-editor', 'change');
}
emitter(ColorPicker.prototype);


/**
 * Choose a color.
 */
ColorPicker.prototype.choose = function(e) {
  var color = e;
  if (e.preventDefault) {
    e.preventDefault();
    color = e.target.getAttribute('href');
  }
  this.change(color);
};


/**
 * Change the color value.
 */
ColorPicker.prototype.change = function(e) {
  var color = e;
  if (e.target) {
    color = e.target.value;
  }
  if (validColor(color)) {
    this.editor.value = color;
    this.editor.style.borderColor = color;
    this.emit('change', color);
  }
};


/**
 * Get or set the color value.
 */
ColorPicker.prototype.value = function(color) {
  if (!color) {
    // getter
    return this.editor.value;
  }
  this.change(color);
};


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
  return {
    picker: picker,
    chooser: chooser,
    editor: editor
  };
};


/**
 * Create the color chooser with the given `colors`.
 */
function createChooser(colors) {
  var fields = colors.map(function(color) {
    return '<a class="color-chooser-color" href="' + color + '" style="background-color: ' + color + '!important"></a>';
  });
  var chooser = document.createElement('div');
  chooser.className = 'color-picker-chooser';
  chooser.innerHTML = fields.join('');
  return chooser;
}


/**
 * Create editor input with the given `color`.
 */
function createEditor(color) {
  color = color || '#333333';
  var input = document.createElement('input');
  input.value = color;
  input.className = 'color-picker-editor';
  input.style.borderColor = color;
  input.setAttribute('maxlength', 7);
  return input;
}


/**
 * Check if the color is valid.
 */
function validColor(color) {
  if (!color) {
    return false;
  }
  return /^#[0-9a-zA-Z]{6}$/.test(color);
}
