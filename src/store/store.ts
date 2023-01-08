import { configureStore } from "@reduxjs/toolkit"
import chainReducer from './chainSlice'


const store = configureStore({
  reducer: {
    chain: chainReducer,
  }
})

export default store