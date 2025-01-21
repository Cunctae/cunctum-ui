import { Meta, StoryObj } from "@storybook/html";
import { InputProps, createInput } from "./input";
import { InputType } from "./input.types";

const meta: Meta<InputProps> = {
  title: "CunctumUI/Atoms/Input",
  decorators: [
    (story) => {
      const decorator = document.createElement("section");
      decorator.appendChild(story() as Node);
      return decorator;
    },
  ],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    min: {
      control: 'number',
    },
    max: {
      control: 'number',
    },
    checked: {
      control: "boolean",
      options: [true, false],
      if: { arg: 'type', eq: 'checkbox' }
    },
    color: {
      control: "color",
      if: { arg: 'type', eq: 'color' }
    },
    placeholder: {
      control: "text",
      if: { arg: 'type', neq: 'color' }
    }
  }
};

export default meta;

type Story = StoryObj<InputProps>;

const Template = ({ ...args }: InputProps) => {
  return createInput({
    ...args,
  });
};

const createStory = (
  name: string, 
  type: InputType,
  defaultArgs: Partial<InputProps> = {},
  excludeProps: (keyof InputProps)[] = []
): Story => {
  const story: Story = {
    render: Template,
    args: {
      placeholder: name,
      type,
      ...defaultArgs
    }
  };

  if (excludeProps.length) {
    story.argTypes = {};
    excludeProps.forEach(prop => {
      story.argTypes![prop] = { table: { disable: true } };
    });
  }

  return story;
};

export const Text = createStory("Text", "text");
export const Date = createStory("Date", "date");
export const Checkbox = createStory("Checkbox", "checkbox", { checked: true }, ['placeholder']);
export const Color = createStory("Color", "color", { color: '#ba68c8' }, ['placeholder', 'checked']);
export const File = createStory("File", "file");
export const Range = createStory("Range", "range", {min: '0' , max: '100'});
