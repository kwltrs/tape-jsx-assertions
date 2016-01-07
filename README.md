# tape-jsx-assertions

[Tape](https://github.com/substack/tape) extension inspired by [tape-jsx-equals](https://www.npmjs.com/package/tape-jsx-equals).


## Install

Requires [extend-tape](https://www.npmjs.com/package/extend-tape).

```
$ npm install --save-dev @kwltrs/tape-jsx-assertions
$ npm install --save-dev extend-tape
```

## Usage


```javascript
import tape from 'tape';
import jsxAssertions from '@kwltrs/tape-jsx-assertions';
import addAssertions from 'extend-tape';

const test = addAssertions(tape, jsxAssertions);
```

### Example

```javascript
import { createRenderer } from 'react-addons-test-utils';
import MyThingie from './MyThingie';

test('MyThingie', (t) {
  const renderer = createRenderer();
  renderer.render( <MyThingie /> );
  const result = renderer.getRenderOutput();

  t.jsxEquals(result, <div><p className='foo'>bar</p></div>);
  t.jsxIncludes(result, <p className='foo'>bar</p>);

  t.end();
});
```

## Assertions

### t.jsxEquals(actual, expected, msg)

### t.jsxIncludes(actual, expected, msg)

### t.jsxNotEquals(actual, expected, msg)

### t.jsxNotIncludes(actual, expected, msg)


# License

[Fair License](http://opensource.org/licenses/Fair)
