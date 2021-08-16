import { providers } from 'ethers'
import * as React from 'react'

import { UnsupportedChainIdError, useWeb3React } from '@web3-react/core'

import { injectedConnector, truncateEthAddress } from '@utils/minting.utils'

export const useENSName = (): string => {
  const { library, account } = useWeb3React<providers.Web3Provider>()
  const [isLoading, setLoading] = React.useState<boolean>(false)
  const [isIdle, setIdle] = React.useState<boolean>(true)
  const [name, setName] = React.useState<string>('')

  React.useEffect(() => {
    if (isIdle && account) {
      setLoading(true)
      setIdle(false)

      library
        ?.lookupAddress(account)
        .then(setName)
        .finally(() => setLoading(false))
    }
  }, [library, account, isIdle])

  React.useEffect(() => {
    if (!isIdle && !isLoading && !name && account) {
      setName(truncateEthAddress(account))
    }
  }, [isIdle, isLoading, name, account])

  return name
}

export const useEagerConnect = (): {
  error: string
  isIdle: boolean
  isError: boolean
  isSuccess: boolean
  isLoading: boolean
  activate: () => void
} => {
  const { activate } = useWeb3React()
  const [error, setError] = React.useState('')
  const [isIdle, setIdle] = React.useState(true)
  const [isLoading, setLoading] = React.useState(true)
  const [isSuccess, setSuccess] = React.useState(false)

  const isError = Boolean(error)

  const establishConnection = React.useCallback(
    () =>
      activate(injectedConnector, undefined, true)
        .then(() => {
          setError('')
          setSuccess(true)
          setLoading(false)
        })
        .catch(e => {
          const isUnsupportedChainIdError = e instanceof UnsupportedChainIdError

          const errorMessage = isUnsupportedChainIdError
            ? 'Unsupported network. Switch to ETH mainnet.'
            : e.message

          setLoading(false)
          setError(errorMessage)
        }),
    [activate]
  )

  React.useEffect(() => {
    setIdle(false)
    setLoading(true)

    injectedConnector
      .isAuthorized()
      .then(isAuthorized => {
        isAuthorized ? establishConnection() : setLoading(false)
      })
      .catch(e => {
        setLoading(false)
        setError(e.message)
      })
  }, [establishConnection])

  return {
    error,
    isIdle,
    isError,
    isSuccess,
    isLoading,
    activate: establishConnection
  }
}
