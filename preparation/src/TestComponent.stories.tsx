import React from 'react';

import { storiesOf } from '@storybook/react';

import {TestComponent} from './TestComponent'

storiesOf('Welcome', module).add('TestComponent', () => <TestComponent />);