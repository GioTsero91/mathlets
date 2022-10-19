import { createSlice } from '@reduxjs/toolkit'

export const globalSlice = createSlice({
    name: 'global',
    initialState: {
        newsLetterFilter: {
            platform: 'all',
            order: 'Recent'
        },
    },
    reducers: {
        update: (state, action) => {
            state.newsLetterFilter[action.payload.option] = action.payload.value;
        },
    },

})

export const { update } = globalSlice.actions
export default globalSlice.reducer