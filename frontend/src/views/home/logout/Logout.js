import React from 'react'
import { Link } from "react-router-dom"
import LoginService from '../../../services/LoginService'


function Logout() {



const handleLogout = ()=>{

  LoginService.create().then(res=>{
    console.log(res)
    
  //props.history.push('/Login')

  }).catch(err=>{
    alert(err.response.data.message)
  })
}
  return (
    <div>
           <li className="xn-icon-button pull-right">
          <a href="#" className="mb-control" data-box="#mb-signout"><span className="fa fa-sign-out" /></a> 

          { <div class="message-box animated fadeIn" data-sound="alert" id="mb-signout">
            <div class="mb-container">
                <div class="mb-middle">
                    <div class="mb-title"><span class="fa fa-sign-out"></span> Log <strong>Out</strong> ?</div>
                    <div class="mb-content">
                        <p>Are you sure you want to log out?</p>                    
                        <p>Press No if youwant to continue work. Press Yes to logout current user.</p>
                    </div>
                    <div class="mb-footer">
                        <div class="pull-right">
                            <Link to="/Login">
                            <button class="btn btn-success btn-lg" onClick={handleLogout}>Yes</button>
                            </Link>
                            <button class="btn btn-default btn-lg mb-control-close">No</button>
                        </div>
                    </div>
                </div>
            </div>
        </div> }
         <audio id="audio-alert" src="audio/alert.mp3" preload="auto"></audio>
        <audio id="audio-fail" src="audio/fail.mp3" preload="auto"></audio>                   
        </li> 
    </div>
  )
}

export default Logout