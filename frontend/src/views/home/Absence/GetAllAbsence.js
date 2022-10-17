import React, { useEffect } from 'react'
import { useState } from 'react'
import  {Link}  from 'react-router-dom'
import AbsenceServices from '../../../services/absenceService'
import Swal from 'sweetalert2'


const GetAllAbsence = () => {
const [absences,setabsences]=useState([])
 
const GetAll=()=>{

    AbsenceServices.getAll().then(res=>{
    console.log("response >>>>",res)
    setabsences(res.data.data)
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
        AbsenceServices.remove(id).then(res=>{
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
        <h3 className="panel-title">list of Absences</h3>
      </div>
      <div className="panel-body panel-body-table">
        <div className="table-responsive">
          <table className="table table-bordered table-striped table-actions">
            <thead>
              <tr>
                <th width={50}>id</th>
                <th>date_absence</th>
                <th width={100}>type</th>
                <th width={100}>description</th>
                <th width={100}>actions</th>
              </tr>
            </thead>
            <tbody>                                            
              {absences.map((item,index)=>{

                return (<tr id="trow_1">
                <td className="text-center">{index}</td>
                <td><strong>{item.date_absence}</strong></td>
                <td>{item.type}</td>
                <td>{item.description}</td>
               
                <td>
                  <button className="btn btn-danger btn-rounded btn-sm" onClick={()=>onDelete(item._id)}><span className="fa fa-times" /></button>
                </td>
              </tr>
              )
              })
              }

              <Link to="/addAbsence" className='btn btn-primary'>Add Absence</Link>
              
             
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

export default GetAllAbsence