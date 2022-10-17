import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import classeServices from '../../services/ClasseService'
const Liste_Eleve = () => {
    const [data, setData]= useState ({})
const {id} = useParams()
  useEffect(() => {
    classeServices.get(`626108e4211950157b24e58b`).then(res=>{
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
        <h3 className="text-center"><strong>l'élève du classe {data?.niveau} {data?.name} {data?.section} </strong></h3>
        </div>
        <div className="panel-body">
          <p></p>
          <table className="table">
            <thead>
            <tr>  <th width={50}>Listes d'eleves</th> 
           </tr>
           <tr>
              <td>{data.listEleves?.map((item)=>{
                return (
                  <tr width={200} key={item._id} value={item._id}>{item?.name} {item?.prenom}</tr>
                )
              })} </td>
             
            </tr> 
           

            </thead>
            <tbody> 
            </tbody>
          </table>
               
          <div className="panel-footer">
          {/* <Link to="/liste_classe_enseignant/62682b6752e60fcff82d0f40" className="btn btn-primary">retour</Link> */}
           
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
  )
}

export default Liste_Eleve
