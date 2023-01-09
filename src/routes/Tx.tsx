import GetTransaction from '../components/Tx/GetTransaction'
import '../styles/general.css'
import { useState } from 'react'

const Tx = () => {
  const [selectedTab, setSeletecTab] = useState<Number>(0)
  const handleClick = (idOption: number) => { setSeletecTab(idOption) }
  return (
    <div className="container">
      <div>
        <button className={`tabs-button ${selectedTab === 0 ? 'active' : ''}`} onClick={() => handleClick(0)}>
          Get transaction
        </button>
        <button className={`tabs-button ${selectedTab === 1 ? 'active' : ''}`} onClick={() => handleClick(1)}>
          Get transaction from block
        </button>
        <button className={`tabs-button ${selectedTab === 2 ? 'active' : ''}`} onClick={() => handleClick(2)}>
          Get transaction receipt
        </button>
        <button className={`tabs-button ${selectedTab === 3 ? 'active' : ''}`} onClick={() => handleClick(3)}>
          Get transaction number from address
        </button>
      </div>

      <section>
        <GetTransaction />
      </section>

    </div>
  )
}

export default Tx
