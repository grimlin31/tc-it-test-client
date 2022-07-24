import { configureStore } from '@reduxjs/toolkit'
import postReducer from './post.action'

export default configureStore({
  reducer: {
    posts: postReducer
  }
})

