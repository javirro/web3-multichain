import { createSlice } from "@reduxjs/toolkit"
const chainSlice = createSlice({
  name: "chain",
  initialState: "eth",
  reducers: {
    changeChain: (state, action) => action.payload,
  },
});

const {actions, reducer } = chainSlice
export const { changeChain } = actions
export default reducer