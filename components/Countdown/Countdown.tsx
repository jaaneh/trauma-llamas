import * as React from 'react'
import clsx from 'clsx'

type ICountdown = {
  size?: 'small' | 'normal' | 'large' | 'xlarge'
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

const Countdown = ({ size = 'normal' }: ICountdown): JSX.Element => {
  let countdownDate = 'Sep 21 2021 12:00:00 EDT'

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
    { text: 'days', value: days.toString().padStart(2, '0') },
    { text: 'hours', value: hours.toString().padStart(2, '0') },
    { text: 'min', value: minutes.toString().padStart(2, '0') },
    { text: 'sec', value: seconds.toString().padStart(2, '0') }
  ]

  const countdownValue = clsx('leading-none uppercase', {
    'text-2xl': size === 'small',
    'text-3xl': size === 'normal',
    'text-4xl': size === 'large',
    'text-5xl': size === 'xlarge'
  })

  const countdownText = clsx('font-mono leading-none', {
    'text-xs': size === 'small',
    'text-sm': size === 'normal',
    'text-base': size === 'large',
    'text-lg': size === 'xlarge'
  })

  return (
    <div className='flex items-center justify-center w-full text-center'>
      {countdown.map((cd, i) => (
        <div className='p-2 mx-1 font-mono' key={i}>
          <div className={countdownValue}>{cd.value}</div>
          <div className={countdownText}>{cd.text}</div>
        </div>
      ))}
    </div>
  )
}

export default Countdown
