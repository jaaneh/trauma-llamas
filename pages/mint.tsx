import * as React from 'react'
import { NextSeo } from 'next-seo'

import MetaMaskConnect from '@components/MetaMaskConnect'

const MintPage = (): JSX.Element => {
  return (
    <>
      <NextSeo title='Mint' />
      <MetaMaskConnect />
    </>
  )
}

export default MintPage
