import React from 'react'
import { useFormik } from 'formik';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Register() {
    let navigate = useNavigate();
    
    const formik = useFormik({
        initialValues: {
          email: '',
          name : '',
          password : ''
        },
        onSubmit: async (values) => {
            await axios.post("https://b31wd-node.herokuapp.com/register",values);
            navigate(`/login`);
        },
      });

  return (
    <div className='container'>
        <h1>Register</h1>
        <div className='row'>
        <form onSubmit={formik.handleSubmit}>
        <div className='col-lg-12'>
                <label>Name</label>
                <input type="text" name='name' onChange={formik.handleChange}
         value={formik.values.name} className='form-control' />
        </div>
        <div className='col-lg-12'>
                <label>Email</label>
                <input type="text" name='email' onChange={formik.handleChange}
         value={formik.values.email} className='form-control' />
        </div>
        <div className='col-lg-12'>
                <label>Password</label>
                <input type="password" onChange={formik.handleChange}
         value={formik.values.password} name='password' className='form-control' />
        </div>
        <div className='col-lg-12 mt-3'>
               <input type="submit" className='btn btn-primary'  />
        </div>
        </form>
        </div>

    </div>
  )
}

export default Register