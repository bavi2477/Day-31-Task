import axios from 'axios';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
const AddBook = () => {
    const navigate = useNavigate()
    const [createBook, setCreateBook] = useState({
        bookTitle:'',
        author:'',
        isbn:'',
        publicationDate:'',
    })

    const validationSchema = Yup.object().shape({
        bookTitle:Yup.string().required('Book title is required'), //formik.errors
        author:Yup.string().required('Author name is required'),
        isbn:Yup.string().required('Isbn is required'),
        publicationDate:Yup.string().required('Publication date is required')
    })

    const formik = useFormik({
        initialValues:{createBook}, //formik.values
        validationSchema:validationSchema,
        onSubmit:async(values) => {
            await axios.post('https://65dc3c30e7edadead7eb5f40.mockapi.io/books', values)
        .then( res => {console.log(res.data)})
        .catch((err) => console.log(err))
        navigate('/')
        }
    })

    return (
        <div className='container bg-info'>
            <form onSubmit={formik.handleSubmit}>
                <div className='pt-5 pb-5 display-3 text-right'>
                    <label >Add Book</label>
                </div>
                    <div class="form-group col-md-6 pb-5">
                        <label for="bookTitle">Title</label>
                        <input type="text" class="form-control" name='bookTitle' placeholder="Enter a book title" value={formik.values.bookTitle} onChange={formik.handleChange} />
                        <div className='text-danger'>{formik.errors.bookTitle}</div>
                    </div>
                    <div class="form-group col-md-6 pb-5">
                        <label for="author">Author</label>
                        <input type="text" class="form-control" name='author' placeholder="Enter author name" value={formik.values.author} onChange={formik.handleChange} />
                        <div className='text-danger'>{formik.errors.author}</div>
                    </div>
                <div class="form-group col-md-6 pb-5">
                    <label for="isbn">ISBN</label>
                    <input type="text" class="form-control" name='isbn' placeholder="Enter isbn" value={formik.values.isbn} onChange={formik.handleChange} />
                    <div className='text-danger'>{formik.errors.isbn}</div>
                </div>
                <div class="form-group col-md-6 pb-5">
                    <label for="publicationDate">Publication Date</label>
                    <input type="text" class="form-control" name='publicationDate' placeholder="Enter publication date" value={formik.values.publicationDate} onChange={formik.handleChange} />
                    <div className='text-danger'>{formik.errors.publicationDate}</div>
                </div>
                <button type="submit" class="btn btn-primary" >Add Book</button>
            </form>
        </div>
    );
};

export default AddBook ;