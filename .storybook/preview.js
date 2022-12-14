// .storybook/preview.js

import React from 'react';
import { addDecorator } from '@storybook/react';
import { GlobalStyle } from '../src/public/global';

addDecorator((story) => (
  <>
    <GlobalStyle />
    {story()}
  </>
));

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    expanded: true,
    matchers: {
      color: /(background|color|color1)$/i,
      date: /Date$/,
    },
  },
}