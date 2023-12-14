import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'

const Create = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const history = useNavigate()
  const header = { 'Access-Control-Allow-Origin': '*' }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    
    console.log('Handle Submit is working')

    axios
      .post('https://jsonplaceholder.typicode.com/users', {
        name: name,
        email: email,
        header, 
      })


      .then(() => {
        history('/read')
      })
  }

  return (
    <>
      <br />
      <div className='d-flex justify-content-between m-2'>
        <h2>CREATE</h2>
        <Link to="/read">
          <button className='btn btn-info'>Show Data</button>
        </Link>
      </div>
      <br />
      <form>
       
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
          
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <br /> 
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            aria-describedby="emailHelp"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <br />
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </>
  )
}
export default Create


