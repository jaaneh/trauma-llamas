import * as React from 'react'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'

type IFadeIn = {
  children: React.ReactNode
}

const FadeInWhenVisible = ({ children }: IFadeIn): JSX.Element => {
  const controls = useAnimation()
  const [ref, inView] = useInView()

  React.useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial='hidden'
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 60 }
      }}
      className='w-full'
    >
      {children}
    </motion.div>
  )
}

export default FadeInWhenVisible
