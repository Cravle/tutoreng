import { memo } from 'react'

type ButtonProps = {
  children: React.ReactNode
  onClick?: () => void
  disabled?: boolean
  className?: string
  variant?: 'primary' | 'secondary' | 'text'
}

export default memo(function Button({
  children,
  onClick,
  disabled,
  className,
  variant = 'primary',
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${
        variant === 'primary'
          ? 'bg-mainBlue hover:bg-mainBlueHover'
          : variant === 'secondary'
          ? 'bg-mainWhite hover:bg-mainWhiteHover'
          : 'bg-transparent hover:bg-transparent'
      } ${
        disabled ? 'cursor-default' : 'cursor-pointer'
      } ${className} rounded-10px text-white text-base font-medium py-2 px-4`}
    >
      {children}
    </button>
  )
})
