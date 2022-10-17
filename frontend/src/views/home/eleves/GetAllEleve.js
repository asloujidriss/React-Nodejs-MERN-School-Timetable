import React, { useEffect } from 'react'
import { useState } from 'react'
import  {Link}  from 'react-router-dom'
import eleveServices from '../../../services/EleveServes'
import Swal from 'sweetalert2'


const GetAllEleve = () => {
const [eleves,seteleves]=useState([])
 
const GetAll=()=>{

  eleveServices.getAll().then(res=>{
    console.log("response >>>>",res)
    seteleves(res.data.data)
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
      eleveServices.remove(id).then(res=>{
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
      <h3 className="text-center"><strong>Listes d'élève</strong></h3>
      </div>
      <div className="panel-body panel-body-table">
        <div className="table-responsive">
          <table className="table table-bordered table-striped table-actions">
            <thead>
              <tr>
                <th width={50} className="text-center">Numéro</th>
                <th className="text-center" width={100}>Nom</th>
                <th className="text-center" width={100}>Prenom</th>
                <th className="text-center" width={100}>classe</th>
                <th className="text-center" width={100}>actions</th>
              </tr>
            </thead>
            <tbody>                                            
              {eleves.map((item,index)=>{

                return (<tr id="trow_1">
                <td className="text-center">{index}</td>
                <td className="text-center">{item.name}</td>
                <td className="text-center">{item.prenom}</td>
                <td className="text-center">{item.classe?.niveau} {item.classe?.name} {item.classe?.section}</td>
                
                <td className="text-center">
                <Link to={`/updatEleve/${item._id}`}>
                  <button className="btn btn-default btn-rounded btn-sm">
                    <span className="fa fa-pencil" /></button>
                  </Link>
                  <button className="btn btn-danger btn-rounded btn-sm" onClick={()=>onDelete(item._id)}><span className="fa fa-times" /></button>
                </td>
              </tr>
              )
              })
              }

              <Link to="/addEleve" className='btn btn-primary'>Ajouter nouvelle élève</Link>
              
             
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

export default GetAllEleve