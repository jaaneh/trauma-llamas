import * as React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { providers } from 'ethers'

import MetaMaskOnboarding from '@metamask/onboarding'
import { useWeb3React } from '@web3-react/core'

import { useEagerConnect, useENSName } from '@hooks/minting.hooks'
import { formatEtherscanLink, isSupportedChain } from '@utils/minting.utils'
import Minter from '@components/Minter'

import MetaMaskLogo from '../../public/metamask.png'

const CONNECT_TEXT = 'Connect with MetaMask'
const ONBOARD_TEXT = 'Click to install MetaMask'

const MetaMaskConnect = (): JSX.Element => {
  const router = useRouter()
  const onboarding = React.useRef<MetaMaskOnboarding>()
  const [buttonText, setButtonText] = React.useState(ONBOARD_TEXT)
  const { active, account, chainId } = useWeb3React<providers.Web3Provider>()

  const connection = useEagerConnect()
  const accountName = useENSName()

  React.useEffect(() => {
    if (!onboarding.current) {
      onboarding.current = new MetaMaskOnboarding()
    }
  }, [])

  React.useEffect(() => {
    if (MetaMaskOnboarding.isMetaMaskInstalled()) {
      account ? onboarding.current?.stopOnboarding() : setButtonText(CONNECT_TEXT)
    }
  }, [account])

  if (connection.isIdle || connection.isLoading) {
    return <div className='my-16 text-center text-gray-200'>Loading...</div>
  }

  if (connection.isError) {
    return (
      <div className='flex flex-col items-center justify-center h-full my-16 text-center'>
        <span className='mb-8'>{connection.error}</span>
        <button className='btn btn-info' onClick={() => router.reload()}>
          Reload page
        </button>
      </div>
    )
  }

  if (!active) {
    const onClick = () => {
      MetaMaskOnboarding.isMetaMaskInstalled()
        ? connection.activate()
        : onboarding.current?.startOnboarding()
    }

    return (
      <section className='flex flex-col items-center justify-center h-full my-16 text-center'>
        <span className='mb-8 animate-float'>
          <Image
            width='150'
            height='150'
            src={MetaMaskLogo}
            alt='MetaMask'
            loading='eager'
          />
        </span>

        <button className='btn btn-info' onClick={onClick}>
          {buttonText}
        </button>
      </section>
    )
  }

  if (account && chainId && isSupportedChain(chainId)) {
    const chainHREF = formatEtherscanLink('address', [chainId, account])

    return (
      <section>
        <div className='flex justify-center px-4 mt-3 space-x-2 md:justify-end'>
          <span>Connected to:</span>
          <a target='_blank' href={chainHREF} rel='noopener noreferrer'>
            {accountName}
          </a>
        </div>

        <Minter />
      </section>
    )
  } else {
    return (
      <div className='flex flex-col items-center justify-center h-full my-16 text-center'>
        <span className='mb-8'>Unsupported network. Switch to ETH mainnet.</span>
        <button className='btn btn-info' onClick={() => router.reload()}>
          Reload page
        </button>
      </div>
    )
  }
}

export default MetaMaskConnect
