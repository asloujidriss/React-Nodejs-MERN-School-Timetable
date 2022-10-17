import React, { useEffect } from 'react'
import { useState } from 'react'
import  {Link}  from 'react-router-dom'
import classeServices from '../../../services/ClasseService'
import Swal from 'sweetalert2'


const GetAllclasse = () => {
const [classes,setclasse]=useState([])
 
const GetAllC=()=>{

  classeServices.getAllC().then(res=>{
    console.log("response >>>>",res)
    setclasse(res.data.data)
  }).catch(err=>{
    console.log(err)
  })

}


useEffect(() => {
 GetAllC()
}, [])

const onDelete=(id)=>{

  Swal.fire({
    title: 'es-tu sûr?',
    text: "Vous ne pourrez pas revenir en arrière!",
    icon: 'avertissement',
    showCancelButton: true,
    confirmButtonColor: '#3085D6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      classeServices.remove(id).then(res=>{
        GetAllC()
        
      })
      Swal.fire(
        'Supprimé !',
        'Votre fichier a été supprimé.',
        'Succès'
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
      <h3 className="text-center"><strong>listes des classes</strong></h3>
      </div>
      <div className="panel-body panel-body-table">
        <div className="table-responsive">
          <table className="table table-bordered table-striped table-actions">
            <thead>
              <tr>
                <th className='text-center' width={50}>Numéro</th>
                <th className='text-center'width={100} >Niveau</th>
                <th className='text-center' width={100}>Nom</th>
                <th className='text-center'  width={100}>Section</th>
                <th className='text-center' width={100}>Actions</th>
              </tr>
            </thead>
            <tbody>                                            
              {classes.map((item,index)=>{

                return (<tr id="trow_1">
                <td className="text-center">{index}</td>
                <td className='text-center'>{item.niveau}</td>
                <td className='text-center'>{item.name}</td>
                <td className='text-center'>{item.section}</td>
               
                <td className='text-center'>
                <Link to={`/updateclasse/${item._id}`}>
                  <button className="btn btn-default btn-rounded btn-sm">
                    <span className="fa fa-pencil" /></button>
                  </Link>
                  <Link to={`/getidclasse/${item._id}`}>
                  <button className="btn btn-default btn-rounded btn-sm">
                    <span className="fa fa-eye" /></button>
                  </Link>
                  <button className="btn btn-danger btn-rounded btn-sm" onClick={()=>onDelete(item._id)}><span className="fa fa-times" /></button>
                </td>
              </tr>
              )
              })
              }

              <Link to="/addClasse" className='btn btn-primary'>Ajouter  Classe</Link>
              
             
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

export default GetAllclasse