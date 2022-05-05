import {configureStore} from '@reduxjs/toolkit'
import counterReducer from '../Slice/AppSlice'




export const store=configureStore({
    reducer:{
        counter:counterReducer
    }
})