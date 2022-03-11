import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Users() {
    const [users, setUsers] = useState([]);
    useEffect( () => {
       getData()
    }, []);

    async function getData(){
        let users = await axios.get("https://b31wd-node.herokuapp.com/users",{
            headers : {
                "Authorization" : localStorage.getItem("app_token")
            }
        });
        console.log(users.data)
        setUsers(users.data);
    }

    let handleDelete = async (id) => {
        await axios.delete(`https://b31wd-node.herokuapp.com/delete/${id}`,{
            headers : {
                "Authorization" : localStorage.getItem("app_token")
            }
        })
        getData()
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <h3>Users</h3>
                    <Link to="/create" className="btn btn-primary btn-sm">Create User</Link>
                </div>
                <div className="col-lg-12">
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user) => {
                                return (
                                    <tr>
                                        <td>{user?._id}</td>
                                        <td>{user?.name}</td>
                                        <td>{user?.email}</td>
                                        <td>
                                            <Link to={`/edit/${user._id}`} className='btn btn-primary btn-sm'>Edit</Link>
                                            <button onClick={() => handleDelete(user._id)} className='btn btn-danger btn-sm'>Delete</button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Users