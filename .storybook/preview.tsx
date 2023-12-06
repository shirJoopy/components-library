import type { Preview } from "@storybook/react";
import React from "react";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },

  },
  decorators: [
    (Story) => {


      setTimeout(() => {
        
        [2,3,4,5,6,7,8].forEach((index) => {
          const pallete = document.querySelector(`#storybook-root > div > div:nth-child(${index})`)
          pallete?.parentElement?.removeChild(pallete);
        })
      }, 0)
      return <Story />
    },
  ]
};
const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = 'https://kendo.cdn.telerik.com/themes/7.0.1/default/default-ocean-blue.css';
document.head.appendChild(link);


export default preview;
