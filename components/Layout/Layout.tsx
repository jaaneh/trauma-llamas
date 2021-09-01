import * as React from 'react'
import { useWeb3React } from '@web3-react/core'
import { providers, ethers, BigNumberish } from 'ethers'

import Header from '@components/Header'
// import Header from '@components/Header'
import Footer from '@components/Footer'
import MintContext from '@context/MintContext'

import ABI from '../../abi/TraumaLlamas.json'
const LLAMA_CONTRACT = '0x665941141af82c949184c0471a4c3cb1c6ca60ac'

type ILayout = {
  children: React.ReactNode
}

const Layout = ({ children }: ILayout): JSX.Element => {
  const { library } = useWeb3React<providers.Web3Provider>()
  const [contract, setContract] = React.useState<ethers.Contract>(null)
  const [saleIsActive, setSaleIsActive] = React.useState<boolean>(false)
  const [isSoldOut, setIsSoldOut] = React.useState<boolean>(false)
  const [totalSupply, setTotalSupply] = React.useState<null | string>(null)
  const [maxLlamas, setMaxLlamas] = React.useState<null | string>(null)

  React.useEffect(() => {
    if (library) {
      const contract = new ethers.Contract(LLAMA_CONTRACT, ABI, library.getSigner())
      setContract(contract)
    }
  }, [library])

  React.useEffect(() => {
    refreshContractData()
  }, [contract])

  const refreshContractData = async () => {
    if (contract && library) {
      await contract.totalSupply().then((v: BigNumberish) => setTotalSupply(v.toString()))
      await contract.MAX_LLAMAS().then((v: BigNumberish) => setMaxLlamas(v.toString()))
      await contract.presaleIsActive().then((v: boolean) => setSaleIsActive(v))

      if (parseInt(totalSupply) >= parseInt(maxLlamas)) {
        setIsSoldOut(true)
      }
    }
  }

  return (
    <>
      <MintContext.Provider
        value={{
          library,
          contract,
          isSoldOut,
          saleIsActive,
          totalSupply,
          maxLlamas,
          refreshContractData
        }}
      >
        <div className='flex flex-col min-h-full mx-auto bg-neutral-focus'>
          <Header />
          <main className='flex-1 text-gray-100'>{children}</main>
          <Footer />
        </div>
      </MintContext.Provider>
    </>
  )
}

export default Layout
