import { create } from "@storybook/theming";

export default create({
  base: "light",
  brandTitle: "Cunctum UI Storybook",
  brandUrl: "https://cunctae.github.io/cunctum-ui/",
  brandImage: "https://cunctae.com/_astro/c.tj_zdzn-.svg",
  brandTarget: "_self",

    //
    colorPrimary: '#3A10E5',
    colorSecondary: '#585C6D',
   
    // UI
    appBg: '#ffffff',
    appContentBg: '#ffffff',
    appPreviewBg: '#ffffff',
    appBorderColor: '#585C6D',
    appBorderRadius: 4,
   
    // Text colors
    textColor: '#10162F',
    textInverseColor: '#ffffff',
   
    // Toolbar default and active colors
    barTextColor: '#9E9E9E',
    barSelectedColor: '#585C6D',
    barHoverColor: '#585C6D',
    barBg: '#ffffff',
});
