import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Posts from './components/Posts'
import PostsForm from './components/PostsForm'
import { Container } from '@mui/material'
import Navbar from './components/Navbar';
import { useDispatch } from 'react-redux';
import { getPostAsync } from './redux/posts/post.action'


export default function App() {

  const dispatch = useDispatch()

  dispatch(getPostAsync())

  return (
    <BrowserRouter>
      <Navbar/>     
      <Container>
        <Routes>
          <Route path='/' element={<Posts/>}/>
          <Route path='/posts/new' element={<PostsForm/>}/>
        </Routes>
      </Container>
    </BrowserRouter>
  )
}
