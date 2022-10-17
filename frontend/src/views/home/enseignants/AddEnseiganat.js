import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import enseignantServices from '../../../services/enseignantServices'
import Swal from 'sweetalert2'
import ClasseServices from '../../../services/ClasseService'
import { MultiSelect } from "react-multi-select-component";
import Select from 'react-select';
const Addenseignants = () => {
  const navigate = useNavigate()
  const [enseignants, setEnseignants] = useState([])
  const [selected, setSelected] = useState([]);
  const [classe, setclasses] = useState([])
  const [data, setData] = useState({})

  const [matiere, setMatiere] = useState()
  const getMatiere = (data) => {
    setMatiere(data.value)
    console.log('MATIEEEEEEEEEEEEEEerrrrrr',matiere)
  }

  const matiers = [
    { value: 'Français', label: 'Français' },
    { value: 'Arabe', label: 'Arabe' },
    { value: 'Englais', label: 'Englais' },
    { value: 'Mathematique', label: 'Mathematique' },
    { value: 'Physique', label: 'Physique' },
    { value: 'Sport', label: 'Sport' },
    { value: 'base de donne', label: 'base de donne' },
    { value: 'tic', label: 'tic' },
    { value: 'Programmation', label: 'Programmation' },
    { value: 'Technique', label: 'Technique' },
    { value: 'Hestorique', label: 'Hestorique' },
    { value: 'Economie', label: 'Economie' },
    { value: 'Gestion', label: 'Gestion' },
  ]
  const niveaux =[
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
    { value: '4eme', label: '4' },
  ]
  const [niveau, setNiveau] = useState()
  const getNiveau = (data) => {
    setNiveau(data.value)
    console.log('NIVEAUUUUUUUUUUUU',niveau)
  }
  const sections =[
    { value: 'Economie et gestion', label: 'Economie et gestion' },
    { value: 'Sport', label: 'Sport' },
    { value: 'Letter', label: 'Letter' },
    { value: 'Informatique', label: 'Informatique' },
    { value: 'Mathematique', label: 'Mathematique' },
  ]
  const [section, setSection] = useState()
  const getSection = (data) => {
    setSection(data.value)
    console.log('Sectionnnnnnnnn',section)
  }
  
  const getSectionAndNiveau = (section,niveau) => {
    ClasseServices.getSectionAndNiveau(section,niveau).then(res => {
      console.log("response >>>>", res)
      setclasses(res.data.data)
    }).catch(err => {
      console.log(err)
    })
  }
  useEffect(() => {
    getSectionAndNiveau(section,niveau)
  }, [])
  const onChangehandle = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  const listClasses = classe.map((clas) => {
    return { label: clas.name, value: clas._id }
  });
  const [listClassesToAdd, setlistClassesToAdd] = useState([])
  const getClasses = (data) => {
    let tablClasse = []
    data.map((e) => {
      tablClasse = [...listClassesToAdd, e.value]
    })
    setlistClassesToAdd(tablClasse)
    console.log('CLASSESSS',listClassesToAdd)
  }

  const onSubmithandler = (e) => {
    const liste_classe = listClassesToAdd;
    const matières = matiere;
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
        console.log("DAAAAAAAATAAAA",data)
        const newData = {...data,matières,liste_classe }
        console.log("NEWWWWWWWW DATA",newData)
        enseignantServices.create(newData).then(res => {
          console.log("reeeeeeeeeeesssssssssss",res)
        }).catch(err => {
          console.log(err)
        })
        Swal.fire('Enregistré(e)!', '', 'Succès')
      } else if (result.isDenied) {
        Swal.fire('Les modifications ne sont pas enregistrées', '', 'info')
      }
    })
  }
  /* const handleimages = (e) =>{
    console.log(e)
    setimages(e.target.files)

  }
 */

  return (
    <div>
      <div className="page-content-wrap">
        <div className="row">
          <div className="col-md-12">
            <form className="form-horizontal" onSubmit={onSubmithandler} >
              <div className="panel panel-default">
                <div className="panel-heading">
                <h3 className="text-center"><strong>Ajoutez d'enseignants</strong></h3>
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
                        <input type="text" className="form-control" name='email' onChange={onChangehandle} />
                      </div>
                      <span className="help-block">Ajoutez email</span>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="col-md-3 col-xs-12 control-label">Mot passe</label>
                    <div className="col-md-6 col-xs-12">
                      <div className="input-group">
                        <span className="input-group-addon"><span className="fa fa-pencil" /></span>
                        <input type="text" className="form-control" name='password' onChange={onChangehandle} />
                      </div>
                      <span className="help-block">Ajoutez Mot passe</span>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="col-md-3 col-xs-12 control-label">Nom</label>
                    <div className="col-md-6 col-xs-12">
                      <div className="input-group">
                        <span className="input-group-addon"><span className="fa fa-pencil" /></span>
                        <input type="text" className="form-control" name='nom' onChange={onChangehandle} />
                      </div>
                      <span className="help-block">Ajoutez nom</span>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="col-md-3 col-xs-12 control-label">Prenom</label>
                    <div className="col-md-6 col-xs-12">
                      <div className="input-group">
                        <span className="input-group-addon"><span className="fa fa-pencil" /></span>
                        <input type="text" className="form-control" name='prenom' onChange={onChangehandle} />
                      </div>
                      <span className="help-block">Ajoutez prenom</span>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="col-md-3 col-xs-12 control-label">numéro de téléphone</label>
                    <div className="col-md-6 col-xs-12">
                      <div className="input-group">
                        <span className="input-group-addon"><span className="fa fa-pencil" /></span>
                        <input type="text" className="form-control" name='numero_tel' onChange={onChangehandle} />
                      </div>
                      <span className="help-block">Ajoutez numéro de téléphone</span>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="col-md-3 col-xs-12 control-label">Description</label>
                    <div className="col-md-6 col-xs-12">
                      <div className="input-group">
                        <span className="input-group-addon"><span className="fa fa-pencil" /></span>
                        <input type="text" className="form-control" name='description' onChange={onChangehandle} />
                      </div>
                      <span className="help-block">Ajoutez Description</span>
                    </div>
                  </div>
                  <div className="form-group" >
                    <label className="col-md-3 col-xs-12 control-label">Matières</label>
                    <div className="col-md-6 col-xs-12">
                      <div className="input-group">
                        <Select styles={{ width: "100%" }}
                          placeholder="Choisissez une matiere"
                          options={matiers}
                          onChange={getMatiere} />
                      </div>
                      <span className="help-block">Ajoutez matières</span>
                    </div>
                  </div>



                  <div className='group-select' style={{
                    display:"flex",
                    justifyContent:"center",
                    paddingBottom:"90px"
                  }}>
                    <div className="form-group" >


                      <div className='col-sm-12 d-flex aligne-items-center '  >
                        <div className="col-md-3 col-md-12 " style={{ padding: 5 }}>
                          <div className="input-group">
                            <Select styles={{ width: "100%" }}
                              options={niveaux}
                               onChange={getNiveau} 
                              placeholder="Choisissez un niveau"
                            />
                          </div>
                        </div>

                        <div className="col-md-3 col-md-12" style={{ padding: 5 }}>
                          <div className="input-group">
                            <Select styles={{ width: "100%" }}
                              options={sections}
                              onChange={getSection} 
                              placeholder="Choisissez une section"
                            />
                          </div>
                        </div>
                        <div className="col-md-3 col-md-12" style={{ padding: 5 }}>
                          <div className="input-group">
                            <Select styles={{ width: "100%" }}
                              options={listClasses}
                              isMulti
                               onChange={getClasses} 
                              placeholder="Choisissez des classes"
                            />
                          </div>
                        </div>
                      </div>







                    </div>
                  </div>


                </div>
                <div className="panel-footer">
                  <Link to="/getallenseignant" className="btn btn-primary">Listes d'Enseignants</Link>
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

export default Addenseignants