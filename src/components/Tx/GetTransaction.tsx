
import { createWeb3Instance } from '../../blockchain/web3'
import { useState } from 'react'
import ResultGetTransaction from './ResultGetTransaction'
import { TransactionInfo } from '../../utils/types'

import '../../styles/tx.css'
import { useRPC } from '../../hooks/useRPC'
// 0xe40a93fb7640943d31d2d2021b4ac96a0b7d8266228d139a4c195768741e63f5
const GetTransaction = () => {
  const [txHash, setTxHash] = useState<string>('')
  const [txResult, setTxResult] = useState<TransactionInfo>({
    blockNumber: null,
    nonce: null,
    blockHash: '',
    value: '',
    gasPrice: '',
    input: '',
    gas: null,
  })

  const rpc: string = useRPC()
  const web3 = createWeb3Instance(rpc)

  const txInputHandler = (ev: any) => setTxHash(ev.target.value)


  const handleSearch = async () => {
    setTxResult({
      blockNumber: null,
      nonce: null,
      blockHash: '',
      value: '',
      gasPrice: '',
      input: '',
      gas: null,
    })
    const tx = await web3.eth.getTransaction(txHash)
    const result: TransactionInfo = {
      blockNumber: tx.blockNumber,
      nonce: tx.nonce,
      blockHash: tx.blockHash,
      value: tx.value,
      gasPrice: tx.gasPrice,
      input: tx.input,
      gas: tx.gas,
    }
    setTxResult(result)
  }

  return (
    <div id="get-transaction">
      <article className="input-container">
        <h3 className="h3">Add tx hash</h3>
        <input
          className="tx-input"
          type="text"
          placeholder="0x4523422fefa12...."
          onChange={txInputHandler}
        ></input>
      </article>
      <div className="search-container">
        <button className="search-button" onClick={handleSearch}>
          {' '}
          Search{' '}
        </button>
      </div>
      {txResult.blockNumber !== null && <article>
        <ResultGetTransaction result={txResult} />
      </article> }
    </div>
  )
}

export default GetTransaction
