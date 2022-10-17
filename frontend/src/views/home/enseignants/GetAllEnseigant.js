import React, { useEffect } from 'react'
import { useState } from 'react'
import  {Link}  from 'react-router-dom'
import ensignantServices from '../../../services/enseignantServices'
import Swal from 'sweetalert2'


const GetAllenseignant = () => {
const [enseignants,setenseignant]=useState([])
 
const GetAll=()=>{

  ensignantServices.getAll().then(res=>{
  
    setenseignant(res.data.data)
  }).catch(err=>{
    console.log(err)
  })

}


useEffect(() => {
 GetAll()
}, [])

const onDelete=(id)=>{

  Swal.fire({
    title: 'Es-tu sûr?',
    text: "Vous ne pourrez pas revenir en arrière !",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085D6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Oui, supprimez-le !'
  }).then((result) => {
    if (result.isConfirmed) {
      ensignantServices.remove(id).then(res=>{
        GetAll()
        
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
      <h3 className="text-center"><strong>Listes d'enseignants</strong></h3>
      </div>
      <div className="panel-body panel-body-table">
        <div className="table-responsive">
          <table className="table table-bordered table-striped table-actions">
            <thead>
              <tr>
                <th className="text-center" width={100}>Numéro</th>
                <th className="text-center" width={100}>Nom</th>
                <th className="text-center"  width={100}>Prenom</th>
                <th className="text-center" width={100}>Matières</th>
                <th className="text-center" width={100}>Actions</th>
              </tr>
            </thead>
            <tbody>                                            
              {enseignants.map((item,index)=>{

                return (<tr id="trow_1">
                <td className="text-center">{index}</td>
                <td className="text-center">{item.nom}</td>
                <td className="text-center">{item.prenom}</td>
                <td className="text-center">{item.matières}</td>
                <td className="text-center">
                <Link to={`/updatenseignant/${item._id}`}>
                  <button className="btn btn-default btn-rounded btn-sm">
                    <span className="fa fa-pencil" /></button>
                  </Link>
                  <Link to={`/getidEseignant/${item._id}`}>
                  <button className="btn btn-default btn-rounded btn-sm">
                    <span className="fa fa-eye" /></button>
                  </Link>
                  <button className="btn btn-danger btn-rounded btn-sm" onClick={()=>onDelete(item._id)}><span className="fa fa-times" /></button>
                </td>
              </tr>
              )
              })
              }

              <Link to="/AddEnseiganat" className='btn btn-primary'>Ajouter nouvelle Enseiganat</Link>
              
             
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

export default GetAllenseignant