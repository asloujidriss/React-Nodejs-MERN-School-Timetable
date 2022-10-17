import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom' 
import EleveServices from '../../../services/EleveServes'
import ClasseServices from '../../../services/ClasseService'
import Swal from 'sweetalert2'
 
const  AddEleve = () => {
  const navigate = useNavigate()
  const [eleves,seteleves]=useState([])
  const [classe, setclasses] = useState([])
  const [data,setData]= useState({})
  
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

  const onChangehandle=(e)=>{
    setData({
      ...data,
      [e.target.name] : e.target.value
    })   
  }
 
  const onSubmithandler=(e)=>{
    e.preventDefault()

    Swal.fire({
      title: 'Voulez-vous enregistrer les modifications?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'enregistrer',
      denyButtonText: `Ne pas enregistrer`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        navigate("/getallEleve")
        EleveServices.create(data).then(res=>{

          console.log(res)
        }).catch(err=>{
          console.log(err)
        })
        Swal.fire('Enregistré(e)!', '', 'Succès')
      } else if (result.isDenied) {
        Swal.fire('Les modifications ne sont pas enregistrées', '', 'info')
      }
    })

   
  }
  
  return (
    <div>
       <div className="page-content-wrap">
  <div className="row">
    <div className="col-md-12">
      <form className="form-horizontal"  onSubmit={onSubmithandler} >
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="text-center"><strong>Ajouter nouveau élève</strong></h3>
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
                  <input type="text" className="form-control" name='name'  onChange={onChangehandle}/>
                </div>
                <span className="help-block">Ajoutez nom</span>
              </div>
            </div>
            <div className="form-group">
              <label className="col-md-3 col-xs-12 control-label">Prenom</label>
              <div className="col-md-6 col-xs-12">
                <div className="input-group">
                  <span className="input-group-addon"><span className="fa fa-pencil" /></span>
                  <input type="text" className="form-control" name='prenom'  onChange={onChangehandle}/>
                </div>
                <span className="help-block">Ajoutez prenom</span>
              </div>
            </div>
            <div className="form-group" >
            <label className="col-md-3 col-xs-12 control-label">Classe</label>
            <div className="col-md-6 col-xs-12">
              <div className="input-group">
             
        
            <select className="form-select" name='classe' onChange={onChangehandle}  >
      
            <option  value="">Choisissez une classe</option>
              {classe.map((item) => {
                return (
                  <option key={item._id} value={item._id}>{item.niveau} {item.name} {item.section}</option>
                )
              })}
         
            </select>

              </div>
              <span className="help-block">Ajoutez classe</span>
            </div>
  
        </div>
          <div className="panel-footer">
          <Link to="/getallEleve" className="btn btn-primary">Listes des éleves</Link>
            <button className="btn btn-primary pull-right" type="submit">Valider</button>
          </div>
        </div>
        </div>
      </form>
     
    </div>
  </div>
</div>
    </div>
  )
}

export default AddEleve