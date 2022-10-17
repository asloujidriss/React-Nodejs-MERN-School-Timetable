import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Swal from 'sweetalert2'
import eleveServices from '../../../services/EleveServes'
import ClasseServices from '../../../services/ClasseService'

const UpdatEleve = () => {
  const navigate=useNavigate()
  const [data,setData]=useState({})
  const [classe, setClasses] = useState([])
  const getAllC = () => {

    ClasseServices.getAllC().then(res => {
      console.log("response >>>>", res)
      setClasses(res.data.data)
    }).catch(err => {
      console.log(err)
    })

  }
  useEffect(() => {
    getAllC()
  }, [])
  const {id}=useParams()
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
        navigate("/getallEleve")
        eleveServices.update(id,data).then(res=>{

          console.log(res)
        }).catch(err=>{
          console.log(err)
        })
        Swal.fire('Enregistré!', '', 'Succès')
      } else if (result.isDenied) {
        Swal.fire('Les modifications ne sont pas enregistrées', '', 'info')
      }
    })
  }
useEffect(() => {

    eleveServices.get(id).then(res=>{
        console.log(res)
        setData(res.data.data)
    }).catch(err=>{
        console.log(err)
    })
 
}, [])

  
  /* const handleimages = (e) =>{
    console.log(e)
    setImages(e.target.files)

  } */

  return (
    <div>
    <div className="page-content-wrap">
<div className="row">
 <div className="col-md-12">
   <form className="form-horizontal" onSubmit={onSubmithandler} >
     <div className="panel panel-default">
       <div className="panel-heading">
        
         <h3 className="text-center"><strong >Modifier les donnes du {data?.name} {data?.prenom} </strong> </h3>
         <ul className="panel-controls">
           {/* <li><a href="#" className="panel-remove"><span className="fa fa-times" /></a></li> */}
         </ul>
       </div>
       <div className="panel-body">
       <div className="form-group">
              <label className="col-md-3 col-xs-12 control-label">Nom</label>
              <div className="col-md-6 col-xs-12">
                <div className="input-group">
                  <span className="input-group-addon"><span className="fa fa-pencil" /></span>
                  <input type="text" className="form-control"  value={data.name} name='name'  onChange={onChangehandle}/>
                </div>
                <span className="help-block">Modifiez nom</span>
              </div>
            </div>
            <div className="form-group">
              <label className="col-md-3 col-xs-12 control-label">Prenom</label>
              <div className="col-md-6 col-xs-12">
                <div className="input-group">
                  <span className="input-group-addon"><span className="fa fa-pencil" /></span>
                  <input type="text" className="form-control" value={data.prenom}  name='prenom'  onChange={onChangehandle}/>
                </div>
                <span className="help-block">Modifiez prenom</span>
              </div>
            </div>
            <div className="form-group" >
              <label className="col-md-3 col-xs-12 control-label">Classe</label>
              <div className="col-md-6 col-xs-12">
                <div className="input-group">
               
          
              <select className="form-select"  value={data?.classe} name='classe' onChange={onChangehandle}  >
        
              <option  value="">classe</option>
                {classe.map((item) => {
                  return (
                    <option key={item._id} value={item._id}>{item.niveau} {item.name} {item.section}</option>
                  )
                })}
           
              </select>

                </div>
                <span className="help-block">Modifiez classe</span>
              </div>
    
          </div>
       </div>
       <div className="panel-footer">
       <Link to="/getallEleve" className="btn btn-primary">Listes d'élèves</Link>
         <button className="btn btn-primary pull-right" type="submit">Valider</button>
       </div>
     </div>
   </form>
 </div>
</div>
</div>
 </div>
  )
}

export default UpdatEleve