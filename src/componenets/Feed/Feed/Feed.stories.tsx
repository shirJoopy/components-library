 import React from 'react';
import VirtualizedList from './Feed';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof VirtualizedList> = {
  component: VirtualizedList,
};

export default meta;

type Story = StoryObj<typeof VirtualizedList>;
//const data:Array<ExtendedFeed>= Array.from({ length: 10 }, (_, index) => `Item ${index + 1}`);

export const Feed:Story= {
  
}   //() => <VirtualizedList data={data} />;