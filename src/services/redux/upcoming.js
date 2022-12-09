import { createSlice } from '@reduxjs/toolkit'

export const upcomingSlice = createSlice({
    name: 'upcoming',
    initialState: {
        upcoming: []
    },
    reducers: {
        updateUpcoming: (state, action) => {
            state.upcoming = action.payload;
        },
    },

})

export const { updateUpcoming } = upcomingSlice.actions
export default upcomingSlice.reducer