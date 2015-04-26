#!/usr/bin/env node

var lingon = require('lingon');
var lr = require('lingon-livereload');
var autoprefixer = require('gulp-autoprefixer')

// Set up auto-reload on save
lr(lingon);

// Automatically add vendor prefixes for cutting-edge CSS
lingon.postProcessors.push('less', function() {
  return autoprefixer();
});
