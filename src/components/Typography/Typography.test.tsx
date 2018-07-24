import * as React from 'react';
import * as renderer from 'react-test-renderer';
import Typography from './index';

// test('Typography change className', () => {
//   const components = renderer.create(
//     <Typography>是是是</Typography>
//   ).toJSON();
//   expect(components).toMatchSnapshot();
// })

test('Typography', () => {

const testRenderer = renderer.create(<Typography size="super">啦啦啦啦</Typography>);
const testInstance = testRenderer.root;

expect(testInstance.findByType(Typography).props.size).toBe('super');
})