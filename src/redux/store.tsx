import { configureStore } from '@reduxjs/toolkit'
import layoutUppdateInformations from './layoutUppdateInformations'


export const store = configureStore({
  reducer: {
    layoutUppdateInformations
  }
})
