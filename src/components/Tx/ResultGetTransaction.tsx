import { TransactionInfo } from '../../utils/types'
import '../../styles/tableResult.css'
interface ResultGetTransactionProps {
  result: TransactionInfo
}
const ResultGetTransaction = ({ result }: ResultGetTransactionProps) => {
  return (
    <div className='result-table-container'>
      <table className='result-table'>
        <thead>
          <tr>
            <th>Data</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="table-left-column">Block hash</td>
            <td className="table-value">{result?.blockHash}</td>
          </tr>
          <tr>
            <td className="table-left-column">Nonce</td>
            <td className="table-value">{result?.nonce}</td>
          </tr>
          <tr>
            <td className="table-left-column">Block Number</td>
            <td className="table-value">{result?.blockNumber}</td>
          </tr>
          <tr>
            <td className="table-left-column">Value </td>
            <td className="table-value">{result?.value}</td>
          </tr>
          <tr>
            <td className="table-left-column">Gas price </td>
            <td className="table-value">{result?.gasPrice}</td>
          </tr>
          <tr>
            <td className="table-left-column">Gas </td>
            <td className="table-value">{result?.gas}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default ResultGetTransaction
