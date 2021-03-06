import { configure } from '@storybook/react';
import requireContext from 'require-context.macro';


const req = requireContext('../src', true, /\.stories\.(js|ts|tsx)$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);