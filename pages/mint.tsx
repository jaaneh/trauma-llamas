import * as React from 'react'
import { NextSeo } from 'next-seo'

import PresaleCountdown from '@components/PresaleCountdown'

const MintPage = (): JSX.Element => {
  return (
    <>
      <NextSeo title='Mint' />
      <PresaleCountdown />
    </>
  )
}

export default MintPage
