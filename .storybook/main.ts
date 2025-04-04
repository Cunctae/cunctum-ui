import type { StorybookConfig } from "@storybook/html-vite";

const config: StorybookConfig = {
  framework: "@storybook/html-vite",
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-controls",
    "@storybook/addon-actions",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-docs",
    "@storybook/addon-backgrounds",
    "@storybook/addon-toolbars",
    "@storybook/addon-measure",
    "@storybook/addon-outline",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y",
    "@chromatic-com/storybook",
  ],
  staticDirs: ["../public"],
  managerHead: (head) => `
  ${head}
  <link rel="preload" href="/fonts/Athabasca Rg.otf" />
  <link rel="icon" href="/favicon.ico" type="image/x-icon" />
`,
};
export default config;
