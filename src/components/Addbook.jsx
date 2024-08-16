import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

export default function Addbook() {
    const [book, setBook] = useState({ bookTitle: '', bookAuthor: '', description: '' });
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const bookvar = {
            author: book.bookAuthor,
            title: book.bookTitle,
            description: book.description
        };
        axios.post('http://localhost:5001/books/add', bookvar)
            .catch(err => console.error("Error adding the book:", err));
        console.log("handle submit is being called");
    };

    const onChange = (event) => {
        const { name, value } = event.target;
        setBook((prevBook) => ({
            ...prevBook, [name]: value
        }));
        console.log("onChange is being called");
    };

    return (
        <div className="CreateBook">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <br />
                        <Link to='/' className="btn btn-info float-left">Show Book List</Link>
                    </div>
                    <div className="col-md-8 m-auto">
                        <h1 className="display-4 text-center">Add Book</h1>
                        <p className="lead text-center">Create new book</p>
                        <form noValidate="" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <input
                                    type="text"
                                    placeholder="Title of the Book"
                                    name="bookTitle"  // Update this to match the state property
                                    className="form-control"
                                    value={book.bookTitle}
                                    onChange={onChange}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    placeholder="Author"
                                    name="bookAuthor"  // Update this to match the state property
                                    className="form-control"
                                    value={book.bookAuthor}
                                    onChange={onChange}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    placeholder="Describe this book"
                                    name="description"
                                    className="form-control"
                                    value={book.description}
                                    onChange={onChange}
                                />
                            </div>
                            <input type="submit" className="btn btn-info btn-block mt-4" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
