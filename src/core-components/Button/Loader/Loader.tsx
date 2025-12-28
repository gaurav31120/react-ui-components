import './Loader.scss'

export interface LoaderProps {
    size?: 'large' | 'small' | 'extra_large' | 'default'
    className?: string
}

const Loader = ({ size = 'large', className = '' }: LoaderProps) => (
    <div
        className={`loader loader--size-${size} ${className}`}
        data-testid="loader"
    >
        <svg className="loader__circle" viewBox="25 25 50 50">
            <circle
                className="loader__path"
                cx="50"
                cy="50"
                r="20"
                fill="none"
                strokeWidth="2"
                strokeMiterlimit="10"
            />
        </svg>
    </div>
)

export default Loader
