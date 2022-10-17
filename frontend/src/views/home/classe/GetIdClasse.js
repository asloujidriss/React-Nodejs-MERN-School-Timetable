import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import classeServices from '../../../services/ClasseService'
const GetClasse = () => {
    const [data, setData]= useState({})
const {id} = useParams()
  useEffect(() => {
    classeServices.get(id).then(res=>{
      console.log(res)
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
        <h3 className="text-center"><strong>L'informations du classe {data?.niveau} {data?.name} {data?.section} </strong></h3>
        </div>
        <div className="panel-body">
          <p></p>
          <table className="table">
            <thead>
            <tr>  <th width={50}>Listes d'eleves</th> 
            <th width={50}>Listes d'enseignants </th>  
           </tr>
           <tr>
              <td>{data.listEleves?.map((item)=>{
                return (
                  <tr width={200} key={item._id} value={item._id}>{item?.name} {item?.prenom} {item?.absence}</tr>
                )
              })} </td>
              <td>
               {data.Enseignant?.map((item)=>{
                return (
                  <tr width={200} key={item._id} value={item._id}>{item?.nom} {item?.prenom}{" du matière:"} {item?.matières}</tr>
                )
              })} </td>
            </tr> 
           

            </thead>
            <tbody> 
            </tbody>
          </table>
               
          <div className="panel-footer">
          <Link to="/getAllClasse" className="btn btn-primary">Listes des classes</Link>
           
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
  )
}

export default GetClasse
