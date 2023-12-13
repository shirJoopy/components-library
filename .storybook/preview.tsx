import type { Preview } from "@storybook/react";
import React, { useEffect } from "react";

const loadScript = (src: string) => {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = src;
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });
}

const loadCss = (href: string) => {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = href;
  document.head.appendChild(link);
}

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
      useEffect(() => {
          loadCss('https://kendo.cdn.telerik.com/themes/7.0.1/default/default-ocean-blue.css');
      }, []);

      return <Story />;
    },
  ],
};

export default preview;
