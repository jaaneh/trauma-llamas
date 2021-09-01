import * as React from 'react'
import { ContractTransaction, ContractReceipt, BigNumber } from 'ethers'

import Button from '@components/Button'
import { formatEtherscanLink } from '@utils/minting.utils'
import { withCommas } from '@utils/withCommas'
import MintContext from '@context/MintContext'

const LLAMA_PRICE = 0.04
const NETWORK_ID = 4

const Minter = (): JSX.Element => {
  const [numberToMint, setNumberToMint] = React.useState<string>('1')
  const [totalMintPrice, setTotalMintPrice] = React.useState<number>(LLAMA_PRICE)
  const [amountError, setAmountError] = React.useState<boolean>(false)
  const [isSubmitting, setIsSubmitting] = React.useState<boolean>(false)
  const [transactionTx, setTransactionTx] = React.useState<null | string>(null)

  const {
    library,
    contract,
    isSoldOut,
    saleIsActive,
    totalSupply,
    maxLlamas,
    refreshContractData
  } = React.useContext(MintContext)

  React.useEffect(() => {
    setIsSubmitting(false)
  }, [])

  const mintLlama = async (e: React.FormEvent) => {
    e.preventDefault()

    if (library && contract && !isSoldOut) {
      setIsSubmitting(true)
      const gasPrice = await library.getGasPrice()
      const llamaPrice = await contract.llamaPrice()

      await contract
        .mintLlamas(numberToMint, {
          value: BigNumber.from(llamaPrice).mul(numberToMint),
          nonce: library.getSigner().getTransactionCount(),
          gasPrice
        })
        .then(async (transaction: ContractTransaction) => {
          const txReceipt: ContractReceipt = await transaction.wait()
          console.log(txReceipt)
          setTransactionTx(txReceipt.transactionHash)
          setIsSubmitting(false)

          refreshContractData()
        })
        .catch(() => {
          setIsSubmitting(false)
          refreshContractData()
        })
    }
  }

  return (
    <section className='flex flex-col items-center mt-4'>
      <div className='flex flex-col mb-4 md:w-96'>
        <h1 className='mb-2 text-2xl'>Mint Trauma Llamas</h1>
        <div className='form-control'>
          <label className='label'>
            <span className='text-white label-text'>Amount</span>
          </label>
          <input
            type='number'
            placeholder='Amount'
            min='1'
            max='10'
            pattern='[0-9]{0,2}'
            value={Number(numberToMint).toString()}
            onChange={e => {
              const mintAmount = Number(e.target.value)

              setNumberToMint(Number(mintAmount).toString())
              setTotalMintPrice(LLAMA_PRICE * mintAmount)
              mintAmount > 10 ? setAmountError(true) : setAmountError(false)
            }}
            className={`input placeholder-gray-500 text-gray-800 ${
              amountError || Number(numberToMint) === 0
                ? 'minter-input-error'
                : 'minter-input-primary'
            }`}
          />
          <label className='label'>
            <span className='text-red-500 label-text-alt'>
              {amountError ? 'Max 10 at a time' : null}
            </span>
          </label>
        </div>
        <Button
          fullWidth={true}
          isActive={true}
          className={`${isSubmitting ? 'loading' : ''}`}
          onClick={(e: React.FormEvent) =>
            !saleIsActive || Number(numberToMint) === 0 ? false : mintLlama(e)
          }
          disabled={
            amountError ||
            isSubmitting ||
            isSoldOut ||
            !saleIsActive ||
            Number(numberToMint) <= 0
          }
        >
          {isSubmitting ? (
            <span>Minting...</span>
          ) : !saleIsActive ? (
            <span>Minting Disabled</span>
          ) : isSoldOut ? (
            <span>SOLD OUT</span>
          ) : amountError ? (
            <span>Max 10 at a time</span>
          ) : (
            <span>
              Mint Llamas <span className='font-sans font-bold'>Ξ</span>
              {Number(totalMintPrice).toFixed(2)}
            </span>
          )}
        </Button>
      </div>

      {totalSupply && maxLlamas && (
        <div className='flex flex-col items-center'>
          <p>Total Minted</p>
          <p>
            {withCommas(totalSupply)}/{withCommas(maxLlamas)}
          </p>
          <p className='pt-2 text-xs text-gray-500'>Early sale is limited to 1,111</p>
        </div>
      )}
      {transactionTx && (
        <div className='flex justify-center my-4'>
          <div className='flex-none'>
            <a
              className='btn btn-sm btn-primary'
              href={formatEtherscanLink('tx', [NETWORK_ID, transactionTx])}
              target='_blank'
              rel='noopener noreferrer'
              onClick={() => setTransactionTx(null)}
            >
              View transaction
            </a>
          </div>
        </div>
      )}
    </section>
  )
}

export default Minter
