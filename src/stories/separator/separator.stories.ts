import { Meta, StoryObj } from "@storybook/html";
import { Orientation, SeparatorProps, createSeparator } from "./separator";

const meta: Meta<SeparatorProps> = {
  title: "Atoms/Separator",
  decorators: [
    (story) => {
      const decorator = document.createElement("section");
      decorator.appendChild(story() as Node);
      return decorator;
    },
  ],
};
export default meta;

type Story = StoryObj<SeparatorProps>;

const Template = ({ ...args }: SeparatorProps) => {
  return createSeparator({
    ...args,
  });
};

export const Default: Story = {
  render: Template,
};

Default.args = {
  orientation: Orientation.VERTICAL
};
