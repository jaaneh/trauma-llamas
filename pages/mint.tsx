import * as React from 'react'
import { NextSeo } from 'next-seo'

import SaleCountdown from '@components/SaleCountdown'

const MintPage = (): JSX.Element => {
  return (
    <>
      <NextSeo title='Mint' />
      <SaleCountdown />
    </>
  )
}

export default MintPage
