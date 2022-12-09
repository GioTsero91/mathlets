import { configureStore } from '@reduxjs/toolkit'
import globalReducer from './services/redux/global'
import projectsReducer from './services/redux/projects'
import upcomingReducer from './services/redux/upcoming'

export default configureStore({
    reducer: {
        global: globalReducer,
        projects: projectsReducer,
        upcoming: upcomingReducer
    },
})