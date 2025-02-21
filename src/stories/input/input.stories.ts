import { Meta, StoryObj } from "@storybook/html";
import { InputProps, createInput } from "./input";
import { InputType } from "./input.types";

const inputTypeOptions: InputType[] = [
  "button",
  "checkbox",
  "color",
  "date",
  "datetime-local",
  "email",
  "file",
  "hidden",
  "image",
  "month",
  "number",
  "password",
  "radio",
  "range",
  "reset",
  "search",
  "submit",
  "tel",
  "text",
  "time",
  "url",
  "week",
];

const meta: Meta<InputProps> = {
  title: "Atoms/Input",
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
    placeholder: {
      control: "text",
      if: { arg: "type", eq: "text" },
    },
    type: {
      control: "select",
      options: inputTypeOptions,
      table: {
        defaultValue: {
          summary: "text",
        },
      },
    },
    value: {
      control: "number",
      description: "Define the current value of the range",
      type: "string",
      table: {
        defaultValue: {
          summary: "10",
        },
      },
      if: { arg: "type", eq: "range" },
    },
    checked: {
      control: "boolean",
      options: [true, false],
      if: { arg: "type", eq: "checkbox" },
      table: {
        defaultValue: {
          summary: "false",
        },
      },
    },
    color: {
      control: "color",
      if: { arg: "type", eq: "color" },
      table: {
        defaultValue: {
          summary: "#943e0d",
        },
      },
    },
  },
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
      ...defaultArgs,
    },
  };

  if (excludeProps.length) {
    story.argTypes = {};
    excludeProps.forEach((prop) => {
      story.argTypes![prop] = { table: { disable: true } };
    });
  }

  return story;
};

export const Text = createStory("Text", "text");
export const Date = createStory("Date", "date");
export const Checkbox = createStory("Checkbox", "checkbox", { checked: true }, [
  "placeholder",
]);
export const Color = createStory("Color", "color", { color: "#A80A00" }, [
  "placeholder",
  "checked",
]);
export const File = createStory("File", "file");
export const Range = createStory("Range", "range", {
  value: "10",
  min: "0",
  max: "10",
});
