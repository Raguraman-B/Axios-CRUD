import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Read = () => {
  const [data, setData] = useState([])

 

  function getData() {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        console.log(res.data)
        setData(res.data)
      })
  }
  function handleDelete(id) {
    axios
      .delete(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(() => {
        getData()
      })
  }
  const setToLocalStorage = (id, name, email) => {
    localStorage.setItem('id', id)
    localStorage.setItem('name', name)
    localStorage.setItem('email', email)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <>
   
     
      <br />
      <div className="d-flex justify-content-between m-2">
        <h2>USERS</h2>
      
      </div>
      <br />
     <table>
        <thead>
          <tr>
            <th scope="col">S.No</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        {data.map((eachData) => {
          return (
            <>
              <tbody>
                <tr>
                  <th scope="row">{eachData.id}</th>
                  <td>{eachData.name}</td>
                  <td>{eachData.email}</td>
                  <td>
                    <Link to="/update">
                      <button
                        className="btn btn-success"
                        onClick={() =>
                          setToLocalStorage(
                            eachData.id,
                            eachData.name,
                            eachData.email,
                          )
                        }
                      >
                        Edit
                      </button>
                    </Link>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(eachData.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </>
          )
        })}
        </table>
      
    </>
  )
}

export default Read
