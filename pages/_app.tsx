import '@fontsource/ibm-plex-mono/400.css'
import '@fontsource/ibm-plex-mono/300.css'
import '../styles/global.css'

import * as React from 'react'
import type { AppProps } from 'next/app'
import { Web3ReactProvider } from '@web3-react/core'
import { DefaultSeo } from 'next-seo'

import Layout from '@components/Layout'
import { initiateWeb3ProviderLibrary } from '@utils/minting.utils'

import SEO from '../next-seo.config'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Web3ReactProvider getLibrary={initiateWeb3ProviderLibrary}>
      <DefaultSeo {...SEO} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Web3ReactProvider>
  )
}

export default MyApp
