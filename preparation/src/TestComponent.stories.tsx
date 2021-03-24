import React from 'react';

import { storiesOf } from '@storybook/react';

import {TestComponent} from './TestComponent';
import { helloworld } from 'context';

storiesOf('TestComponent', module)
  .add('test', () => <TestComponent>{`${helloworld} from storybook`}</TestComponent>)
  .add('test with defaultText', () => <TestComponent/>);