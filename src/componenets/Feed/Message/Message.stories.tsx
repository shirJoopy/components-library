import type { Meta, StoryObj } from '@storybook/react';

import Message from './Message';
import { MessgeIcons } from '../../Icons';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/Message',
  component: Message,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {

  },
} satisfies Meta<typeof Message>;

export default meta;
type Story = StoryObj<typeof meta>;




export const Primary: Story = {
  args: {
      title:'test',
      content:'another test',
      date:new Date(),
      Icon:MessgeIcons.AlertSvg ,
      index:0,
      author:{
        userId:123,
        altText:'Jonnie',
        avatarUrl:'https://www.svgrepo.com/show/382100/female-avatar-girl-face-woman-user-7.svg'
      }



  },
};

