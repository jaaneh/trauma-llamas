import Countdown from '@components/Countdown'

const MintCountdown = (): JSX.Element => {
  return (
    <div className='flex flex-col items-center justify-center pt-24 pb-8'>
      <h1 className='mb-4 text-2xl'>Closed Presale</h1>
      <Countdown size='xlarge' />
      <h2 className='mt-8 mb-2 text-lg'>Open Presale</h2>
      <Countdown isOpenSale={true} />
      <section className='max-w-xl px-4 mt-10 text-sm'>
        <div className='prose-sm prose'>
          <p>
            The open presale takes place 1 hour after the closed presale starts. Only
            whitelisted addresses have access to mint in the 1 hour closed presale period.
          </p>
          <p className='mt-2'>
            If you are not yet on the whitelist, stay connected via{' '}
            <a href='https://twitter.com/TraumaLlamas' rel='noopener' target='_blank'>
              Twitter
            </a>{' '}
            and{' '}
            <a href='https://discord.gg/hsvH3898Pq' rel='noopener' target='_blank'>
              Discord
            </a>{' '}
            to find out how to get added. We will be running competitions for a chance to
            get added leading up to release.
          </p>
        </div>
      </section>
    </div>
  )
}

export default MintCountdown
