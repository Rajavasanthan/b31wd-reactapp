import React from 'react'
import { useFormik } from 'formik';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
    let navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
          email: '',
          password : ''
        },
        onSubmit: async (values) => {
            try {
                let login = await axios.post("https://b31wd-node.herokuapp.com/login",values);
                window.localStorage.setItem("app_token",login.data.token)
                navigate("/users")
            } catch (error) {
                alert("User Name / Password Incorrect")
            }
        },
      });


  return (
    <div className='container'>
        <h1>Login</h1>
        <form onSubmit={formik.handleSubmit}>
        <div className='row'>
            <div className='col-lg-12'>
                <label>Email</label>
                <input type="text" name='email' onChange={formik.handleChange}
         value={formik.values.name} className='form-control' />
            </div>
            <div className='col-lg-12'>
                <label>Password</label>
                <input type="password" name='password' onChange={formik.handleChange}
         value={formik.values.name} className='form-control' />
            </div>
            <div className='col-lg-12 mt-3'>
                <input type="submit" className='btn btn-primary' />
            </div>
        </div>
        </form>

    </div>
  )
}

export default Login