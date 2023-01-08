import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './routes/Navbar'
import Blockchain from './routes/Blockchain'
import Home from './routes/Home'
import Tx from './routes/Tx'
import store from './store/store'
import { Provider } from 'react-redux'

function App() {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tx" element={<Tx />} />
            <Route path="/blockchain" element={<Blockchain />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  )
}

export default App
