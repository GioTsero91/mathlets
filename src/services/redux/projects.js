import { createSlice } from '@reduxjs/toolkit'

export const projectsSlice = createSlice({
    name: 'projects',
    initialState: {
        projects: []
    },
    reducers: {
        updateProjects: (state, action) => {
            state.projects = action.payload;
        },
    },

})

export const { updateProjects } = projectsSlice.actions
export default projectsSlice.reducer