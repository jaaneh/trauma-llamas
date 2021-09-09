import * as React from 'react'

import Countdown from '@components/Countdown'

const MintCountdown = (): JSX.Element => {
  return (
    <div className='flex flex-col items-center justify-center pt-24 pb-8'>
      <h1 className='mb-2 text-2xl'>Main Sale</h1>
      <Countdown size='xlarge' />
      <section className='max-w-xl px-4 mt-10 text-sm'>
        <div className='prose-sm prose'>
          <p>
            The main sale takes place September 21st at 4pm UTC. This sale is open to
            everyone. The price will be <span className='font-bold'>0.04 ETH</span> + gas,
            and is limited to 20 Llamas per transaction..
          </p>
          <p className='mt-2'>
            Stay connected via{' '}
            <a href='https://twitter.com/TraumaLlamas' rel='noopener' target='_blank'>
              Twitter
            </a>{' '}
            and{' '}
            <a href='https://discord.gg/hsvH3898Pq' rel='noopener' target='_blank'>
              Discord
            </a>{' '}
            for exclusive giveaways, previews and more!
          </p>
        </div>
      </section>
    </div>
  )
}

export default MintCountdown
