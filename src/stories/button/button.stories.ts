import { ButtonProps, createButton } from "./button";
import type { Meta, StoryObj, StoryFn } from "@storybook/html";


const meta: Meta<ButtonProps> = {
  title: "CunctumUI/Atoms/Button",
  decorators: [
    (story) => {
      const decorator = document.createElement("section");
      decorator.appendChild(story() as Node);
      return decorator;
    },
  ],
  argTypes: {
    size: {
      control: "inline-radio",
      description: "Size of the button",
      options: ["small", "medium", "large"],
    },
    label: {
      control: "text",
      description: "Label of the button",
    },
    style: {
      control: "inline-radio",
      description: "The style of the button",
      options: ["filled", "outlined"],
    },
    onClick: {
      description: "Event",
      action: 'clicked'
    },
  },
};

export default meta;

type Story = StoryObj<ButtonProps>;

const Template: StoryFn<ButtonProps> = ({ label, ...args }: ButtonProps) => {
  return createButton({
    label,
    ...args,
  });
};

export const Outlined: Story = {
  render: Template,
};

Outlined.args = {
  label: "Button Outlined",
};

export const Filled: Story = {
  args: {
    style: "outlined",
  },

  render: Template,
};

Filled.args = {
  label: "Button Filled",
  style: "filled",
};
