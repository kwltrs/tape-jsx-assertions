var reactElementToJSXString = require('react-element-to-jsx-string');
var collapse = require('collapse-white-space');
var defined = require('defined');

function elementToString (el) {
  return collapse( reactElementToJSXString(el) );
}

module.exports = {
  jsxEquals: function (a, b, msg, extra) {
    var actual = elementToString(a);
    var expected = elementToString(b);

    this._assert(actual === expected, {
      message: defined(msg, 'should equal'),
      operator: 'jsxEquals',
      actual: actual,
      expected: expected,
      extra: extra
    });
  },

  jsxNotEquals: function (a, b, msg, extra) {
    var actual = elementToString(a);
    var expected = elementToString(b);

    this._assert(actual !== expected, {
      message: defined(msg, 'should not equal'),
      operator: 'jsxNotEquals',
      actual: actual,
      expected: expected,
      extra: extra
    });
  },

  jsxIncludes: function (a, b, msg, extra) {
    var actual = elementToString(a);
    var expected = elementToString(b);

    this._assert(actual.includes(expected), {
      message: defined(msg, 'should include'),
      operator: 'jsxIncludes',
      actual: actual,
      expected: expected,
      extra: extra
    });
  },

  jsxNotIncludes: function (a, b, msg, extra) {
    var actual = elementToString(a);
    var expected = elementToString(b);

    this._assert(!actual.includes(expected), {
      message: defined(msg, 'should not include'),
      operator: 'jsxNotIncludes',
      actual: actual,
      expected: expected,
      extra: extra
    });
  }
};
