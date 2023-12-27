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
      type:'alert',
      content:'another test',
      date:'01/01/2023',
      Icon:MessgeIcons.AlertSvg ,
      index:0,
      author:{
        id:123,
        username:'Jonnie',
        role:'SuperUser',
        channel_id: 1,
        departmentId: 34,
        dataVisible: true,
        salaryVisible: true,
        chartId: 0,
        mgrReadOnly: false,
        roleId: 3,
        canSeeOtherEmployees: true
    
      } 



  },
};

