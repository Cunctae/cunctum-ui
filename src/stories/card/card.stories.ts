import { Meta, StoryObj } from "@storybook/html";
import { CardProps, createCard } from "./card";

const meta: Meta<CardProps> = {
  title: "Organisms/Card",
  decorators: [
    (story) => {
      const decorator = document.createElement("section");
      decorator.appendChild(story() as Node);
      return decorator;
    },
  ],
  argTypes: {
    title: {
      control: "text",
      description: "Title of the card",
      type: 'string',
      table: {
        defaultValue: {
          summary: "Title",
        },
      },
    },
    description: {
      control: "text",
      description: "Description of the card",
      type: 'string',
      defaultValue: {
        summary: "Description",
      },
    }
  },
};
export default meta;

type Story = StoryObj<CardProps>;

const Template = ({ title, description, ...args }: CardProps) => {
  return createCard({
    title,
    description,
    ...args,
  });
};

export const Default: Story = {
  render: Template,
};

Default.args = {
    title: 'Title',
    description: "Description",
    avatarProps: {
      iconType: 'image',
      size: 'medium'
    },
    
}

