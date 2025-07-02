import type { Preview } from '@storybook/react';
import '../styles/globals.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      default: 'y2k-gradient',
      values: [
        {
          name: 'y2k-gradient',
          value: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
        },
        {
          name: 'dark',
          value: '#0f172a',
        },
        {
          name: 'white',
          value: '#ffffff',
        },
      ],
    },
  },
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      defaultValue: 'light',
      toolbar: {
        title: 'Theme',
        icon: 'paintbrush',
        items: ['light', 'dark'],
        dynamicTitle: true,
      },
    },
  },
};

export default preview;