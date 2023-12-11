import type { Meta, StoryObj } from '@storybook/react';

import Message from './Message';
import { MessgeIcons } from '../../Icons';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/Message',
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


// const tiles: Array<ExtendedTileLayoutItem> = [
//   {
//     stick: 'left',
//     defaultPosition: { col: 1, colSpan: 3, rowSpan: 1 },
//     header: "Tile 1",
//     body: <p>Resizable tile.</p>,
//     style: { background: 'white' }
//   },
//   {
//     stick: 'none',
//     defaultPosition: { col: 3, colSpan: 1, rowSpan: 1 },
//     header: "Tile 2",
//     body: <p>Non-resizable.</p>,
//     resizable: false
//   },
//   // {
//   //   stick: 'none',
//   //   defaultPosition: { col: 3, colSpan: 1, rowSpan: 2 },
//   //   header: "Tile 3",
//   //   body: <p>Vertically resizable only tile.</p>,
//   //   resizable: 'vertical'
//   // },
//   // {
//   //   stick: 'none',
//   //   defaultPosition: { col: 1, colSpan: 2, rowSpan: 1 },
//   //   header: "Tile 4",
//   //   body: <p>Horizontally resizable only tile.</p>,
//   //   resizable: 'horizontal'
//   // },
//   // {
//   //   stick: 'none',
//   //   defaultPosition: { col: 2, colSpan: 1, rowSpan: 3 },
//   //   className: 'empty',
//   //   item: null,
//   //   header: null,
//   //   style: {
//   //     background: 'rgba(0,0,0,0.01)',
//   //     border: 'none'
//   //   }
//   // }

// ];
// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
      title:'test',
      content:'another test',
      date:new Date(),
      Icon:MessgeIcons.AlertSvg ,
      author:{
        userId:123,
        altText:'Jonnie',
        avatarUrl:'https://www.svgrepo.com/show/382100/female-avatar-girl-face-woman-user-7.svg'
      }



  },
};

