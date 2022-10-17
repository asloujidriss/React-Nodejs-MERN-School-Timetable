import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import ensignantServices from '../../../services/enseignantServices'

const GetEnseigant = () => {

const [data, setData]= useState({})
const {id} = useParams()
  useEffect(() => {
    ensignantServices.get(id).then(res=>{
      
setData(res.data.data)
    }).catch(err=>{
      console.log(err)
    })
  }, [])
  return (
    <div><div className="page-content-wrap">
  <div className="row">
    <div className="col-md-6">
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="text-center"><strong>les informations du {data?.nom} {data?.prenom} </strong></h3>
        </div>
        <div className="panel-body">
          <p></p>
          <table className="table">
            <thead>
           
             <tr  ><th className='text-center' width={50}>Nom et prenom</th> <td width={200}>{data?.nom} {data?.prenom}</td>    </tr> 
           <tr> <th className='text-center' width={50}>numéro de téléphone</th>  <td width={200}>{data?.numero_tel}</td> </tr> 
         <tr> <th className='text-center' width={50}>Email</th> <td width={200}>{data?.email}</td> </tr> 
           <tr> <th  className='text-center'width={50}>Description</th> <td width={200}>{data?.description}</td> </tr> 
            <tr> <th className='text-center' width={50}>Matières</th>  <td width={200}>{data?.matières} </td></tr>  
           <tr>  <th className='text-center' width={50}>Liste de classe</th>  
           <td>{data.liste_classe?.map((item)=>{
                return (
                  <tr width={200} key={item._id} value={item._id}>{item?.niveau} {item?.name} {item?.section}</tr>
                )
              })}</td> </tr> 
              <tr> 
              <th className='text-center' width={50}>Emploi</th>  
             <td> <Link to={`/getemploi/${id}`}>
                 voir votre emploi
                  </Link> </td>
              </tr>
            </thead>
            <tbody> 
            </tbody>
          </table>
          <div className="panel-footer">
          <Link to="/getallenseignant" className="btn btn-primary">Listes d'Enseignants</Link>
           
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
  )
}

export default GetEnseigant
