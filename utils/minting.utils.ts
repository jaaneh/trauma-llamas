import { ethers, providers } from 'ethers'

import { InjectedConnector } from '@web3-react/injected-connector'

const CHAIN_IDS = {
  1: '',
  // 3: 'ropsten.'
  4: 'rinkeby.'
  // 5: 'goerli.',
  // 42: 'kovan.'
} as const

type ChainId = keyof typeof CHAIN_IDS

export function isSupportedChain(chainId: number): chainId is ChainId {
  return CHAIN_IDS[chainId as ChainId] !== undefined
}

// If we want to support testnets..
// supportedChainIds: [1, 3, 4, 5, 42]
const supportedChainIds: Array<keyof typeof CHAIN_IDS> = [1]

export const injectedConnector = new InjectedConnector({
  supportedChainIds
})

export const initiateWeb3ProviderLibrary = (
  provider: providers.ExternalProvider | providers.JsonRpcFetchFunc
): ethers.providers.Web3Provider => new providers.Web3Provider(provider)

export const formatEtherscanLink = (
  type: 'address' | 'tx',
  data: [ChainId, string]
): string => {
  const [chainId, destination] = data
  const chain = CHAIN_IDS[chainId]

  return `https://${chain}etherscan.io/${type}/${destination}`
}

export const truncateEthAddress = (address: string): string =>
  `${address.substr(0, 6)}...${address.substr(address.length - 4)}`

export const ownerEthAddress = (address: string): string =>
  address.substr(2, 6).toUpperCase()
