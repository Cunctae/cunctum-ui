import { Meta, StoryObj } from "@storybook/html";
import { IconProps, createIcon } from "./icon";
import { coordinatesPaths } from "./icon.paths";

const meta: Meta<IconProps> = {
  title: "Atoms/Icon",
  decorators: [
    (story) => {
      const decorator = document.createElement("section");
      decorator.appendChild(story() as Node);
      return decorator;
    },
  ],
};
export default meta;

type Story = StoryObj<IconProps>;

const Template = ({ ...args }: IconProps) => {
  return createIcon({
    ...args,
  });
};

export const Default: Story = {
  render: Template,
};

Default.args = {
  boxHeight: '15',
  boxWidth: '15',
  coordinates: coordinatesPaths['hamburger']
};
