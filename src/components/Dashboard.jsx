import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = ({setBookId, setAuthorId }) => {
    const [book, setBook] = useState([])
    const [author, setAuthor] = useState([])

    const navigate = useNavigate()

    useEffect(() => {
        fetchBookData();
        fetchAuthorData();
    }, [])

    const fetchBookData = async () => {
        await axios.get('https://65dc3c30e7edadead7eb5f40.mockapi.io/books')
        .then(res => setBook(res.data))
        .catch((err) => { console.log(err); })
    }

    const fetchAuthorData = async () => {
        await axios.get('https://65dc693ee7edadead7ebef8b.mockapi.io/authors')
        .then(res => setAuthor(res.data))
        .catch((err) => { console.log(err); })
    }

    const handleBookEdit = (id) => {
        setBookId(id)
        navigate(`/edit/editbook/${id}`)
    }

    const handleAuthorEdit = (id) => {
        setAuthorId(id)
        navigate(`/edit/editauthor/${id}`)
    }

    const handleBookDelete = async(id) => {
        await axios.delete(`https://65dc3c30e7edadead7eb5f40.mockapi.io/books/${id}`)
        fetchBookData()
        .catch((err) => {console.log(err); })
    }

    const handleAuthorDelete = async(id) => {
        await axios.delete(`https://65dc693ee7edadead7ebef8b.mockapi.io/authors/${id}`)
        fetchAuthorData()
        .catch((err) => {console.log(err); })
    }

    return (
        <div>
            <div className="bg-dark text-white py-5 "> 
            <div className='container'>
                <div className="row justify-content-center"> 
                    <div className="col-md-8 text-center"> 
                        <p className="fs-1 fw-bold mb-0">Welcome to my library</p>
                        <p className="fs-4 fw-light mt-2">Enjoy reading your favourite author's books</p> 
                    </div>
                </div>
            </div>
        </div>
            <div>
                <h2 className='text-center pt-3 pb-3'>List of Books</h2>
            <table className="table table-striped text-center">
                <thead>
                    <tr>
                        <th scope="col">S.No</th>
                        <th scope="col">Title</th>
                        <th scope="col">Author</th>
                        <th scope="col">ISBN</th>
                        <th scope="col">Publication Date</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {book.map((item, index) => {
                        return (
                            <>
                                <tr key={index}>
                                    <th scope="row">{item.id}</th>
                                    <td>{item.bookTitle}</td>
                                    <td>{item.author}</td>
                                    <td>{item.isbn}</td>
                                    <td>{item.publicationDate}</td>
                                    <td><button type="button" className="btn btn-outline-warning" onClick={()=>{handleBookEdit(item.id)}} >Edit</button></td>
                                    <td><button type="button" className="btn btn-outline-danger" onClick={()=>{handleBookDelete(item.id)}}>Delete</button></td>
                                </tr>
                            </>
                        )
                    })}

                </tbody>
            </table>
            <button type="button" className="btn btn-outline-info" onClick={() => {navigate('/add/addbook')}} >Create</button>
        </div>
        <div>
            <h2 className='text-center pt-3 pb-3'>List of Authors </h2>
            <table className="table table-striped text-center">
                <thead>
                    <tr>
                        <th scope="col">S.No</th>
                        <th scope="col">Name</th>
                        <th scope="col">Birthdate</th>
                        <th scope="col">Biography</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {author.map((item, index) => {
                        return (
                            <>
                                <tr key={index}>
                                    <th scope="row">{item.id}</th>
                                    <td>{item.name}</td>
                                    <td>{item.birthdate}</td>
                                    <td>{item.biography}</td>
                                    <td><button type="button" className="btn btn-outline-warning" onClick={()=>{handleAuthorEdit(item.id)}}>Edit</button></td>
                                    <td><button type="button" className="btn btn-outline-danger" onClick={()=>{handleAuthorDelete(item.id)}}>Delete</button></td>
                                </tr>
                            </>
                        )
                    })}

                </tbody>
            </table>
            <button type="button" className="btn btn-outline-info " onClick={() => {navigate('/add/addauthor')}} >Create</button>
        </div>
        </div>
    );
};

export default Dashboard;