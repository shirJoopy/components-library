import type { Meta, StoryObj } from '@storybook/react';

import GitRepo from './GitRepo';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/GitRepo',
  component: GitRepo,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {

  },
} satisfies Meta<typeof GitRepo>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Primary: Story = {
  args: {

  },
};

