import { Meta, StoryObj } from "@storybook/html";
import { LabelProps, createLabel } from "./label";

const meta: Meta<LabelProps> = {
  title: "Atoms/Label",
  decorators: [
    (story) => {
      const decorator = document.createElement("section");
      decorator.appendChild(story() as Node);
      return decorator;
    },
  ],
  argTypes: {
    type: {
      control: "inline-radio",
      description: "Label type",
      options: ["h1", "h2", "p18", "p16", "p14", "p12"],
      type: 'string',
    },
  },
};
export default meta;

type Story = StoryObj<LabelProps>;

const Template = ({ ...args }: LabelProps) => {
  return createLabel({
    ...args,
  });
};

export const Default: Story = {
  render: Template,
};

Default.args = {
  type: 'h1'
};
