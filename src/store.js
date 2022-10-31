import { configureStore } from '@reduxjs/toolkit'
import globalReducer from './services/redux/global'
import projectsReducer from './services/redux/projects'

export default configureStore({
    reducer: {
        global: globalReducer,
        projects: projectsReducer
    },
})