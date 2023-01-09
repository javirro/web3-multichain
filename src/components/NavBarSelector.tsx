import { useDispatch, useSelector } from 'react-redux'
import { changeChain } from '../store/chainSlice'
const NavBarSelector = () => {
  const chain: string = useSelector((s: any) => s.chain)
  const dispatch = useDispatch()

  const handleChainChange = (ev: any) => { dispatch(changeChain(ev.target.value)) }
  return (
    <div className="select-container">
      <select className="select-chain" onChange={handleChainChange} defaultValue={chain}>
        <option value={'eth'}>Ethereum</option>
        <option value={'bnb'}>Binance smart chain</option>
        <option value={'polygon'}>Polygon</option>
        <option value={'ftm'}>Fantom</option>
      </select>
    </div>
  )
}

export default NavBarSelector
