// import type { Meta, StoryObj } from '@storybook/react';

// import SelectTenantScreen from './SelectTenantScreen';

// // More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
// const meta = {
//   title: 'Components/SelectTenantScreen',
//   component: SelectTenantScreen,
//   parameters: {
//     // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
//     layout: 'centered',
//   },
//   // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
//   // More on argTypes: https://storybook.js.org/docs/api/argtypes
//   argTypes: {

//   },
// } satisfies Meta<typeof SelectTenantScreen>;

// export default meta;
// type Story = StoryObj<typeof meta>;




// export const Primary: Story = {
//   args: {
      



//   },
// };
import React from 'react';
import { Meta, Story } from '@storybook/react';
import SelectTenantScreen from './SelectTenantScreen';
import Header from './Header';
import Footer from './Footer';

export default {
  title: 'Components/SelectTenantScreen',
  parameters: {
    layout: 'centered',
  },
} as Meta;

type AppProps = {};

const App: React.FC<AppProps> = () => (
  <div>
    <Header />
    <SelectTenantScreen />
    <Footer />
  </div>
);

// const meta: Meta = {
//   title: 'Components/App',
//   component: App,
//   parameters: {
//     layout: 'centered',
//   },
//   argTypes: {},
// };

export { App as Primary }; // Export the App component as Primary

// export { meta }; // Export the meta information if needed
