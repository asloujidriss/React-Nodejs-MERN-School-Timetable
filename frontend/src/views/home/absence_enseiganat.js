import React, { useEffect } from 'react'
import { useState } from 'react'
import  {Link, Navigate}  from 'react-router-dom'
import ensignantServices from '../../services/enseignantServices'
import Swal from 'sweetalert2'
const AbsenceEnseigant = () => {
    const [enseignants,setenseignant]=useState([])
    const [data,setData]= useState({})
const GetAll=()=>{

  ensignantServices.getAll().then(res=>{
    console.log("response >>>>",res)
    setenseignant(res.data.data)
  }).catch(err=>{
    console.log(err)
  })

}


useEffect(() => {
 GetAll()
}, [])

const onChangehandle=(e)=>{
    setData({
      ...data,
      [e.target.name] : e.target.value
    })
  }
  const onSubmithandler=(e)=>{
    e.preventDefault()
    



    Swal.fire({
      title: 'Souhaitez-vous enregistrer les modifications ?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'enregistrer',
      denyButtonText: `Ne pas enregistrer`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Navigate("")
        ensignantServices.create(data).then(res=>{
          console.log(res)
        }).catch(err=>{
          console.log(err)
        })
        Swal.fire('Enregistré(e)!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('Les modifications ne sont pas enregistrées', '', 'info')
      }
    })
  }
  return (
    <div>
    <div className="row">
<div className="col-md-12">
<div className="panel panel-default">
 <div className="panel-heading">
   <h3 className="text-center"><strong>Fiche d'absence </strong></h3>
 </div>
 <div className="panel-body panel-body-table">
   <div className="table-responsive">
     <table className="table table-bordered table-striped table-actions">
       <thead>
         <tr>
           <th width={100}  className="text-center">Numéro</th>
           <th width={100}  className="text-center">Listes d'élèves</th>
           <th width={100}  className="text-center">Presence</th>
           <th width={100}  className="text-center">Billet d'entreé</th>
         
         </tr>
       </thead>
       <tbody>                                            
         {enseignants.map((item,index)=>{

           return (<tr  className="text-center"  id="trow_1">
           <td className="text-center">{index}</td>

           <td>{item.liste_classe}</td>

           <td>
             <button className="btn btn-default btn-rounded btn-sm">
               <i className="fa fa-check-circle" style={{ color: 'green'}} /></button>


             <button className="btn btn-danger btn-rounded btn-sm  "><span className="fa fa-times" /></button>
           </td>


           <td>
              
             <button className="btn btn-default btn-rounded btn-sm" >
               <i className= "fa fa-check" style={{ color: 'green'}} 
                /></button>
           </td>
        
         </tr>
         )
         })
         }

           <button className="btn btn-primary pull-right" type="submit">Confermer</button>
         
        
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

export default AbsenceEnseigant