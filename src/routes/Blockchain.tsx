import '../styles/general.css'
import '../styles/blockchain.css'
const Blockchain = () => {
  return( <div className="container">
    <h1 className="h1"> Blockchain information </h1>
      <button>Get last block</button>
      <button>Get block</button>
      <button>Get gas price</button>
      <button>Get hash rate</button>

  </div>
  )
}

export default Blockchain
