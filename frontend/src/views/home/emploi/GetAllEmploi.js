import React, { useEffect } from 'react'
import { useState } from 'react'
import  {Link}  from 'react-router-dom'
import Swal from 'sweetalert2'
import emploiServices from '../../../services/emploiService'


const GetAllEmploi = () => {
 
// const [data, setData]= useState({})
// const {id} = useParams()
//   useEffect(() => {
//     ensignantServices.get(id).then(res=>{
      
// setData(res.data.data)
//     }).catch(err=>{
//       console.log(err)
//     })
//   }, [])


// const onDelete=(id)=>{
//   Swal.fire({
//     title: 'Are you sure?',
//     text: "You won't be able to revert this!",
//     icon: 'warning',
//     showCancelButton: true,
//     confirmButtonColor: '#3085D6',
//     cancelButtonColor: '#d33',
//     confirmButtonText: 'Yes, delete it!'
//   }).then((result) => {
//     if (result.isConfirmed) {
//       emploiServices.remove(id).then(res=>{
//         GetAll()
        
//       })
//       Swal.fire(
//         'Deleted!',
//         'Your file has been deleted.',
//         'success'
//       )
//     }
//   })

// }

//   return (

//   <>

// <div className="container mt-3" style={{ marginTop: "3rem" }}>
// <h1 >Listes d'Emploi du temps</h1>



// <table class="table table-bordered table-dark">
//   <thead>
//     <tr>
//       <th scope="col">#</th>
//       <th scope="col">enseignant</th>
      
//       <th scope="col">AnneeScolaire</th>
//       <th scope="col">Actions</th>
//     </tr>
//   </thead>
//   <tbody>
//  {emploi.map((item,index)=>{
//    return(
//     <tr>
//     <th scope="row">{item.index}</th>
//     <td>{item.nom}</td>
//     <td>{item.AnneeScolaire}</td>
//     <td>
             
//     <Link to="/">
//                 <button className="btn btn-default btn-rounded btn-sm" style={{borderColor:"white"}}>
//                   <span className="fa fa-eye" style={{color:'white' }} /></button>
//                 </Link > 
//                 <button className="btn btn-danger btn-rounded btn-sm" onClick={()=>onDelete(item._id)}><span className="fa fa-times" /></button>
//                 <Link to="/updateEmploi">
//                 <button className="btn btn-default btn-rounded btn-sm" style={{borderColor:"white"}}>
//                   <span className="fa fa-pencil"style={{color:'white' }} /></button>
//                 </Link>
             
//               </td>
//   </tr>
 
//    )
//  })}

//   </tbody>
// </table>
// <Link to="/addemploi" className='btn btn-primary'>Add Emploi</Link>

// </div>


//   </>
  
//   )
}

export default GetAllEmploi