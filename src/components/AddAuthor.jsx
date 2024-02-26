import axios from 'axios';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

const AddAuthor = () => {
    const navigate = useNavigate()
    const [createAuthor, setCreateAuthor] = useState({
        name:'',
        birthdate:'',
        biography:'',
    })

    const validationSchema = Yup.object().shape({
        name:Yup.string().required('Author name is required'), //formik.errors
        birthdate:Yup.string().required('Birthdate is required'),
        biography:Yup.string().required('Biography is required'),
    })

    const formik = useFormik({
        initialValues:{createAuthor}, //formik.values
        validationSchema:validationSchema,
        onSubmit:async(values) => {
            await axios.post('https://65dc693ee7edadead7ebef8b.mockapi.io/authors', values)
        .then( res => {console.log(res.data)})
        .catch((err) => console.log(err))
        navigate('/')
        }
    })
    return (
        <div className='container bg-info'>
            <form onSubmit={formik.handleSubmit}>
                <div className='pt-5 pb-5 display-3 text-right'>
                    <label >Add Author</label>
                </div>
                    <div class="form-group col-md-6 pb-5">
                        <label for="name">Name</label>
                        <input type="text" class="form-control" name='name' placeholder="Enter a author name" value={formik.values.name} onChange={formik.handleChange} />
                        <div className='text-danger'>{formik.errors.name}</div>
                    </div>
                    <div class="form-group col-md-6 pb-5">
                        <label for="birthdate">Birthdate</label>
                        <input type="text" class="form-control" name='birthdate' placeholder="Enter birthday date" value={formik.values.birthdate} onChange={formik.handleChange} />
                        <div className='text-danger'>{formik.errors.birthdate}</div>
                    </div>
                <div class="form-group col-md-6 pb-5">
                    <label for="biography">Biography</label>
                    <input type="text" class="form-control" name='biography' placeholder="Enter isbn" value={formik.values.biography} onChange={formik.handleChange} />
                    <div className='text-danger'>{formik.errors.biography}</div>
                </div>
                <button type="submit" class="btn btn-primary" >Add Author</button>
            </form>
        </div>
    );
};

export default AddAuthor;