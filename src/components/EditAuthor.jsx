import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const EditAuthor = ({ authorId }) => {
    const navigate = useNavigate()
    const [editAuthor, setEditAuthor] = useState({
        name: '',
        birthdate: '',
        biography: '',
    })

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        await axios.get(`https://65dc693ee7edadead7ebef8b.mockapi.io/authors/${authorId}`)
            .then(res => {
                const { name, birthdate, biography } = res.data;
                setEditAuthor({ name, birthdate, biography })
            })
            .catch((err) => { console.log(err); })
    }

    useEffect(() => {
        formik.setValues(editAuthor) //formik.value -> formik.setValues()
    }, [editAuthor])

    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Author name is required'), //formik.errors
        birthdate: Yup.string().required('Birthdate is required'),
        biography: Yup.string().required('Biography is required'),
    })

    const formik = useFormik({
        initialValues: {
            name: '',
            birthdate: '',
            biography: '',
        }, //formik.values
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            await axios.put(`https://65dc693ee7edadead7ebef8b.mockapi.io/authors/${authorId}`, values)
                .then(res => { console.log(res.data) })
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
                    <input type="text" class="form-control" name='biography' placeholder="Enter biography" value={formik.values.biography} onChange={formik.handleChange} />
                    <div className='text-danger'>{formik.errors.biography}</div>
                </div>
                <button type="submit" class="btn btn-primary" >Update Author</button>
            </form>
        </div>
    );
};

export default EditAuthor;