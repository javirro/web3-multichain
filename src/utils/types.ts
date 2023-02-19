export interface TransactionInfo {
  blockNumber: number | null
  nonce: number | null
  blockHash: string | null
  value: string | null
  gasPrice: string | null
  gas: number | null
  input: string | null
}

export interface BlockInfo {
  number: number | null
  hash: string | null
  nonce: string | null
  miner: string |null
  difficulty: number |null
  size: number | null
  timestamp: number | null
  transactions: any [] |null
  gasLimit: number | null
  gasUsed: number | null

}

export type  ErrorMessages = 'BigBlockNumber' | "NoTransaction"