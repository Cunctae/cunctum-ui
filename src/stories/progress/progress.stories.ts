import { Meta, StoryObj } from "@storybook/html";
import { ProgressProps, createProgress } from "./progress";

const meta: Meta<ProgressProps> = {
    title: "Atoms/Progress",
    decorators: [
        (story) => {
            const decorator = document.createElement("section");
            decorator.appendChild(story() as Node);
            return decorator;
        },
    ]
};
export default meta;

type Story = StoryObj<ProgressProps>;

const Template = ({ ...args }: ProgressProps) => {
    return createProgress({
        ...args,
    });
};

export const Default: Story = {
    render: Template,
};

Default.args = {
    max: 100,
    value: 50
};

export const Indeterminate: Story = {
    render: Template,
};

Indeterminate.args = {
    max: 100,
    indeterminate: true
};

