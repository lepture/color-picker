#!/usr/bin/env python

with open('index.js') as f:
    code = f.read()
    code = code.replace(
        "var emitter = require('emitter');",
        "var $ = require('$')"
    )
    code = code.replace(
        'emitter(ColorPicker.prototype);',
        'events.mixTo(ColorPicker);'
    )
    code = code.replace(
        'this.events = events(this.element, this);',
        'var el = $(this.element);'
    )
    code = code.replace(
        "this.events.bind('click .color-chooser-color', 'choose');",
        "el.on('click', '.color-chooser-color', $.proxy(this.choose, this));"
    )
    code = code.replace(
        "this.events.bind('keyup .color-picker-editor', 'change');",
        "el.on('keyup', '.color-picker-editor', $.proxy(this.change, this));"
    )
    code = code.replace('this.emit', 'this.trigger');
    print 'define(function(require, exports, module) {'
    print code
    print '});'
