import { Meta, StoryObj } from "@storybook/html";
import { AvatarProps, createAvatar } from "./avatar";

const meta: Meta<AvatarProps> = {
  title: "Atoms/Avatar",
  decorators: [
    (story) => {
      const decorator = document.createElement("section");
      decorator.appendChild(story() as Node);
      return decorator;
    },
  ],
  argTypes: {
    iconType: {
      control: "inline-radio",
      description: "The type of the current icon",
      options: ["emoji", "image"],
    },
    size: {
      control: "inline-radio",
      description: "The type of the current icon",
      options: ["small", "medium", "large"],
    },
  },
};
export default meta;

type Story = StoryObj<AvatarProps>;

const Template = ({ ...args }: AvatarProps) => {
  return createAvatar({
    ...args,
  });
};

export const Default: Story = {
  render: Template,
};

Default.args = {
  iconType: "emoji",
  size: "medium",
};
