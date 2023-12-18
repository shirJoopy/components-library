import type { Meta, StoryObj } from '@storybook/react';

import TileLayout, { ExtendedTileLayoutItem } from './TileLayout';
import { TileLayoutProps } from '@progress/kendo-react-layout';
import { FC, ReactNode } from 'react';
//@ts-ignore
window._userLanguage = 'Hebrew';

const TilesContainer: FC<TileLayoutProps> = (props) => {

  return <div style={{
    width: '100%',
    height:'100vh',

  }}>
    <TileLayout {...props} />
  </div>
}
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/TileLayout',
  component: TilesContainer,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {

  },
} satisfies Meta<typeof TilesContainer>;

export default meta;
type Story = StoryObj<typeof meta>;


const tiles: Array<ExtendedTileLayoutItem> = [
  
  {
    defaultPosition: { col: 1, colSpan: 2, rowSpan: 2 },
    header: "Messages",
    item: <p>Reorderable and horizontally resizable only tile.</p>,
    resizable: false,
    reorderable: false,
  },
  {
    defaultPosition: { col: 3, colSpan: 4, rowSpan: 2 },
    header: "Tile 3",
    body: <p>Reorderable and vertically resizable only tile.</p>,
    resizable: false,
    reorderable: false,
  },
  

];
// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args:  {
    columns:6,
    columnWidth:200,
    rowHeight:360,
    autoFlow:'unset',
    gap:{ rows: 10, columns: 10 },
    items: tiles,
    
  },
};

