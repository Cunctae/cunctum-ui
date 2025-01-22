import { Meta } from "@storybook/html";
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
};
export default meta;


const Template = ({ title, description, ...args }: CardProps) => {
  return createCard({
    title,
    description,
    ...args,
  });
};

export const Default: any = Template.bind({})

Default.args = {
    title: 'Title',
    description: "Description"
}

