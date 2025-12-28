import type { Meta, StoryObj } from '@storybook/react'
import Loader, { type LoaderProps } from './Loader'

/* ---------------------------------- */
/* META */
/* ---------------------------------- */

const meta: Meta<LoaderProps> = {
    title: 'core-components/Loader',
    component: Loader,
}

export default meta

/* ---------------------------------- */
/* TYPES */
/* ---------------------------------- */
type Story = StoryObj<LoaderProps>

/* ---------------------------------- */
/* TEMPLATE */
/* ---------------------------------- */
export const Default: Story = {
    args: {
        size: 'large',
        className: '',
    },
}
