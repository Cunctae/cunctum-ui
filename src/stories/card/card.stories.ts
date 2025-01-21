import { CardProps, createCard } from "./card";

export default {
  title: "CunctumUI/Organisms/Card",
  parameters: {
    layout: 'centered',
  },
};

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
