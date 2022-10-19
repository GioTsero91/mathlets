import { configureStore } from '@reduxjs/toolkit'
import globalReducer from './services/redux/global'

export default configureStore({
    reducer: {
        global: globalReducer
    },
})