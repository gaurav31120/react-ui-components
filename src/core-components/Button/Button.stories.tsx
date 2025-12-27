import type { Meta, StoryObj } from '@storybook/react'
import Button from './Button'

/* ---------------------------------- */
/* CONSTANTS */
/* ---------------------------------- */
const THEME = {
    DEFAULT: 'default',
    PRIMARY: 'primary',
    SECONDARY: 'secondary',
    TERTIARY: 'tertiary',
} as const

/* ---------------------------------- */
/* META */
/* ---------------------------------- */
const meta: Meta<typeof Button> = {
    title: 'Core Components/Button',
    component: Button,
    args: {
        label: 'Button',
    },
    argTypes: {
        theme: {
            options: Object.values(THEME),
            control: { type: 'inline-radio' },
            defaultValue: THEME.DEFAULT,
        },

        disabled: {
            control: { type: 'boolean' },
        },

        loading: {
            control: { type: 'boolean' },
        },

        onClick: { action: 'clicked' },
    },
}

export default meta

/* ---------------------------------- */
/* TYPES */
/* ---------------------------------- */
type Story = StoryObj<typeof Button>

/* ---------------------------------- */
/* TEMPLATE */
/* ---------------------------------- */
const Template: Story = {
    render: (args: any) => {
        return <Button {...args} />
    },
}

/* ---------------------------------- */
/* STORIES */
/* ---------------------------------- */
export const Default: Story = {
    ...Template,
}

export const Disabled: Story = {
    ...Template,
    args: {
        disabled: true,
    },
}

export const Loading: Story = {
    ...Template,
    args: {
        loading: true,
        children: 'Loading',
    },
}

export const Primary: Story = {
    ...Template,
    args: {
        theme: THEME.PRIMARY,
    },
}
