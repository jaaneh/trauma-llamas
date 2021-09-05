import '@fontsource/ibm-plex-mono/400.css'
import '@fontsource/ibm-plex-mono/300.css'
import '../styles/global.css'

import * as React from 'react'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { Web3ReactProvider } from '@web3-react/core'
import { DefaultSeo } from 'next-seo'
import { Toaster } from 'react-hot-toast'

import Layout from '@components/Layout'
import { initiateWeb3ProviderLibrary } from '@utils/minting.utils'

import SEO from '../next-seo.config'

import * as gtag from '../lib/gtag'
const isProd = process.env.NODE_ENV === 'production'

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter()

  React.useEffect(() => {
    const handleRouteChange = (url: URL) => {
      if (isProd) gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      <Web3ReactProvider getLibrary={initiateWeb3ProviderLibrary}>
        <DefaultSeo {...SEO} />
        <Toaster
          position='bottom-center'
          toastOptions={{
            style: {
              fontSize: '0.875rem',
              background: '#2c384c',
              color: '#fff'
            }
          }}
        />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Web3ReactProvider>
    </>
  )
}

export default MyApp
