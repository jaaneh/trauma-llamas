import * as React from 'react'
import clsx from 'clsx'

type Anchor = React.ComponentPropsWithoutRef<'a'>
type Button = React.ComponentPropsWithoutRef<'button'>

type IButton = {
  isActive?: boolean
  fullWidth?: boolean
  disabled?: boolean
  variant?: 'primary' | 'secondary'
} & (Anchor | Button)

const button_base =
  'px-4 py-2 btn border rounded bg-transparent shadow hover:shadow-lg hover:border-transparent'

const button_disabled =
  'bg-opacity-50 text-opacity-50 text-white border-none bg-red-800 cursor-not-allowed pointer-events-none'

const button_primary =
  'border-tl-yellow text-tl-yellow hover:bg-yellow-400 hover:text-black'
const button_primary_active = 'bg-yellow-400 text-black'

const button_secondary = 'border-white text-white hover:bg-gray-100 hover:text-black'
const button_secondary_active = 'bg-gray-100 text-black'

const Button = React.forwardRef<HTMLButtonElement, IButton>(
  (
    { isActive, disabled, className, fullWidth, variant = 'primary', ...props },
    ref
  ): JSX.Element => {
    const isPrimary = variant === 'primary'
    const isSecondary = variant === 'secondary'
    const isDisabled = disabled

    const classNames = clsx(className, {
      [button_base]: true,
      // ['w-max']: !fullWidth,
      // ['w-full']: fullWidth,

      [button_disabled]: isDisabled,

      [button_primary]: isPrimary,
      [button_primary_active]: isPrimary && isActive,

      [button_secondary]: isSecondary,
      [button_secondary_active]: isSecondary && isActive
    })

    if ('href' in props) {
      return <a {...props} className={classNames} />
    } else {
      return <button {...(props as Button)} ref={ref} className={classNames} />
    }
  }
)

export default Button
