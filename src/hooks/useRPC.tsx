import { useSelector } from 'react-redux'
import { rpcs } from '../blockchain/rpcs'

export const useRPC = (): string => {
  const chain: string = useSelector((s: any) => s.chain)
  let rpc: string = rpcs.ftm
  if (chain === 'eth') rpc = rpcs.eth
  else if (chain === 'bnb') rpc = rpcs.bnb
  else if (chain === 'polygon') rpc = rpcs.polygon
  return rpc
}
