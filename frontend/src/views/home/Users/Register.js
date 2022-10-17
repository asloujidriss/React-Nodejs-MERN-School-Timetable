import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom' 
import userServices from '../../../services/UsersService'
import Swal from 'sweetalert2'

const Register = () => {

  const navigate = useNavigate()







  return (

  <div>
        <div className="login-container">
<div className="login-container">
  <div className="login-box animated fadeInDown">
    <div className="login-logo" />
    <div className="login-body">
      <div className="login-title"><strong>Welcome</strong>, Please Sign up</div>
      <form action="/register" className="form-horizontal" method="post">
        <div className="form-group">
          <div className="col-md-12">
            <input type="text" className="form-control" placeholder="nom" />
          </div>
        </div>
        <div className="form-group">
          <div className="col-md-12">
            <input type="text" className="form-control" placeholder="prenom" />
          </div>
        </div>
        <div className="form-group">
          <div className="col-md-12">
            <input type="text" className="form-control" placeholder="numero_tel" />
          </div>
        </div>
        <div className="form-group">
          <div className="col-md-12">
            <input type="text" className="form-control" placeholder="Email" />
          </div>
        </div>
        <div className="form-group">
          <div className="col-md-12">
            <input type="text" className="form-control" placeholder="Password" />
          </div>
        </div>
        <div className="form-group">
        <div class="form-group">
                                          <label class="col-form-label">
                                            who are you?
                                          </label>
                                          <select class="form-control">
                                            <option>Super Admin</option>
                                            <option>Admin</option>
                                            <option>Enseignant</option>
                                          </select>
                                        </div>
          <div className="col-md-6">
            <button className="btn btn-info btn-block">Log In</button>
          </div>
        </div>
      </form>
    </div>
    <div className="login-footer">
      <div className="pull-left">
       Lyceé Ourdanine
    </div>
  </div>
</div>

</div>
</div>
</div>
  )
}

export default Register