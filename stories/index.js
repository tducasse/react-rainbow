import React from 'react';
import { storiesOf } from '@storybook/react';
import RainbowButton from './RainbowButton';
import colors from './colors';

storiesOf('Rainbow', module)
  .add('Without props', () => <RainbowButton />)
  .add('Colors list', () => <RainbowButton colors={colors} />)
  .add('Colors list, with initial', () => (
    <RainbowButton colors={colors} initial="YellowGreen" />
  ))
  .add('Colors list, ordered, with initial', () => (
    <RainbowButton colors={colors} initial={colors[0]} ordered />
  ));
