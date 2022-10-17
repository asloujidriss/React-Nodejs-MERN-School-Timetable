import React, { useEffect } from 'react'
import { useState } from 'react'
import  {Link}  from 'react-router-dom'
import UserServices from '../../../services/UsersService'
import Swal from 'sweetalert2'


const GetAllUser = () => {
const [Users,setuser]=useState([])
 
const GetAll=()=>{

  UserServices.getAll().then(res=>{
  
    setuser(res.data.data)
  }).catch(err=>{
    console.log(err)
  })

}


useEffect(() => {
 GetAll()
}, [])

const onDelete=(id)=>{

  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085D6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      UserServices.remove(id).then(res=>{
        GetAll()
        
      })
      Swal.fire(
        'Deleted!',
        'Your file has been deleted.',
        'success'
      )
    }
  })

}

  return (

    <div>
         <div className="row">
  <div className="col-md-12">
    <div className="panel panel-default">
      <div className="panel-heading">
        <h3 className="panel-title">list of users</h3>
      </div>
      <div className="panel-body panel-body-table">
        <div className="table-responsive">
          <table className="table table-bordered table-striped table-actions">
            <thead>
              <tr>
                <th width={50}>id</th>
                <th>nom</th>
                <th width={100}>prenom</th>
                <th width={100}>numero_tel</th>
                <th width={100}>email</th>
                <th width={100}>password</th>
                <th width={100}>role</th>
                <th width={100}>actions</th>
              </tr>
            </thead>
            <tbody>                                            
              {Users.map((item,index)=>{

                return (<tr id="trow_1">
                <td className="text-center">{index}</td>
                <td><strong>{item.nom}</strong></td>
                <td>{item.nom}</td>
                <td>{item.numero_tel}</td>
                <td>{item.email}</td>
                <td>{item.pasword}</td>
                <td>{item.role}</td>
                
                <td>
                <Link to={`/updatenseignant/${item._id}`}>
                  <button className="btn btn-default btn-rounded btn-sm">
                    <span className="fa fa-pencil" /></button>
                  </Link>
                  <button className="btn btn-danger btn-rounded btn-sm" onClick={()=>onDelete(item._id)}><span className="fa fa-times" /></button>
                </td>
              </tr>
              )
              })
              }

              <Link to="/register" className='btn btn-primary'>Add user</Link>
              
             
            </tbody>
          </table>
        </div>                                
      </div>
    </div>                                                
  </div>
</div>

    </div>
  )
}

export default GetAllUser