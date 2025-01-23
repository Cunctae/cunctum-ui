import type { Preview } from "@storybook/html";
import '../src/style.css';


const customViewports = {
  xs: {
    name: 'xs',
    styles: {
      width: '320px',
      height: '450px'
    }
  },
  sm: {
    name: 'sm',
    styles: {
      width: '375px',
      height: '450px'
    }
  },
  md: {
    name: 'md',
    styles: {
      width: '768px',
      height: '450px'
    }
  },
  lg: {
    name: 'lg',
    styles: {
      width: '1024px',
      height: '450px'
    }
  },
  xl: {
    name: 'xl',
    styles: {
      width: '1440px',
      height: '450px'
    }
  }

}

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    viewport: {
      viewports: customViewports
    }
  },
};

export default preview;
