import type { Meta, StoryObj } from '@storybook/react'
import Button from './Button'

const meta: Meta<typeof Button> = {
    title: 'Core Components/Button',
    component: Button,
    args: {
        children: 'Button',
    },
    argTypes: {
        variant: {
            options: ['primary', 'secondary', 'tertiary', 'danger'],
            control: { type: 'inline-radio' },
        },
        theme: {
            options: ['default', 'danger'],
            control: { type: 'inline-radio' },
        },
        size: {
            options: ['small', 'default', 'medium', 'large'],
            control: { type: 'inline-radio' },
        },
        disabled: {
            control: { type: 'boolean' },
        },
        loading: {
            control: { type: 'boolean' },
        },
        fluid: {
            control: { type: 'boolean' },
        },
        onClick: { action: 'clicked' },
    },
}

export default meta

type Story = StoryObj<typeof Button>

export const Default: Story = {}

export const Primary: Story = {
    args: {
        variant: 'primary',
    },
}

export const Secondary: Story = {
    args: {
        variant: 'secondary',
    },
}

export const Tertiary: Story = {
    args: {
        variant: 'tertiary',
    },
}

export const Danger: Story = {
    args: {
        variant: 'danger',
    },
}

export const DangerTheme: Story = {
    args: {
        theme: 'danger',
        variant: 'primary',
    },
}

export const Small: Story = {
    args: {
        size: 'small',
    },
}

export const Large: Story = {
    args: {
        size: 'large',
    },
}

export const Loading: Story = {
    args: {
        loading: true,
    },
}

export const Disabled: Story = {
    args: {
        disabled: true,
    },
}

export const Fluid: Story = {
    args: {
        fluid: true,
    },
}
