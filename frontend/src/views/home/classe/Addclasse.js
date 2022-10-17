import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom' 
import classeServices from '../../../services/ClasseService'
import Swal from 'sweetalert2'
 




const Addclasse = () => {

  const navigate = useNavigate()

  const [classes,setclasse]=useState([])

  const [data,setData]= useState({})

  /* const [images,setimages]=useState([])  */
 
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
        navigate("/getAllClasse")
        classeServices.create(data).then(res=>{

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

  return (
    <div>
       <div className="page-content-wrap">
  <div className="row">
    <div className="col-md-12">
      <form className="form-horizontal"  onSubmit={onSubmithandler} >
        <div className="panel panel-default">
          <div className="panel-heading">
          <h3 className="text-center"><strong>Ajouter nouveau classe</strong></h3>
            <ul className="panel-controls">
              {/* <li><a href="#" className="panel-remove"><span className="fa fa-times" /></a></li> */}
            </ul>
          </div>
          <div className="panel-body">
          <div className="form-group">
              <label className="col-md-3 col-xs-12 control-label">Niveau</label>
              <div className="col-md-6 col-xs-12">
                <div className="input-group">
                  <span className="input-group-addon"><span className="fa fa-pencil" /></span>
                  <input type="text" className="form-control" name='niveau'  onChange={onChangehandle}/>
                </div>
                <span className="help-block">Ajoutez niveau</span>
              </div>
            </div>
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
            <div className="form-group" >
            <label className="col-md-3 col-xs-12 control-label">Section</label>
            <div className="col-md-6 col-xs-12">
              <div className="input-group">
             
        
            <select className="form-select" name='section' onChange={onChangehandle}  >
      
            <option   >Choisissez le section</option>
            <option>Informatique</option>
            <option >Mathematique</option>
            <option>Letter</option>
            <option >Economie et gestion</option>
            <option >Sport</option>
            <option >Genetral</option>
           
            </select>

              </div>
              <span className="help-block">Ajoutez section</span>
            </div>
  
        </div>
          </div>
          <div className="panel-footer">
          <Link to="/getAllClasse" className="btn btn-primary">Listes des Classes</Link>
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

export default Addclasse