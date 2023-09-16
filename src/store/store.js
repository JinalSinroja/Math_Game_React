import { configureStore } from '@reduxjs/toolkit'
import authenticationReducer from './reducers/auth'
import answersReducre from './reducers/answers'

const store = configureStore({
  reducer: {
    auth: authenticationReducer,
    answers: answersReducre
  },
})

export default store