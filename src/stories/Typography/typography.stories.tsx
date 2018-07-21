import {  select, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from  '@storybook/react';
import * as React from 'react';
import { Typography } from '../../components';

storiesOf('Typography', module)
  .addDecorator(withKnobs)
  .add('super-H8', () => (
    <Typography size={select('Size', ["H1", "H2", "H3", "H4", "H5", "H6", "H7", "H8"], 'H1')}>Nice Typography</Typography>
  )) 