import { BlockInfo } from '../../utils/types'
import '../../styles/tableResult.css'

interface ResultGetBlockProps {
  blockInfo: BlockInfo
}
const ResultGetBlock = ({ blockInfo }: ResultGetBlockProps) => {
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
            <td className="table-left-column">Block Number</td>
            <td className="table-value">{blockInfo?.number}</td>
          </tr>
          <tr>
            <td className="table-left-column">Timestamp </td>
            <td className="table-value">{blockInfo?.timestamp}</td>
          </tr>
          <tr>
            <td className="table-left-column">Block Hash</td>
            <td className="table-value">{blockInfo?.hash}</td>
          </tr>
          <tr>
            <td className="table-left-column">Gas limit </td>
            <td className="table-value">{blockInfo?.gasLimit}</td>
          </tr>
          <tr>
            <td className="table-left-column">Gas used </td>
            <td className="table-value">{blockInfo?.gasUsed}</td>
          </tr>
          <tr>
            <td className="table-left-column">Nonce</td>
            <td className="table-value">{blockInfo?.nonce}</td>
          </tr>
          <tr>
            <td className="table-left-column">Miner </td>
            <td className="table-value">{blockInfo?.miner}</td>
          </tr>
          <tr>
            <td className="table-left-column">Size </td>
            <td className="table-value">{blockInfo?.size}</td>
          </tr>
          <tr>
            <td className="table-left-column">Difficulty </td>
            <td className="table-value">{blockInfo?.difficulty}</td>
          </tr>

        </tbody>
      </table>
    </div>
  )
}

export default ResultGetBlock