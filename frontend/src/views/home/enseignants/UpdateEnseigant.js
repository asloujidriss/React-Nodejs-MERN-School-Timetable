import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Swal from 'sweetalert2'
import enseignantServices from '../../../services/enseignantServices'
import ClasseServices from '../../../services/ClasseService'
const Updateenseignant = () => {
  const navigate=useNavigate()
  const [data,setData]=useState({})
  const {id}=useParams()
  const onChangehandle=(e)=>{
    setData({
      ...data,
      [e.target.name] : e.target.value
    }) 
  }
  const [classe, setclasses] = useState([])
  const getAllC = () => {

    ClasseServices.getAllC().then(res => {
      console.log("response >>>>", res)
      setclasses(res.data.data)
    }).catch(err => {
      console.log(err)
    })

  }
  useEffect(() => {
    getAllC()
  }, [])
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
        navigate("/getallenseignant")
        enseignantServices.update(id,data).then(res=>{
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
useEffect(() => {
  enseignantServices.get(id).then(res=>{
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
 <div className="col-md-12">
   <form className="form-horizontal" onSubmit={onSubmithandler} >
     <div className="panel panel-default">
       <div className="panel-heading">
       <h3 className="text-center"><strong >Modifier les donnes du {data?.nom} {data?.prenom} </strong> </h3>
         <ul className="panel-controls">
           {/* <li><a href="#" className="panel-remove"><span className="fa fa-times" /></a></li> */}
         </ul>
       </div>
       <div className="panel-body">
       <div className="form-group">
              <label className="col-md-3 col-xs-12 control-label">Email</label>
              <div className="col-md-6 col-xs-12">
                <div className="input-group">
                  <span className="input-group-addon"><span className="fa fa-pencil" /></span>
                  <input type="text" className="form-control" value={data.email}   name='email' onChange={onChangehandle} />
                </div>
                <span className="help-block">Modifiez email</span>
              </div>
            </div>
            <div className="form-group">
              <label className="col-md-3 col-xs-12 control-label">Mot de passe</label>
              <div className="col-md-6 col-xs-12">
                <div className="input-group">
                  <span className="input-group-addon"><span className="fa fa-pencil" /></span>
                  <input type="text" className="form-control" value={data.password}   name='password' onChange={onChangehandle} />
                </div>
                <span className="help-block">Modifiez mot de passe</span>
              </div>
            </div>
       <div className="form-group">
              <label className="col-md-3 col-xs-12 control-label">Nom</label>
              <div className="col-md-6 col-xs-12">
                <div className="input-group">
                  <span className="input-group-addon"><span className="fa fa-pencil" /></span>
                  <input type="text" className="form-control" value={data.nom} name='nom'  onChange={onChangehandle}/>
                </div>
                <span className="help-block">Modifiez nom</span>
              </div>
            </div>
            <div className="form-group">
              <label className="col-md-3 col-xs-12 control-label">Prenom</label>
              <div className="col-md-6 col-xs-12">
                <div className="input-group">
                  <span className="input-group-addon"><span className="fa fa-pencil" /></span>
                  <input type="text" className="form-control" value={data.prenom}  name='prenom' onChange={onChangehandle}/>
                </div>
                <span className="help-block">Modifiez prenom</span>
              </div>
            </div>
            <div className="form-group">
              <label className="col-md-3 col-xs-12 control-label">Numero de télephone</label>
              <div className="col-md-6 col-xs-12">
                <div className="input-group">
                  <span className="input-group-addon"><span className="fa fa-pencil" /></span>
                  <input type="text" className="form-control" value={data.numero_tel}  name='numero_tel' onChange={onChangehandle} />
                </div>
                <span className="help-block">Modifiez numero de télephone</span>
              </div>
            </div>
            <div className="form-group">
              <label className="col-md-3 col-xs-12 control-label">Description</label>
              <div className="col-md-6 col-xs-12">
                <div className="input-group">
                  <span className="input-group-addon"><span className="fa fa-pencil" /></span>
                  <input type="text" className="form-control" value={data.description}   name='description' onChange={onChangehandle} />
                </div>
                <span className="help-block">Modifiez description</span>
              </div>
            </div>
            <div className="form-group"  >
              <label className="col-md-3 col-xs-12 control-label">matières</label>
              <div className="col-md-6 col-xs-12">
                <div className="input-group">
              <select className="form-select"  value={data.matières}  name='matières' onChange={onChangehandle}  >
             <option   > {data?.matières} </option>
              <option >Arabe</option>
            <option >Français</option>
            <option >Englais</option>
            <option >Mathematique</option>
            <option >Physique</option>
            <option >Sport</option>
            <option>base de donne</option>
            <option >tic</option>
            <option >technique</option>
            <option >hestorique</option>
            <option >madaniya</option>
            <option >economique</option>
            <option >gestion</option>
              </select>
                </div>
                <span className="help-block">Modifiez matière</span>
              </div>
    
          </div>
          {/* <div className="form-group" >
            <label className="col-md-3 col-xs-12 control-label">classe</label>
            <div className="col-md-6 col-xs-12">
              <div className="input-group">
            <select className="form-select" name='classe' onChange={onChangehandle}  >
      
            <option  value="">classe</option>
             {classe.map((item) => {
                return (
                  <option key={item._id} value={item._id}>{item.niveau} {item.name} {item.section}</option>
                )
              })}
         
            </select>

              </div>
              <span className="help-block">Add classe</span>
            </div>
  
        </div> */}
       </div>
       <div className="panel-footer">
       <Link to="/getallenseignant" className="btn btn-primary">Listes des enseignants</Link>
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

export default Updateenseignant