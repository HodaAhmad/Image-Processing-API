'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
//checking if file name is entered
var checkFileNameExists = function (filename) {
  if (filename) {
    console.log('filename entered');
    return true;
  }
  console.log('filename not entered');
  return false;
};
//checking if width is positive
var checkWidth = function (width) {
  if (width <= 0 || Number.isNaN(width)) {
    console.log('width not positive value');
    return false;
  }
  console.log('width positive value ');
  return true;
};
//check if height is positive
var checkHeight = function (height) {
  if (height <= 0 || Number.isNaN(height)) {
    console.log('height not positive number');
    return false;
  }
  console.log('height positive number ');
  return true;
};
exports.default = {
  checkFileNameExists: checkFileNameExists,
  checkHeight: checkHeight,
  checkWidth: checkWidth,
};
