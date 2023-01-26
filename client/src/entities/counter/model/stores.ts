import {createSlice} from "@reduxjs/toolkit";

export interface InitialStateProps {
    count: number
}

const initialState = {
    count: 0
}


const countSlice = createSlice({
    name: 'count',
    initialState,
    reducers: {
        increment(state, action) {
            state.count += action.payload
        },
        decrement(state, action) {
            state.count -= action.payload
        }
    }
})

export const reducer = countSlice.reducer
export const actions = countSlice.actions