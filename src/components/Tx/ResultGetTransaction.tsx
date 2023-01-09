import { TransactionInfo } from '../../utils/types'
interface ResultGetTransactionProps {
  result: TransactionInfo
}
const ResultGetTransaction = ({ result }: ResultGetTransactionProps) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Data</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Block hash</td>
            <td>{result?.blockHash}</td>
          </tr>
          <tr>
            <td>Nonce</td>
            <td>{result?.nonce}</td>
          </tr>
          <tr>
            <td>Block Number</td>
            <td>{result?.blockNumber}</td>
          </tr>
          <tr>
            <td>Value </td>
            <td>{result?.value}</td>
          </tr>
          <tr>
            <td>Gas price </td>
            <td>{result?.gasPrice}</td>
          </tr>
          <tr>
            <td>Gas </td>
            <td>{result?.gas}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default ResultGetTransaction
