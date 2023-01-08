import Web3 from 'web3'

export const createWeb3Instance = (rpc: string) => {
const  web3 = new Web3(rpc)
return web3
}
