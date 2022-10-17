import React, { useEffect, useState } from "react";
import enseignantServices from '../../../services/enseignantServices'
import classeServices from '../../../services/ClasseService'

const UpdateEmploi = () => {

  const [enseignant, setenseignant] = useState([])
  const [classes, setclasses] = useState([])

  const GetAll = () => {

    enseignantServices.getAll().then(res => {

      setenseignant(res.data.data)
    }).catch(err => {
      console.log(err)
    })

  }

  useEffect(() => {
    GetAll()
  }, [])

  //Get classe

  const GetAllC = () => {

    classeServices.getAllC().then(res => {
      
      setclasses(res.data.data)
    }).catch(err => {
      console.log(err)
    })

  }

  useEffect(() => {
    GetAllC()
  }, [])

  return (
    <div className="container mt-3" style={{ marginTop: "3rem" }}>
      <h1 >Emploi du temps</h1>
      <h2>Nouveau emploi du temps </h2>
      <div className="row mt-5">

        <div className="col-3 ">
          <h6>enseignant</h6>
         
              <select className="form-select" aria-label="Default select example">
                <option selected disabled>-- Choix --</option>
                {enseignant.map((iteme, index) => {
            return (
                <option value={1}>{iteme.nom} {iteme.prenom}</option>

                )
              })}
              </select>
        </div>

        <div className="col-3 ">
          <h6>AnneeScolaire</h6>
          <select className="form-select" aria-label="Default select example">

            <option selected disabled> -- Choix --</option>
            <option value={1}>2021/2022</option>

          </select></div>
        <div className="col-4 mt-4 ">
          <button type="button" class="btn btn-success">Ajouter Emploi du temps </button>
        </div>
      </div>





      <table class="table table-bordered table-dark mt-5">
        <thead>
          <tr>
            <th scope="col">Heures/ Jours</th>
            <th scope="col">Lundi</th>
            <th scope="col">Mardi</th>
            <th scope="col">Mercredi</th>
            <th scope="col">Jeudi</th>
            <th scope="col">Vendredi</th>
            <th scope="col">Samedi</th>
          </tr>
        </thead>


        <tbody>
          <tr>
            <th scope="row">08h à 09h</th>
            <td>
              <select className="form-select" aria-label="Default select example">
                <option selected disabled>Classe</option>
                {classes.map((item, index) => {
                  return (
                    <option value={1}>{item.niveau} {item.name} {item.section}</option>
                  )
                })}

              </select>
            </td>
            <td>
              <select className="form-select" aria-label="Default select example">
                <option selected disabled>Classe</option>
                {classes.map((item, index) => {
                  return (
                    <option value={1}>{item.niveau} {item.name} {item.section}</option>
                  )
                })}

              </select>
            </td>
             <td>
              <select className="form-select" aria-label="Default select example">
                <option selected disabled>Classe</option>
                {classes.map((item, index) => {
                  return (
                    <option value={1}>{item.niveau} {item.name} {item.section}</option>
                  )
                })}

              </select>
            </td>
             <td>
              <select className="form-select" aria-label="Default select example">
                <option selected disabled>Classe</option>
                {classes.map((item, index) => {
                  return (
                    <option value={1}>{item.niveau} {item.name} {item.section}</option>
                  )
                })}

              </select>
            </td>
             <td>
              <select className="form-select" aria-label="Default select example">
                <option selected disabled>Classe</option>
                {classes.map((item, index) => {
                  return (
                    <option value={1}>{item.niveau} {item.name} {item.section}</option>
                  )
                })}

              </select>
            </td>
             <td>
              <select className="form-select" aria-label="Default select example">
                <option selected disabled>Classe</option>
                {classes.map((item, index) => {
                  return (
                    <option value={1}>{item.niveau} {item.name} {item.section}</option>
                  )
                })}

              </select>
            </td>
          </tr>
          <tr>
            <th  >09h à 10h</th>
             <td>
              <select className="form-select" aria-label="Default select example">
                <option selected disabled>Classe</option>
                {classes.map((item, index) => {
                  return (
                    <option value={1}>{item.niveau} {item.name} {item.section}</option>
                  )
                })}

              </select>
            </td>
             <td>
              <select className="form-select" aria-label="Default select example">
                <option selected disabled>Classe</option>
                {classes.map((item, index) => {
                  return (
                    <option value={1}>{item.niveau} {item.name} {item.section}</option>
                  )
                })}

              </select>
            </td>
             <td>
              <select className="form-select" aria-label="Default select example">
                <option selected disabled>Classe</option>
                {classes.map((item, index) => {
                  return (
                    <option value={1}>{item.niveau} {item.name} {item.section}</option>
                  )
                })}

              </select>
            </td>
             <td>
              <select className="form-select" aria-label="Default select example">
                <option selected disabled>Classe</option>
                {classes.map((item, index) => {
                  return (
                    <option value={1}>{item.niveau} {item.name} {item.section}</option>
                  )
                })}

              </select>
            </td>
             <td>
              <select className="form-select" aria-label="Default select example">
                <option selected disabled>Classe</option>
                {classes.map((item, index) => {
                  return (
                    <option value={1}>{item.niveau} {item.name} {item.section}</option>
                  )
                })}

              </select>
            </td>
             <td>
              <select className="form-select" aria-label="Default select example">
                <option selected disabled>Classe</option>
                {classes.map((item, index) => {
                  return (
                    <option value={1}>{item.niveau} {item.name} {item.section}</option>
                  )
                })}

              </select>
            </td>
          </tr>
          <tr>
            <th  > 10h à 11h</th>

             <td>
              <select className="form-select" aria-label="Default select example">
                <option selected disabled>Classe</option>
                {classes.map((item, index) => {
                  return (
                    <option value={1}>{item.niveau} {item.name} {item.section}</option>
                  )
                })}

              </select>
            </td>
             <td>
              <select className="form-select" aria-label="Default select example">
                <option selected disabled>Classe</option>
                {classes.map((item, index) => {
                  return (
                    <option value={1}>{item.niveau} {item.name} {item.section}</option>
                  )
                })}

              </select>
            </td>
             <td>
              <select className="form-select" aria-label="Default select example">
                <option selected disabled>Classe</option>
                {classes.map((item, index) => {
                  return (
                    <option value={1}>{item.niveau} {item.name} {item.section}</option>
                  )
                })}

              </select>
            </td>
             <td>
              <select className="form-select" aria-label="Default select example">
                <option selected disabled>Classe</option>
                {classes.map((item, index) => {
                  return (
                    <option value={1}>{item.niveau} {item.name} {item.section}</option>
                  )
                })}

              </select>
            </td>
             <td>
              <select className="form-select" aria-label="Default select example">
                <option selected disabled>Classe</option>
                {classes.map((item, index) => {
                  return (
                    <option value={1}>{item.niveau} {item.name} {item.section}</option>
                  )
                })}

              </select>
            </td>
             <td>
              <select className="form-select" aria-label="Default select example">
                <option selected disabled>Classe</option>
                {classes.map((item, index) => {
                  return (
                    <option value={1}>{item.niveau} {item.name} {item.section}</option>
                  )
                })}

              </select>
            </td>
          </tr>
          <tr>
            <th  >11h à 12h</th>
             <td>
              <select className="form-select" aria-label="Default select example">
                <option selected disabled>Classe</option>
                {classes.map((item, index) => {
                  return (
                    <option value={1}>{item.niveau} {item.name} {item.section}</option>
                  )
                })}

              </select>
            </td>
             <td>
              <select className="form-select" aria-label="Default select example">
                <option selected disabled>Classe</option>
                {classes.map((item, index) => {
                  return (
                    <option value={1}>{item.niveau} {item.name} {item.section}</option>
                  )
                })}

              </select>
            </td>
             <td>
              <select className="form-select" aria-label="Default select example">
                <option selected disabled>Classe</option>
                {classes.map((item, index) => {
                  return (
                    <option value={1}>{item.niveau} {item.name} {item.section}</option>
                  )
                })}

              </select>
            </td>
             <td>
              <select className="form-select" aria-label="Default select example">
                <option selected disabled>Classe</option>
                {classes.map((item, index) => {
                  return (
                    <option value={1}>{item.niveau} {item.name} {item.section}</option>
                  )
                })}

              </select>
            </td>
             <td>
              <select className="form-select" aria-label="Default select example">
                <option selected disabled>Classe</option>
                {classes.map((item, index) => {
                  return (
                    <option value={1}>{item.niveau} {item.name} {item.section}</option>
                  )
                })}

              </select>
            </td>
             <td>
              <select className="form-select" aria-label="Default select example">
                <option selected disabled>Classe</option>
                {classes.map((item, index) => {
                  return (
                    <option value={1}>{item.niveau} {item.name} {item.section}</option>
                  )
                })}

              </select>
            </td>
          </tr>


          <tr>
            <th  >14h à 15h</th>

             <td>
              <select className="form-select" aria-label="Default select example">
                <option selected disabled>Classe</option>
                {classes.map((item, index) => {
                  return (
                    <option value={1}>{item.niveau} {item.name} {item.section}</option>
                  )
                })}

              </select>
            </td>
             <td>
              <select className="form-select" aria-label="Default select example">
                <option selected disabled>Classe</option>
                {classes.map((item, index) => {
                  return (
                    <option value={1}>{item.niveau} {item.name} {item.section}</option>
                  )
                })}

              </select>
            </td>
             <td>
              <select className="form-select" aria-label="Default select example">
                <option selected disabled>Classe</option>
                {classes.map((item, index) => {
                  return (
                    <option value={1}>{item.niveau} {item.name} {item.section}</option>
                  )
                })}

              </select>
            </td>
             <td>
              <select className="form-select" aria-label="Default select example">
                <option selected disabled>Classe</option>
                {classes.map((item, index) => {
                  return (
                    <option value={1}>{item.niveau} {item.name} {item.section}</option>
                  )
                })}

              </select>
            </td>
             <td>
              <select className="form-select" aria-label="Default select example">
                <option selected disabled>Classe</option>
                {classes.map((item, index) => {
                  return (
                    <option value={1}>{item.niveau} {item.name} {item.section}</option>
                  )
                })}

              </select>
            </td>
             <td>
              <select className="form-select" aria-label="Default select example">
                <option selected disabled>Classe</option>
                {classes.map((item, index) => {
                  return (
                    <option value={1}>{item.niveau} {item.name} {item.section}</option>
                  )
                })}

              </select>
            </td>
          </tr>
          <tr>
            <th  >15h à 16h</th>
             <td>
              <select className="form-select" aria-label="Default select example">
                <option selected disabled>Classe</option>
                {classes.map((item, index) => {
                  return (
                    <option value={1}>{item.niveau} {item.name} {item.section}</option>
                  )
                })}

              </select>
            </td>
             <td>
              <select className="form-select" aria-label="Default select example">
                <option selected disabled>Classe</option>
                {classes.map((item, index) => {
                  return (
                    <option value={1}>{item.niveau} {item.name} {item.section}</option>
                  )
                })}

              </select>
            </td>
             <td>
              <select className="form-select" aria-label="Default select example">
                <option selected disabled>Classe</option>
                {classes.map((item, index) => {
                  return (
                    <option value={1}>{item.niveau} {item.name} {item.section}</option>
                  )
                })}

              </select>
            </td>
             <td>
              <select className="form-select" aria-label="Default select example">
                <option selected disabled>Classe</option>
                {classes.map((item, index) => {
                  return (
                    <option value={1}>{item.niveau} {item.name} {item.section}</option>
                  )
                })}

              </select>
            </td>
             <td>
              <select className="form-select" aria-label="Default select example">
                <option selected disabled>Classe</option>
                {classes.map((item, index) => {
                  return (
                    <option value={1}>{item.niveau} {item.name} {item.section}</option>
                  )
                })}

              </select>
            </td>
             <td>
              <select className="form-select" aria-label="Default select example">
                <option selected disabled>Classe</option>
                {classes.map((item, index) => {
                  return (
                    <option value={1}>{item.niveau} {item.name} {item.section}</option>
                  )
                })}

              </select>
            </td>
          </tr>
          <tr>
            <th  >16h à 17h</th>
             <td>
              <select className="form-select" aria-label="Default select example">
                <option selected disabled>Classe</option>
                {classes.map((item, index) => {
                  return (
                    <option value={1}>{item.niveau} {item.name} {item.section}</option>
                  )
                })}

              </select>
            </td>
             <td>
              <select className="form-select" aria-label="Default select example">
                <option selected disabled>Classe</option>
                {classes.map((item, index) => {
                  return (
                    <option value={1}>{item.niveau} {item.name} {item.section}</option>
                  )
                })}

              </select>
            </td>
             <td>
              <select className="form-select" aria-label="Default select example">
                <option selected disabled>Classe</option>
                {classes.map((item, index) => {
                  return (
                    <option value={1}>{item.niveau} {item.name} {item.section}</option>
                  )
                })}

              </select>
            </td>
             <td>
              <select className="form-select" aria-label="Default select example">
                <option selected disabled>Classe</option>
                {classes.map((item, index) => {
                  return (
                    <option value={1}>{item.niveau} {item.name} {item.section}</option>
                  )
                })}

              </select>
            </td>
             <td>
              <select className="form-select" aria-label="Default select example">
                <option selected disabled>Classe</option>
                {classes.map((item, index) => {
                  return (
                    <option value={1}>{item.niveau} {item.name} {item.section}</option>
                  )
                })}

              </select>
            </td>
             <td>
              <select className="form-select" aria-label="Default select example">
                <option selected disabled>Classe</option>
                {classes.map((item, index) => {
                  return (
                    <option value={1}>{item.niveau} {item.name} {item.section}</option>
                  )
                })}

              </select>
            </td>
          </tr>
          <tr>
            <th  >17h à 18h</th>
             <td>
              <select className="form-select" aria-label="Default select example">
                <option selected disabled>Classe</option>
                {classes.map((item, index) => {
                  return (
                    <option value={1}>{item.niveau} {item.name} {item.section}</option>
                  )
                })}

              </select>
            </td>
             <td>
              <select className="form-select" aria-label="Default select example">
                <option selected disabled>Classe</option>
                {classes.map((item, index) => {
                  return (
                    <option value={1}>{item.niveau} {item.name} {item.section}</option>
                  )
                })}

              </select>
            </td>
             <td>
              <select className="form-select" aria-label="Default select example">
                <option selected disabled>Classe</option>
                {classes.map((item, index) => {
                  return (
                    <option value={1}>{item.niveau} {item.name} {item.section}</option>
                  )
                })}

              </select>
            </td>
             <td>
              <select className="form-select" aria-label="Default select example">
                <option selected disabled>Classe</option>
                {classes.map((item, index) => {
                  return (
                    <option value={1}>{item.niveau} {item.name} {item.section}</option>
                  )
                })}

              </select>
            </td>
             <td>
              <select className="form-select" aria-label="Default select example">
                <option selected disabled>Classe</option>
                {classes.map((item, index) => {
                  return (
                    <option value={1}>{item.niveau} {item.name} {item.section}</option>
                  )
                })}

              </select>
            </td>
             <td>
              <select className="form-select" aria-label="Default select example">
                <option selected disabled>Classe</option>
                {classes.map((item, index) => {
                  return (
                    <option value={1}>{item.niveau} {item.name} {item.section}</option>
                  )
                })}

              </select>
            </td>
          </tr>
        </tbody>


      </table>





      <></>






    </div>

  );
};

export default UpdateEmploi;
