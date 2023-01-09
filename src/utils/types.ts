export interface TransactionInfo {
  blockNumber: number | null
  nonce: number | null
  blockHash: string | null
  value: string | null
  gasPrice: string | null
  gas: number | null
  input: string | null
}