import type { ButtonHTMLAttributes, MouseEvent } from 'react'
import './Button.scss'
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    ariaLabel?: string
    className?: string
    dataTestId?: string
    disabled?: boolean
    fluid?: boolean
    label?: string
    // children: React.ReactNode;
    onClick?: () => void | ((event: MouseEvent<HTMLButtonElement>) => void)
    startIcon?: React.ReactNode
    endIcon?: React.ReactNode
    isActive?: boolean
    loading?: boolean
    theme?: 'default' | 'danger'
    variant?: 'primary' | 'secondary' | 'tertiary' | 'danger'
    size?: 'default' | 'small' | 'medium' | 'large'
}

const Button = ({
    // children,
    ariaLabel,
    className,
    dataTestId,
    disabled,
    fluid,
    label,
    onClick,
    startIcon,
    endIcon,
    isActive,
    loading,
    theme = 'default',
    variant = 'primary',
    size = 'default',
    ...rest
}: ButtonProps) => {
    const buttonClassName = `
            button
            button--theme-${theme}
            buton--variant-${variant}
            button--size-${size}
            ${fluid ? 'button--fluid' : ''}
            ${loading ? 'button--loading' : ''}
            ${isActive ? 'button--active' : ''}`.trim()

    return (
        <button
            type="button"
            className={`${buttonClassName} ${className}`}
            onClick={onClick}
            aria-label={ariaLabel ?? label ?? 'button'}
            data-testid={dataTestId ?? 'button'}
            disabled={disabled}
            {...rest}
        >
            {/* {children} */}
            {startIcon}
            {label && <span className="button__label">{label}</span>}
            {loading && (
                <span className="button__loader" data-testid="loader">
                    ...Loading
                </span>
            )}
            {endIcon}
        </button>
    )
}

Button.display = 'Button'

export default Button
