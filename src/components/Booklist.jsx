import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link } from "react-router-dom";



//make the card for each book 
const Book=(props)=>{
return(
    <div className="card-container">
    <img
            src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d"
            alt="Books"
            height="200"
          />
      <h2 className="title">{props.title}</h2>
      <p className="author"><strong>Author:</strong> {props.author}</p>
      <p className="genre"><strong>description:</strong> {props.desc}</p>
      <div className="button-container">
       {/*<button onClick={()=>props.onEdit(props.id)} className="button">Edit</button>*/}
        <button onClick={()=>props.onDelete(props.id)} className="button">Delete</button>
      </div>
    </div>
)
}



//get the books from DB, pass to change state and map through the new array-then pass each book obj to card maker
export default function Booklist()  {
const [books,setBooks] = useState([]);


useEffect(()=>{axios.get('http://localhost:5001/books/')
    .then((response)=>{
        setBooks(response.data); //axios parses json to obj or array
    })
    .catch((error) => {
        console.log(error);
      });
    

    },[])

    

    const handleDelete=(id)=>{
        axios.delete(`http://localhost:5001/books/delete/${id}`)
            .then(() => {
        setBooks(books.filter((book)=>book._id !== id)) //choose the book(s) where the _id is not equal to the id entered
            })
    }

    const handleEdit = (id) =>
    {
        window.location='/update/'+id //uses the Routes in App
    }

    const bookList = books.map((book)=>( 
        <Book
        title={book.bookTitle}
        author={book.bookAuthor}
        desc={book.description}
        key={book._id}
        id={book._id}
        onDelete={handleDelete}
        onEdit={handleEdit}
        />
    ))

   
    return (
        <div className='BookList'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-12'>
                    <br />
                    <h2 className='display-4 text-center'>Books List</h2>
                </div>
                <div className='col-md-11'>
                    <Link to='/add' className='btn btn-info float-right'>
                        + Add New Book
                    </Link>
                    <br />
                    <br />
                    <hr />
                    </div>
                </div>
                <div className='list'>{bookList}</div>
            </div>
        </div>
    );
}

