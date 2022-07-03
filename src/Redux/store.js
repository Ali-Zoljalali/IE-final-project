import { configureStore } from '@reduxjs/toolkit'
import torobReducers from "./reducers"

export default configureStore({
    reducer: {
        torob: torobReducers
    }
})