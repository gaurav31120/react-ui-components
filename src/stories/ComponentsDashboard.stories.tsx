import type { Meta } from '@storybook/react'

const meta: Meta = {
    title: 'Dashboard/Components',
}

export default meta

export const Components = () => {
    return (
        <div
            style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                gap: '16px',
            }}
        >
            <ComponentCard title="Button" />
            <ComponentCard title="Input" />
            <ComponentCard title="Modal" />
        </div>
    )
}

const ComponentCard = ({ title }: { title: string }) => {
    return (
        <a
            href={`/?path=/story/core-components-${title.toLowerCase()}--default`}
            style={{ textDecoration: 'none', color: 'inherit' }}
        >
            <div
                style={{
                    border: '1px solid #ddd',
                    borderRadius: '8px',
                    padding: '16px',
                    textAlign: 'center',
                    cursor: 'pointer',
                }}
            >
                <h3>{title}</h3>
                <p>View {title} component</p>
            </div>
        </a>
    )
}
