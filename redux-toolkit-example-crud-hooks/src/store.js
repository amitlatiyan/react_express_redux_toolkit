import { configureStore } from '@reduxjs/toolkit'
import tutorialReducer from './slices/tutorials';
// Learning 6: This Store will bring Actions and Reducers together and hold the Application state
const reducer = { 
  tutorials: tutorialReducer // Q: name: nameReducer Use ?
}

const store = configureStore({
  reducer: reducer,
  devTools: true, // Q: devTools?
})

export default store;