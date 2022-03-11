import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";

function Usercreate() {
    let navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
    },
    onSubmit: async (values) => {
        await axios.post("https://b31wd-node.herokuapp.com/create-user",values,{
          headers : {
              "Authorization" : localStorage.getItem("app_token")
          }
      })
        navigate(`/`);
    },
  });
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <h3>Create User</h3>
        </div>
      </div>
      <form onSubmit={formik.handleSubmit}>
        <div className="row">
          <div className="col-lg-6">
            <label>User Name</label>
            <input
              type="text"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              className="form-control"
            />
          </div>
          <div className="col-lg-6">
            <label>User Email</label>
            <input
              type="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              className="form-control"
            />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-lg-6">
            <input type="submit" className="btn btn-primary btn-sm" />
          </div>
        </div>
      </form>
    </div>
  );
}

export default Usercreate;
