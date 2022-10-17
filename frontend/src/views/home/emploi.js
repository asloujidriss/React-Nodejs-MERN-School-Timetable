import React, { useEffect, useState } from 'react'
import EmploiServices from '../../services/emploiService'
import ensignantServices from '../../services/enseignantServices'
import classeServices from '../../services/ClasseService'
import { useParams } from 'react-router-dom'


const Emploi = () => {
  
  const [data, setData]= useState([])
  
  
  const {id} = useParams()

  useEffect(() => {
  ensignantServices.get(id).then(res=>{
  console.log(res)
 
  setData(res.data.data)
    }).catch(err=>{
      console.log(err)
    })
  }, [])

  


  return (
    <div>
<div className="panel-heading">
          <h3 className="panel-title"><h2>l'emploi du temps du {data.nom} {data.prenom}</h2></h3>
        </div>
<table class="table table-bordered table-dark mt-5">
        <thead>
          <tr>
            <th scope="col" style={{backgroundColor:" #212529",color: "white"}}>Heures/ Jours</th>
            <th scope="col"  style={{backgroundColor:" #212529",color: "white"}}>Lundi</th>
            <th scope="col"  style={{backgroundColor:" #212529",color: "white"}}>Mardi</th>
            <th scope="col"  style={{backgroundColor:" #212529",color: "white"}}>Mercredi</th>
            <th scope="col"  style={{backgroundColor:" #212529",color: "white"}}>Jeudi</th>
            <th scope="col"  style={{backgroundColor:" #212529",color: "white"}}>Vendredi</th>
            <th scope="col"  style={{backgroundColor:" #212529",color: "white"}}>Samedi</th>
          </tr>
        </thead>


        <tbody>
          <tr>
            <th scope="row">08H à 09H</th>
            <td>
           
                {data.emploi?.classe[0]?.niveau} {data.emploi?.classe[0]?.name} {data.emploi?.classe[0]?.section}
            </td>
              <td>
              {data.emploi?.classe[1]?.niveau}  {data.emploi?.classe[1]?.name}  {data.emploi?.classe[1]?.section}
            
            </td>
                <td>
             
                {data.emploi?.classe[2]?.niveau}  {data.emploi?.classe[2]?.name}  {data.emploi?.classe[2]?.section}

             
            </td>
                <td>
                {data.emploi?.classe[3]?.niveau}  {data.emploi?.classe[3]?.name}  {data.emploi?.classe[3]?.section}
              

             
            </td>
                <td>
             
                {data.emploi?.classe[4]?.niveau}  {data.emploi?.classe[4]?.name}  {data.emploi?.classe[4]?.section}

             
            </td>
                <td>
             
                {data.emploi?.classe[5]?.niveau}  {data.emploi?.classe[5]?.name}  {data.emploi?.classe[5]?.section}

             
            </td>
          </tr>
          <tr>
            <th  >09H à 10H</th>
                <td>
             
                {data.emploi?.classe[6]?.niveau}  {data.emploi?.classe[6]?.name}  {data.emploi?.classe[6]?.section}

             
            </td>
                <td>
             
                {data.emploi?.classe[7]?.niveau}  {data.emploi?.classe[7]?.name}  {data.emploi?.classe[7]?.section}

             
            </td>
                <td>
             
                {data.emploi?.classe[8]?.niveau}  {data.emploi?.classe[8]?.name}  {data.emploi?.classe[8]?.section}

             
            </td>
                <td>
                {data.emploi?.classe[9]?.niveau}  {data.emploi?.classe[9]?.name}  {data.emploi?.classe[9]?.section}
              
             
            </td>
                <td>
             
                {data.emploi?.classe[10]?.niveau}  {data.emploi?.classe[10]?.name}  {data.emploi?.classe[10]?.section}

             
            </td>
                <td>
             
                {data.emploi?.classe[11]?.niveau}  {data.emploi?.classe[11]?.name}  {data.emploi?.classe[11]?.section}

             
            </td>
          </tr>
          <tr>
            <th  > 10H à 11H</th>

                <td>
                {data.emploi?.classe[12]?.niveau}  {data.emploi?.classe[12]?.name}  {data.emploi?.classe[12]?.section}

             
            </td>
                <td>
             
                {data.emploi?.classe[13]?.niveau}  {data.emploi?.classe[13]?.name}  {data.emploi?.classe[13]?.section}

             
            </td>
                <td>
             
                {data.emploi?.classe[14]?.niveau}  {data.emploi?.classe[14]?.name}  {data.emploi?.classe[14]?.section}

             
            </td>
                <td>
             
                {data.emploi?.classe[15]?.niveau}  {data.emploi?.classe[15]?.name}  {data.emploi?.classe[15]?.section}

             
            </td>
                <td>
             
                {data.emploi?.classe[16]?.niveau}  {data.emploi?.classe[16]?.name}  {data.emploi?.classe[16]?.section}

             
            </td>
                <td>
             
                {data.emploi?.classe[17]?.niveau}  {data.emploi?.classe[17]?.name}  {data.emploi?.classe[17]?.section}

             
            </td>
          </tr>
          <tr>
            <th  >11H à 12H</th>
                <td>
             
                {data.emploi?.classe[18]?.niveau}  {data.emploi?.classe[18]?.name}  {data.emploi?.classe[18]?.section}
             
            </td>
                <td>
                {data.emploi?.classe[19]?.niveau}  {data.emploi?.classe[19]?.name}  {data.emploi?.classe[19]?.section}
               

             
            </td>
                <td>
                {data.emploi?.classe[20]?.niveau}  {data.emploi?.classe[20]?.name}  {data.emploi?.classe[20]?.section}

             
            </td>
                <td>
             
                {data.emploi?.classe[21]?.niveau}  {data.emploi?.classe[21]?.name}  {data.emploi?.classe[21]?.section}

             
            </td>
                <td>
             
                {data.emploi?.classe[22]?.niveau}  {data.emploi?.classe[22]?.name}  {data.emploi?.classe[22]?.section}

             
            </td>
                <td>
             
                {data.emploi?.classe[23]?.niveau}  {data.emploi?.classe[23]?.name}  {data.emploi?.classe[23]?.section}

             
            </td>
          </tr>
          <tr>
            <th  >12H à 13H</th>
                <td>
                {data.emploi?.classe[24]?.niveau}  {data.emploi?.classe[24]?.name}  {data.emploi?.classe[24]?.section}

             
            </td>
                <td>
             
                {data.emploi?.classe[25]?.niveau}  {data.emploi?.classe[25]?.name}  {data.emploi?.classe[25]?.section}

             
            </td>
                <td>
             
                {data.emploi?.classe[26]?.niveau}  {data.emploi?.classe[26]?.name}  {data.emploi?.classe[26]?.section}

             
            </td>
                <td>
             
                {data.emploi?.classe[27]?.niveau}  {data.emploi?.classe[27]?.name}  {data.emploi?.classe[27]?.section}

             
            </td>
                <td>
             
                {data.emploi?.classe[28]?.niveau}  {data.emploi?.classe[28]?.name}  {data.emploi?.classe[28]?.section}
               

             
            </td>
                <td>
             
                {data.emploi?.classe[29]?.niveau}  {data.emploi?.classe[29]?.name}  {data.emploi?.classe[29]?.section}

             
            </td>
          </tr>
          <tr>
            <th  >13H à 14H</th>
                <td>
             
                {data.emploi?.classe[30]?.niveau}  {data.emploi?.classe[30]?.name}  {data.emploi?.classe[30]?.section}

             
            </td>
                <td>
             
                {data.emploi?.classe[31]?.niveau}  {data.emploi?.classe[31]?.name}  {data.emploi?.classe[31]?.section}

             
            </td>
                <td>
             
                {data.emploi?.classe[32]?.niveau}  {data.emploi?.classe[32]?.name}  {data.emploi?.classe[32]?.section}

             
            </td>
                <td>
             
                {data.emploi?.classe[33]?.niveau}  {data.emploi?.classe[33]?.name}  {data.emploi?.classe[33]?.section}

             
            </td>
                <td>
                {data.emploi?.classe[34]?.niveau}  {data.emploi?.classe[34]?.name}  {data.emploi?.classe[34]?.section}

             
            </td>
                <td>
             
                {data.emploi?.classe[35]?.niveau}  {data.emploi?.classe[35]?.name}  {data.emploi?.classe[35]?.section}

             
            </td>
          </tr>
          <tr>
            <th  >14H à 15H</th>

                <td>
             
                {data.emploi?.classe[36]?.niveau}  {data.emploi?.classe[36]?.name}  {data.emploi?.classe[36]?.section}

             
            </td>
                <td>
             
                {data.emploi?.classe[37]?.niveau}  {data.emploi?.classe[37]?.name}  {data.emploi?.classe[37]?.section}

             
            </td>
                <td>
             
                {data.emploi?.classe[38]?.niveau}  {data.emploi?.classe[38]?.name}  {data.emploi?.classe[38]?.section}

             
            </td>
                <td>
                {data.emploi?.classe[39]?.niveau}  {data.emploi?.classe[39]?.name}  {data.emploi?.classe[39]?.section}

             
            </td>
                <td>
             
                {data.emploi?.classe[40]?.niveau}  {data.emploi?.classe[40]?.name}  {data.emploi?.classe[40]?.section}

             
            </td>
                <td>
             
                {data.emploi?.classe[41]?.niveau}  {data.emploi?.classe[41]?.name}  {data.emploi?.classe[41]?.section}

             
            </td>
          </tr>
          <tr>
            <th  >15H à 16H</th>
                <td>
             
                {data.emploi?.classe[42]?.niveau}  {data.emploi?.classe[42]?.name}  {data.emploi?.classe[42]?.section}

             
            </td>
                <td>
             
                {data.emploi?.classe[43]?.niveau}  {data.emploi?.classe[43]?.name}  {data.emploi?.classe[43]?.section}

             
            </td>
                <td>
                {data.emploi?.classe[44]?.niveau}  {data.emploi?.classe[44]?.name}  {data.emploi?.classe[44]?.section}

             
            </td>
                <td>
             
                {data.emploi?.classe[45]?.niveau}  {data.emploi?.classe[45]?.name}  {data.emploi?.classe[45]?.section}

             
            </td>
                <td>
                {data.emploi?.classe[46]?.niveau}  {data.emploi?.classe[46]?.name}  {data.emploi?.classe[46]?.section}
             
            </td>
                <td>
             
                {data.emploi?.classe[47]?.niveau}  {data.emploi?.classe[47]?.name}  {data.emploi?.classe[47]?.section}

             
            </td>
          </tr>
          <tr>
            <th  >16H à 17H</th>
                <td>
             
                {data.emploi?.classe[48]?.niveau}  {data.emploi?.classe[48]?.name}  {data.emploi?.classe[48]?.section}

             
            </td>
                <td>
             
                {data.emploi?.classe[49]?.niveau}  {data.emploi?.classe[49]?.name}  {data.emploi?.classe[49]?.section}

             
            </td>
                <td>
             
                {data.emploi?.classe[50]?.niveau}  {data.emploi?.classe[50]?.name}  {data.emploi?.classe[50]?.section}

             
            </td>
                <td>
                {data.emploi?.classe[51]?.niveau}  {data.emploi?.classe[51]?.name}  {data.emploi?.classe[51]?.section}

             
            </td>
                <td>
             
                {data.emploi?.classe[52]?.niveau}  {data.emploi?.classe[52]?.name}  {data.emploi?.classe[52]?.section}

             
            </td>
                <td>
             
                {data.emploi?.classe[53]?.niveau}  {data.emploi?.classe[53]?.name}  {data.emploi?.classe[53]?.section}

             
            </td>
          </tr>
          <tr>
            <th  >17H à 18H</th>
                <td>
             
                {data.emploi?.classe[54]?.niveau}  {data.emploi?.classe[54]?.name}  {data.emploi?.classe[54]?.section}

             
            </td>
                <td>
             
                {data.emploi?.classe[55]?.niveau}  {data.emploi?.classe[55]?.name}  {data.emploi?.classe[55]?.section}

             
            </td>
                <td>
             
                {data.emploi?.classe[56]?.niveau}  {data.emploi?.classe[56]?.name}  {data.emploi?.classe[56]?.section}

             
            </td>
                <td>
             
                {data.emploi?.classe[57]?.niveau}  {data.emploi?.classe[57]?.name}  {data.emploi?.classe[57]?.section}

             
            </td>
                <td>
             
               
                {data.emploi?.classe[58]?.niveau}  {data.emploi?.classe[58]?.name}  {data.emploi?.classe[58]?.section}
             
            </td>
                <td>
             
                
                 {data.emploi?.classe[59]?.niveau}  {data.emploi?.classe[59]?.name}  {data.emploi?.classe[59]?.section}
                

             
            </td>
          </tr>
        </tbody>


      </table>

    </div>
  )
}

export default Emploi