import React from 'react'
import axios from 'axios'
import Spinner from '../components/Spinner'

import { useEffect, useState } from 'react';
import BooksCard$ from '../components/home/BooksCard';
import BooksTable from '../components/home/BooksTable';
const Home = () => {
  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:5555/Books')
      .then((response) => {

        setBooks(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      })
  }, []);


  return (

    <div className='p-4'>
      <div className='flex justify-betwen items-center'>
        <h1 className='text-3xl my-8'>Books List</h1>
        <Link to='/books/create'>
          <MdOutlineAddBox className='text-sky-800 text-4x1' ></MdOutlineAddBox>
        </Link>
      </div>
      {loading ? (

        <Spinner />
      ) : (
        <BooksTable books={books} />

      )}

    </div>



  )




}



export default Home