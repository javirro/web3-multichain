import { createWeb3Instance } from '../../blockchain/web3'
import { useState } from 'react'
import { useRPC } from '../../hooks/useRPC'
import { BlockInfo } from '../../utils/types'
import ResultGetBlock from './ResultGetBlock'

import '../../styles/tx.css'


const GetBlock = () => {
  const [blockNumber, setBlockNumber] = useState<string>('')
  const [blockInfo, setBlockInfo] = useState<BlockInfo>({} as BlockInfo)

  const rpc: string = useRPC()
  const web3 = createWeb3Instance(rpc)

  const inputChangeHandler = (ev: any) => setBlockNumber(ev.target.value)

  const handleSearch = async () => {
    const lastBlock = await web3.eth.getBlock('latest')
    if (lastBlock.number < Number(blockNumber)) {
      alert('Problemas')
    } else {
      const blockInfoWeb3 = await web3.eth.getBlock(Number(blockNumber), true)
      const filterInfo: BlockInfo = {
        number: blockInfoWeb3.number,
        hash: blockInfoWeb3.hash,
        nonce: blockInfoWeb3.nonce,
        transactions: blockInfoWeb3.transactions,
        timestamp: Number(blockInfoWeb3.timestamp),
        miner: blockInfoWeb3.miner,
        difficulty: blockInfoWeb3.difficulty,
        gasLimit: blockInfoWeb3.gasLimit,
        gasUsed: blockInfoWeb3.gasUsed,
        size: blockInfoWeb3.size,
      }
      setBlockInfo(filterInfo)
    }
  }

  return (
    <div id="get-block">
      <section className="input-container">
        <h3 className="h3">Add block number</h3>
        <input
          type="text"
          className="tx-input"
          onChange={inputChangeHandler}
          placeholder="51000000"
        />
      </section>
      <div className="search-container">
        <button className="search-button" onClick={handleSearch}>
          Search
        </button>
      </div>
      <section>
     {Object.keys(blockInfo).length > 0 && <ResultGetBlock blockInfo={blockInfo} /> }
      </section>
    </div>
  )
}

export default GetBlock
