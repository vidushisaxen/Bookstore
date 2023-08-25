// pages/index.tsx
'use client'
import React from 'react';
import { useEffect,useState } from 'react';
import './globals.css'


const HomePage: React.FC = () => {
const [books, setbooks] = useState([]);

  useEffect(() => {
    apicall()
  }, [])
  

  async function apicall() {
    const response = await fetch("https://frontassignment.hyperhire.in/?page=1")
    const data =await  response.json();
    setbooks(data);
    console.log(data);
    console.log(books.data);
  }
  return (

    <div>
      <h1>Welcome to My Next.js App</h1>
      <div>
        {books.data && books.data.map((book)=>(
          <>
          <h1>{book.title}</h1>
          <img src={book.coverImage}/>
          </>
        ))}
      </div>
     
    </div>
  );
};

export default HomePage;
