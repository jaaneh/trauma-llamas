import * as React from 'react'
import clsx from 'clsx'

type ICountdown = {
  size?: 'small' | 'normal' | 'large' | 'xlarge'
  isOpenSale?: boolean
}

const calculateCountdownFromNow = (nextDate: string) => {
  const now = new Date().getTime()

  const distance = new Date(nextDate).getTime() - now

  if (distance < 0) {
    return {
      expired: true,
      values: { days: 0, hours: 0, minutes: 0, seconds: 0 }
    }
  }

  return {
    expired: false,
    values: {
      days: Math.floor(distance / (1000 * 60 * 60 * 24)),
      hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((distance % (1000 * 60)) / 1000)
    }
  }
}

const Countdown = ({ size = 'normal', isOpenSale = false }: ICountdown): JSX.Element => {
  let countdownDate: string = ''

  if (isOpenSale) {
    countdownDate = 'Sep 7 2021 12:00:00 EDT'
  } else {
    countdownDate = 'Sep 7 2021 11:00:00 EDT'
  }

  const [
    {
      expired,
      values: { days, hours, minutes, seconds }
    },
    setResult
  ] = React.useState(() => calculateCountdownFromNow(countdownDate))

  React.useEffect(() => {
    if (expired) return undefined
    const intervalId = setInterval(
      () => setResult(calculateCountdownFromNow(countdownDate)),
      1000
    )
    return () => {
      clearInterval(intervalId)
    }
  }, [expired])

  const countdown = [
    { text: 'days', styles: { '--value': days } as React.CSSProperties },
    { text: 'hours', styles: { '--value': hours } as React.CSSProperties },
    { text: 'min', styles: { '--value': minutes } as React.CSSProperties },
    { text: 'sec', styles: { '--value': seconds } as React.CSSProperties }
  ]

  const countdownWrapper = clsx('flex flex-col', {
    'text-xs': size === 'small',
    'text-sm': size === 'normal',
    'text-base': size === 'large',
    'text-lg': size === 'xlarge'
  })

  const countdownText = clsx('font-mono countdown', {
    'text-2xl': size === 'small',
    'text-3xl': size === 'normal',
    'text-4xl': size === 'large',
    'text-5xl': size === 'xlarge'
  })

  return (
    <div className='flex items-center justify-center gap-5 text-center auto-cols-max'>
      {countdown.map((cd, i) => (
        <div className={countdownWrapper} key={i}>
          <span className={countdownText}>
            <span style={cd.styles}></span>
          </span>
          {cd.text}
        </div>
      ))}
    </div>
  )
}

export default Countdown
