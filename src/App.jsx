import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import DeleteBook from './pages/DeleteBook'
import CreatBooks from './pages/CreatBooks'
import ShowBook from './pages/ShowBook'
import EditBook from './pages/EditBook' 
function App() {
  return (
    <Routes>
        <Route path='/' elemment={<Home/>}/>
        <Route path='/books/create' elemment={<CreatBooks/>}/>

        <Route path='/books/details/:id' elemment={<ShowBook/>}/>

        <Route path='/books/edit/:id' elemment={<EditBook/>}/>

        <Route path='/books/delete/:id' elemment={<DeleteBook/>}/>

  
</Routes>
  )
}

export default App