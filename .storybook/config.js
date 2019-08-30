import { configure, addParameters } from '@storybook/angular';
import { themes } from '@storybook/theming';

// Option defaults.
addParameters({
  options: {
    theme: themes.light,
  },
});

// automatically import all files ending in *.stories.ts
const req = require.context('../src/stories', true, /\.stories\.ts$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
