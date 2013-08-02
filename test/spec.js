describe('Color Picker', function() {
  var ColorPicker = require('color-picker');

  function equal(a, b) {
    if (a !== b) {
      throw new Error(a + ' not equal ' + b);
    }
  }

  it('can initialize', function() {
    // without parameters
    new ColorPicker();

    // with colors
    new ColorPicker(['#ffcc00', '#dd00ff']);

    // with default color
    new ColorPicker('#000000');

    // change both
    new ColorPicker(['#ffcc00', '#dd00ff'], '#000000');
  });

  it('can change value', function() {
    var picker = new ColorPicker('#000000');
    equal('#000000', picker.value());

    picker.change('#999999');
    equal('#999999', picker.value());
  });

  it('can choose value', function() {
    var picker = new ColorPicker('#000000');
    equal('#000000', picker.value());

    picker.choose('#999999');
    equal('#999999', picker.value());
  });

  it('can set value', function() {
    var picker = new ColorPicker('#000000');
    equal('#000000', picker.value());

    picker.value('#999999');
    equal('#999999', picker.value());
  });

  it('will not change when color is invalid', function() {
    var picker = new ColorPicker('#000000');
    equal('#000000', picker.value());

    picker.change('#hg');
    equal('#000000', picker.value());
  });

  it('will emit change event', function(done) {
    var picker = new ColorPicker();
    picker.on('change', function(color) {
      equal('#999999', color);
      done();
    });
    picker.change('#999999');
  });
});
