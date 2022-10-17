import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import enseignantServices from '../../services/enseignantServices'
import classeServices from '../../services/ClasseService'

const Liste_classe = () => {
  const [data, setData]= useState({})
  const {id} = useParams()
    useEffect(() => {
      enseignantServices.getlisteClasse(`626108e4211950157b24e58b`).then(res=>{
        console.log(res)
  setData(res.data.data)
      }).catch(err=>{
        console.log(err)
      })
    }, [])
   
  return (
    <div>
      
    <div className="page-content-wrap">
  <div className="row">
    <div className="col-md-6">
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title"><h2>les listes de classes du {data?.nom} {data?.prenom} </h2></h3>
        </div>
        <div className="panel-body">
          <p></p>
          <table className="table">
            <thead>
           
     
           <tr>  <th width={50}>Liste de classe</th> </tr>  

            {data.liste_classe?.map((item)=>{
            
                return (
                
                  <Link to={`/listeEleve/626108e4211950157b24e58b`}>
                   
                  <td width={200} key={item._id} value={item._id}>{item?.niveau} {item?.name} {item?.section }   </td>
                  </Link>
                  
                 
                  
                  
                  
                  
                  
                
                )
              })}
            </thead>
            <tbody> 
            </tbody>
          </table>
          <div className="panel-footer">
          <Link to="/Enseignant" className="btn btn-primary">Menu</Link>
           
          </div>
        </div>
      </div>
    </div>
  </div>
</div> 
</div>

  )
}

export default Liste_classe