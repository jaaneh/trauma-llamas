import * as React from 'react'
import { ContractTransaction, ContractReceipt, BigNumber } from 'ethers'

import toast from 'react-hot-toast'

import Button from '@components/Button'
import { formatEtherscanLink } from '@utils/minting.utils'
import { withCommas } from '@utils/withCommas'
import MintContext from '@context/MintContext'

const LLAMA_PRICE = 0.04
const NETWORK_ID = 1

const Minter = (): JSX.Element => {
  const [numberToMint, setNumberToMint] = React.useState<string>('10')
  const [totalMintPrice, setTotalMintPrice] = React.useState<number>(
    LLAMA_PRICE * Number(numberToMint)
  )
  const [amountError, setAmountError] = React.useState<boolean>(false)
  const [isSubmitting, setIsSubmitting] = React.useState<boolean>(false)

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
        .mintPresale(numberToMint, {
          value: BigNumber.from(llamaPrice).mul(numberToMint),
          nonce: library.getSigner().getTransactionCount(),
          gasPrice
        })
        .then(async (transaction: ContractTransaction) => {
          const txReceipt: ContractReceipt = await transaction.wait()

          toast(() => (
            <div className='flex flex-row items-center w-full'>
              <span className='mr-3'>Success</span>
              <a
                className='btn btn-sm btn-secondary'
                href={formatEtherscanLink('tx', [NETWORK_ID, txReceipt.transactionHash])}
                target='_blank'
                rel='noopener noreferrer'
              >
                View transaction
              </a>
            </div>
          ))

          setIsSubmitting(false)
          refreshContractData()
        })
        .catch((err: any) => {
          if (err.message && !err.error) {
            toast.error(err.message.toString())
          } else if (err.error) {
            toast.error(err.error.message.toString())
          } else {
            toast.error('Something went wrong.')
          }
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
          <div className='mt-4 space-y-1 text-xs tracking-tight text-center text-gray-400'>
            <p>Early sale is limited to 1,111</p>
            <p>The remaining 7,777 will be available September 21st</p>
          </div>
        </div>
      )}
    </section>
  )
}

export default Minter
