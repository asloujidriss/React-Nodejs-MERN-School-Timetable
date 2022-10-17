import React, { useState } from 'react'
import LoginService from '../../services/LoginService'

const Login = () => {

  const [data, setData]=useState({email:"",password:""}) 
  const [error, setError]=useState("")




  const handleChange = ({currentTarget:input})=>{
    setData({...data,[input.name]:input.value})
  }


  const handleSubmit=(e)=>{
    e.preventDefault()
    LoginService.create(data)
    .then(res=>{
      console.log(res)
      window.location="/"
    }).catch(error=>{
      console.log(error)
      if(error.response && error.response.status>=400 && error.response.status<=500)
      {
        setError(error.response.data.message)
      }
    })
  }
  
  return (
    <div>
<div className="login-container">

  <div className="login-box animated fadeInDown">
   
    <div className="login-body">
      <div className="login-title"><strong>Bienvenue</strong>, veuillez vous connecter</div>
      <form  className="form-horizontal" onSubmit={handleSubmit} >
        <div className="form-group">
          <div className="col-md-12">
            <input type="email" className="form-control" placeholder="adresse e-mail" required name="email" value={data.email} onChange={handleChange}/>
          </div>
        </div>
        <div className="form-group">
          <div className="col-md-12">
            <input type="password" className="form-control" placeholder="Mot de passe" required name="password" value={data.password} onChange={handleChange} />
            {error && <div  class="invalid-feedback">{error}</div>}
          </div>
        </div>
        <div className="form-group">
          <div className="col-md-6">
            <a href="#" className="btn btn-link btn-block">Mot de passe oublié ?</a>
          </div>
          <div className="col-md-6">
            <button className="btn btn-info btn-block">S'identifier</button>
          </div>
        </div>
      </form>
    </div>
    <div className="login-footer">
      <div className="pull-left">
       lycée Ourdanine
      </div>
     
    </div>
  </div>


</div>
    </div>
  )
}

export default Login
