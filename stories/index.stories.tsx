import * as React from 'react';

// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';
import { storiesOf } from '@storybook/react';


// import {TextSuper} from '../build/dist/src/components/Typography';
import {Typography}  from '../src/components/Typography';

// storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

// storiesOf('Button', module)
//   .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
//   .add('with some emoji', () => (
//     <Button onClick={action('clicked')}>
//       <span role="img" aria-label="so cool">
//         😀 😎 👍 💯
//       </span>
//     </Button>
//   ));
storiesOf('Typography', module)
  .add('typography', () => <Typography>Top experiences in Asia</Typography>)
  .add('typography2', () => <Typography>Top experiences in Asia2</Typography>)