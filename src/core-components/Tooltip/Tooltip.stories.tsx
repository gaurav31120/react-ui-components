import type { Meta, StoryObj } from "@storybook/react";
import { Tooltip } from "./Tooltip";

const meta: Meta<typeof Tooltip> = {
  title: "Core/Tooltip",
  component: Tooltip,
};

export default meta;

type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  args: {
    content: "This is a tooltip message",
    children: <button>Click me</button>,
  },
};

export const Bottom: Story = {
  args: {
    content: "Bottom tooltip",
    position: "bottom",
    children: <button>Bottom</button>,
  },
};

export const Left: Story = {
  args: {
    content: "Left tooltip",
    position: "left",
    children: <button>Left</button>,
  },
};

export const Right: Story = {
  args: {
    content: "Right tooltip",
    position: "right",
    children: <button>Right</button>,
  },
};
