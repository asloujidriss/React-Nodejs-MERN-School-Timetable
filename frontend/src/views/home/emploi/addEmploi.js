import React, { useEffect, useState } from "react";
import EmploiServices from "../../../services/emploiService";
import classeServices from "../../../services/ClasseService";
import enseignantServices from "../../../services/enseignantServices";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const AddEmploi = () => {
  const navigate = useNavigate();

  const [classes, setClasses] = useState([]);
  const [enseignant, setEnseignant] = useState([]);
  const [indexs, setindexs] = useState([]);

  const [data, setData] = useState({
    AnneeScolaire: "",
    enseignant: "",
    classe: [],
  });
  // get enseignant
  const GetAll = () => {
    enseignantServices
      .getAll()
      .then((res) => {
        setEnseignant(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    GetAll();

    for (let index = 1; index < 59; index++) {
      data.classe.push({ name: "", section: "", niveau: "" });
    }

    setData(data);
  }, []);

  //Get classe

  const GetAllC = () => {
    classeServices
      .getAllC()
      .then((res) => {
        setClasses(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    GetAllC();
  }, []);

  //add emploi
  const onChangehandle = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const onChangehandleclasses = (e, i) => {
    console.log(e.target.value);
    data.classe[i] = {
      name: e.target.value,
      section: "",
      niveau: "",
    };
    setData(data);
  };
  const onSubmithandler = (e) => {
    e.preventDefault();

    console.log("data after", data);
    Swal.fire({
      title: "Do you want to save the changes?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        navigate(`/`);
        EmploiServices.create(data)
          .then((res) => {
            console.log(res);

            setData(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
        Swal.fire("Saved!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  };
  //finaddemploi

  return (
    <div className="container mt-3" style={{ marginTop: "3rem" }}>
      <h1>Emploi du temps</h1>
      <h2>Nouveau emploi du temps </h2>

      <div className="row mt-5">
        <div className="col-3 ">
          <h6>enseignant</h6>
          <select
            className="form-select"
            name="enseignant"
            onChange={onChangehandle}
          >
            <option selected disabled value="">
              -- Choix --
            </option>
            {enseignant.map((item) => {
              return (
                <option key={item._id} value={item._id}>
                  {item.nom} {item.prenom}
                </option>
              );
            })}
          </select>
        </div>

        <div className="col-3 ">
          <h6>Annee Scolaire</h6>
          <select
            className="form-select"
            name="AnneeScolaire"
            onChange={onChangehandle}
          >
            <option selected disabled>
              {" "}
              -- Choix --
            </option>
            <option>2021/2022</option>
          </select>
        </div>
        <div className="col-4 mt-4 ">
          <button
            onClick={onSubmithandler}
            type="submit"
            class="btn btn-success"
          >
            Ajouter l'Emploi du temps{" "}
          </button>
        </div>
      </div>

      <table class="table table-bordered table-dark mt-5">
        <thead>
          <tr>
            <th
              scope="col"
              style={{ backgroundColor: " #212529", color: "white" }}
            >
              Heures/ Jours
            </th>
            <th
              scope="col"
              style={{ backgroundColor: " #212529", color: "white" }}
            >
              Lundi
            </th>
            <th
              scope="col"
              style={{ backgroundColor: " #212529", color: "white" }}
            >
              Mardi
            </th>
            <th
              scope="col"
              style={{ backgroundColor: " #212529", color: "white" }}
            >
              Mercredi
            </th>
            <th
              scope="col"
              style={{ backgroundColor: " #212529", color: "white" }}
            >
              Jeudi
            </th>
            <th
              scope="col"
              style={{ backgroundColor: " #212529", color: "white" }}
            >
              Vendredi
            </th>
            <th
              scope="col"
              style={{ backgroundColor: " #212529", color: "white" }}
            >
              Samedi
            </th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <th scope="row">08H à 09H</th>
            <td>
              <select
                className="form-select"
                name="classe"
                onChange={(e) => onChangehandleclasses(e, 0)}
              >
                <option value="">classe</option>
                {classes.map((item) => {
                  return (
                    <option key={item._id} value={item.name +" " + item.niveau+" " + item.section}>
                      {item.niveau} {item.name} {item.section}
                    </option>
                  );
                })}
              </select>
            </td>
            <td>
              <select
                className="form-select"
                name="classe"
                onChange={(e) => onChangehandleclasses(e, 1)}
              >
                <option value="">classe</option>
                {classes.map((item) => {
                  return (
                    <option key={item._id} value={item.name +" " + item.niveau+" " + item.section}>
                      {item.niveau} {item.name} {item.section}
                    </option>
                  );
                })}
              </select>
            </td>
            <td>
              <select
                className="form-select"
                name="classe"
                onChange={(e) => onChangehandleclasses(e, 2)}
              >
                <option value="">classe</option>
                {classes.map((item) => {
                  return (
                    <option key={item._id} value={item.name +" " + item.niveau+" " + item.section}>
                      {item.niveau} {item.name} {item.section}
                    </option>
                  );
                })}
              </select>
            </td>
            <td>
              <select
                className="form-select"
                name="classe"
                onChange={(e) => onChangehandleclasses(e, 3)}
              >
                <option value="">classe</option>
                {classes.map((item) => {
                  return (
                    <option key={item._id} value={item.name +" " + item.niveau+" " + item.section}>
                      {item.niveau} {item.name} {item.section}
                    </option>
                  );
                })}
              </select>
            </td>
            <td>
              <select
                className="form-select"
                name="classe"
                onChange={(e) => onChangehandleclasses(e, 4)}
              >
                <option value="">classe</option>
                {classes.map((item) => {
                  return (
                    <option key={item._id} value={item.name +" " + item.niveau+" " + item.section}>
                      {item.niveau} {item.name} {item.section}
                    </option>
                  );
                })}
              </select>
            </td>
            <td>
              <select
                className="form-select"
                name="classe"
                onChange={(e) => onChangehandleclasses(e, 5)}
              >
                <option value="">classe</option>
                {classes.map((item) => {
                  return (
                    <option key={item._id} value={item.name +" " + item.niveau+" " + item.section}>
                      {item.niveau} {item.name} {item.section}
                    </option>
                  );
                })}
              </select>
            </td>
          </tr>
          <tr>
            <th>09H à 10H</th>
            <td>
              <select
                className="form-select"
                name="classe"
                onChange={(e) => onChangehandleclasses(e, 6)}
              >
                <option value="">classe</option>
                {classes.map((item) => {
                  return (
                    <option key={item._id} value={item.name +" " + item.niveau+" " + item.section}>
                      {item.niveau} {item.name} {item.section}
                    </option>
                  );
                })}
              </select>
            </td>
            <td>
              <select
                className="form-select"
                name="classe"
                onChange={(e) => onChangehandleclasses(e, 7)}
              >
                <option value="">classe</option>
                {classes.map((item) => {
                  return (
                    <option key={item._id} value={item.name +" " + item.niveau+" " + item.section}>
                      {item.niveau} {item.name} {item.section}
                    </option>
                  );
                })}
              </select>
            </td>
            <td>
              <select
                className="form-select"
                name="classe"
                onChange={(e) => onChangehandleclasses(e, 8)}
              >
                <option value="">classe</option>
                {classes.map((item) => {
                  return (
                    <option key={item._id} value={item.name +" " + item.niveau+" " + item.section}>
                      {item.niveau} {item.name} {item.section}
                    </option>
                  );
                })}
              </select>
            </td>
            <td>
              <select
                className="form-select"
                name="classe"
                onChange={(e) => onChangehandleclasses(e, 9)}
              >
                <option value="">classe</option>
                {classes.map((item) => {
                  return (
                    <option key={item._id} value={item.name +" " + item.niveau+" " + item.section}>
                      {item.niveau} {item.name} {item.section}
                    </option>
                  );
                })}
              </select>
            </td>
            <td>
              <select
                className="form-select"
                name="classe"
                onChange={(e) => onChangehandleclasses(e, 10)}
              >
                <option value="">classe</option>
                {classes.map((item) => {
                  return (
                    <option key={item._id} value={item.name +" " + item.niveau+" " + item.section}>
                      {item.niveau} {item.name} {item.section}
                    </option>
                  );
                })}
              </select>
            </td>
            <td>
              <select
                className="form-select"
                name="classe"
                onChange={(e) => onChangehandleclasses(e, 11)}
              >
                <option value="">classe</option>
                {classes.map((item) => {
                  return (
                    <option key={item._id} value={item.name +" " + item.niveau+" " + item.section}>
                      {item.niveau} {item.name} {item.section}
                    </option>
                  );
                })}
              </select>
            </td>
          </tr>
          <tr>
            <th> 10H à 11H</th>

            <td>
              <select
                className="form-select"
                name="classe"
                onChange={(e) => onChangehandleclasses(e, 12)}
              >
                <option value="">classe</option>
                {classes.map((item) => {
                  return (
                    <option key={item._id} value={item.name +" " + item.niveau+" " + item.section}>
                      {item.niveau} {item.name} {item.section}
                    </option>
                  );
                })}
              </select>
            </td>
            <td>
              <select
                className="form-select"
                name="classe"
                onChange={(e) => onChangehandleclasses(e, 13)}
              >
                <option value="">classe</option>
                {classes.map((item) => {
                  return (
                    <option key={item._id} value={item.name +" " + item.niveau+" " + item.section}>
                      {item.niveau} {item.name} {item.section}
                    </option>
                  );
                })}
              </select>
            </td>
            <td>
              <select
                className="form-select"
                name="classe"
                onChange={(e) => onChangehandleclasses(e, 14)}
              >
                <option value="">classe</option>
                {classes.map((item) => {
                  return (
                    <option key={item._id} value={item.name +" " + item.niveau+" " + item.section}>
                      {item.niveau} {item.name} {item.section}
                    </option>
                  );
                })}
              </select>
            </td>
            <td>
              <select
                className="form-select"
                name="classe"
                onChange={(e) => onChangehandleclasses(e, 15)}
              >
                <option value="">classe</option>
                {classes.map((item) => {
                  return (
                    <option key={item._id} value={item.name +" " + item.niveau+" " + item.section}>
                      {item.niveau} {item.name} {item.section}
                    </option>
                  );
                })}
              </select>
            </td>
            <td>
              <select
                className="form-select"
                name="classe"
                onChange={(e) => onChangehandleclasses(e, 16)}
              >
                <option value="">classe</option>
                {classes.map((item) => {
                  return (
                    <option key={item._id} value={item.name +" " + item.niveau+" " + item.section}>
                      {item.niveau} {item.name} {item.section}
                    </option>
                  );
                })}
              </select>
            </td>
            <td>
              <select
                className="form-select"
                name="classe"
                onChange={(e) => onChangehandleclasses(e, 17)}
              >
                <option value="">classe</option>
                {classes.map((item) => {
                  return (
                    <option key={item._id} value={item.name +" " + item.niveau+" " + item.section}>
                      {item.niveau} {item.name} {item.section}
                    </option>
                  );
                })}
              </select>
            </td>
          </tr>
          <tr>
            <th>11H à 12H</th>
            <td>
              <select
                className="form-select"
                name="classe"
                onChange={(e) => onChangehandleclasses(e, 18)}
              >
                <option value="">classe</option>
                {classes.map((item) => {
                  return (
                    <option key={item._id} value={item.name +" " + item.niveau+" " + item.section}>
                      {item.niveau} {item.name} {item.section}
                    </option>
                  );
                })}
              </select>
            </td>
            <td>
              <select
                className="form-select"
                name="classe"
                onChange={(e) => onChangehandleclasses(e, 19)}
              >
                <option value="">classe</option>
                {classes.map((item) => {
                  return (
                    <option key={item._id} value={item.name +" " + item.niveau+" " + item.section}>
                      {item.niveau} {item.name} {item.section}
                    </option>
                  );
                })}
              </select>
            </td>
            <td>
              <select
                className="form-select"
                name="classe"
                onChange={(e) => onChangehandleclasses(e, 20)}
              >
                <option value="">classe</option>
                {classes.map((item) => {
                  return (
                    <option key={item._id} value={item.name +" " + item.niveau+" " + item.section}>
                      {item.niveau} {item.name} {item.section}
                    </option>
                  );
                })}
              </select>
            </td>
            <td>
              <select
                className="form-select"
                name="classe"
                onChange={(e) => onChangehandleclasses(e, 21)}
              >
                <option value="">classe</option>
                {classes.map((item) => {
                  return (
                    <option key={item._id} value={item.name +" " + item.niveau+" " + item.section}>
                      {item.niveau} {item.name} {item.section}
                    </option>
                  );
                })}
              </select>
            </td>
            <td>
              <select
                className="form-select"
                name="classe"
                onChange={(e) => onChangehandleclasses(e, 22)}
              >
                <option value="">classe</option>
                {classes.map((item) => {
                  return (
                    <option key={item._id} value={item.name +" " + item.niveau+" " + item.section}>
                      {item.niveau} {item.name} {item.section}
                    </option>
                  );
                })}
              </select>
            </td>
            <td>
              <select
                className="form-select"
                name="classe"
                onChange={(e) => onChangehandleclasses(e, 23)}
              >
                <option value="">classe</option>
                {classes.map((item) => {
                  return (
                    <option key={item._id} value={item.name +" " + item.niveau+" " + item.section}>
                      {item.niveau} {item.name} {item.section}
                    </option>
                  );
                })}
              </select>
            </td>
          </tr>
          <tr>
            <th>12H à 13H</th>
            <td>
              <select
                className="form-select"
                name="classe"
                onChange={(e) => onChangehandleclasses(e, 24)}
              >
                <option value="">classe</option>
                {classes.map((item) => {
                  return (
                    <option key={item._id} value={item.name +" " + item.niveau+" " + item.section}>
                      {item.niveau} {item.name} {item.section}
                    </option>
                  );
                })}
              </select>
            </td>
            <td>
              <select
                className="form-select"
                name="classe"
                onChange={(e) => onChangehandleclasses(e, 25)}
              >
                <option value="">classe</option>
                {classes.map((item) => {
                  return (
                    <option key={item._id} value={item.name +" " + item.niveau+" " + item.section}>
                      {item.niveau} {item.name} {item.section}
                    </option>
                  );
                })}
              </select>
            </td>
            <td>
              <select
                className="form-select"
                name="classe"
                onChange={(e) => onChangehandleclasses(e, 26)}
              >
                <option value="">classe</option>
                {classes.map((item) => {
                  return (
                    <option key={item._id} value={item.name +" " + item.niveau+" " + item.section}>
                      {item.niveau} {item.name} {item.section}
                    </option>
                  );
                })}
              </select>
            </td>
            <td>
              <select
                className="form-select"
                name="classe"
                onChange={(e) => onChangehandleclasses(e, 27)}
              >
                <option value="">classe</option>
                {classes.map((item) => {
                  return (
                    <option key={item._id} value={item.name +" " + item.niveau+" " + item.section}>
                      {item.niveau} {item.name} {item.section}
                    </option>
                  );
                })}
              </select>
            </td>
            <td>
              <select
                className="form-select"
                name="classe"
                onChange={(e) => onChangehandleclasses(e, 28)}
              >
                <option value="">classe</option>
                {classes.map((item) => {
                  return (
                    <option key={item._id} value={item.name +" " + item.niveau+" " + item.section}>
                      {item.niveau} {item.name} {item.section}
                    </option>
                  );
                })}
              </select>
            </td>
            <td>
              <select
                className="form-select"
                name="classe"
                onChange={(e) => onChangehandleclasses(e, 29)}
              >
                <option value="">classe</option>
                {classes.map((item) => {
                  return (
                    <option key={item._id} value={item.name +" " + item.niveau+" " + item.section}>
                      {item.niveau} {item.name} {item.section}
                    </option>
                  );
                })}
              </select>
            </td>
          </tr>
          <tr>
            <th>13H à 14H</th>
            <td>
              <select
                className="form-select"
                name="classe"
                onChange={(e) => onChangehandleclasses(e, 30)}
              >
                <option value="">classe</option>
                {classes.map((item) => {
                  return (
                    <option key={item._id} value={item.name +" " + item.niveau+" " + item.section}>
                      {item.niveau} {item.name} {item.section}
                    </option>
                  );
                })}
              </select>
            </td>
            <td>
              <select
                className="form-select"
                name="classe"
                onChange={(e) => onChangehandleclasses(e, 31)}
              >
                <option value="">classe</option>
                {classes.map((item) => {
                  return (
                    <option key={item._id} value={item.name +" " + item.niveau+" " + item.section}>
                      {item.niveau} {item.name} {item.section}
                    </option>
                  );
                })}
              </select>
            </td>
            <td>
              <select
                className="form-select"
                name="classe"
                onChange={(e) => onChangehandleclasses(e, 32)}
              >
                <option value="">classe</option>
                {classes.map((item) => {
                  return (
                    <option key={item._id} value={item.name +" " + item.niveau+" " + item.section}>
                      {item.niveau} {item.name} {item.section}
                    </option>
                  );
                })}
              </select>
            </td>
            <td>
              <select
                className="form-select"
                name="classe"
                onChange={(e) => onChangehandleclasses(e, 33)}
              >
                <option value="">classe</option>
                {classes.map((item) => {
                  return (
                    <option key={item._id} value={item.name +" " + item.niveau+" " + item.section}>
                      {item.niveau} {item.name} {item.section}
                    </option>
                  );
                })}
              </select>
            </td>
            <td>
              <select
                className="form-select"
                name="classe"
                onChange={(e) => onChangehandleclasses(e, 34)}
              >
                <option value="">classe</option>
                {classes.map((item) => {
                  return (
                    <option key={item._id} value={item.name +" " + item.niveau+" " + item.section}>
                      {item.niveau} {item.name} {item.section}
                    </option>
                  );
                })}
              </select>
            </td>
            <td>
              <select
                className="form-select"
                name="classe"
                onChange={(e) => onChangehandleclasses(e, 35)}
              >
                <option value="">classe</option>
                {classes.map((item) => {
                  return (
                    <option key={item._id} value={item.name +" " + item.niveau+" " + item.section}>
                      {item.niveau} {item.name} {item.section}
                    </option>
                  );
                })}
              </select>
            </td>
          </tr>
          <tr>
            <th>14H à 15H</th>

            <td>
              <select
                className="form-select"
                name="classe"
                onChange={(e) => onChangehandleclasses(e, 36)}
              >
                <option value="">classe</option>
                {classes.map((item) => {
                  return (
                    <option key={item._id} value={item.name +" " + item.niveau+" " + item.section}>
                      {item.niveau} {item.name} {item.section}
                    </option>
                  );
                })}
              </select>
            </td>
            <td>
              <select
                className="form-select"
                name="classe"
                onChange={(e) => onChangehandleclasses(e, 37)}
              >
                <option value="">classe</option>
                {classes.map((item) => {
                  return (
                    <option key={item._id} value={item.name +" " + item.niveau+" " + item.section}>
                      {item.niveau} {item.name} {item.section}
                    </option>
                  );
                })}
              </select>
            </td>
            <td>
              <select
                className="form-select"
                name="classe"
                onChange={(e) => onChangehandleclasses(e, 38)}
              >
                <option value="">classe</option>
                {classes.map((item) => {
                  return (
                    <option key={item._id} value={item.name +" " + item.niveau+" " + item.section}>
                      {item.niveau} {item.name} {item.section}
                    </option>
                  );
                })}
              </select>
            </td>
            <td>
              <select
                className="form-select"
                name="classe"
                onChange={(e) => onChangehandleclasses(e, 39)}
              >
                <option value="">classe</option>
                {classes.map((item) => {
                  return (
                    <option key={item._id} value={item.name +" " + item.niveau+" " + item.section}>
                      {item.niveau} {item.name} {item.section}
                    </option>
                  );
                })}
              </select>
            </td>
            <td>
              <select
                className="form-select"
                name="classe"
                onChange={(e) => onChangehandleclasses(e, 40)}
              >
                <option value="">classe</option>
                {classes.map((item) => {
                  return (
                    <option key={item._id} value={item.name +" " + item.niveau+" " + item.section}>
                      {item.niveau} {item.name} {item.section}
                    </option>
                  );
                })}
              </select>
            </td>
            <td>
              <select
                className="form-select"
                name="classe"
                onChange={(e) => onChangehandleclasses(e, 41)}
              >
                <option value="">classe</option>
                {classes.map((item) => {
                  return (
                    <option key={item._id} value={item.name +" " + item.niveau+" " + item.section}>
                      {item.niveau} {item.name} {item.section}
                    </option>
                  );
                })}
              </select>
            </td>
          </tr>
          <tr>
            <th>15H à 16H</th>
            <td>
              <select
                className="form-select"
                name="classe"
                onChange={(e) => onChangehandleclasses(e, 42)}
              >
                <option value="">classe</option>
                {classes.map((item) => {
                  return (
                    <option key={item._id} value={item.name +" " + item.niveau+" " + item.section}>
                      {item.niveau} {item.name} {item.section}
                    </option>
                  );
                })}
              </select>
            </td>
            <td>
              <select
                className="form-select"
                name="classe"
                onChange={(e) => onChangehandleclasses(e, 43)}
              >
                <option value="">classe</option>
                {classes.map((item) => {
                  return (
                    <option key={item._id} value={item.name +" " + item.niveau+" " + item.section}>
                      {item.niveau} {item.name} {item.section}
                    </option>
                  );
                })}
              </select>
            </td>
            <td>
              <select
                className="form-select"
                name="classe"
                onChange={(e) => onChangehandleclasses(e, 44)}
              >
                <option value="">classe</option>
                {classes.map((item) => {
                  return (
                    <option key={item._id} value={item.name +" " + item.niveau+" " + item.section}>
                      {item.niveau} {item.name} {item.section}
                    </option>
                  );
                })}
              </select>
            </td>
            <td>
              <select
                className="form-select"
                name="classe"
                onChange={(e) => onChangehandleclasses(e, 45)}
              >
                <option value="">classe</option>
                {classes.map((item) => {
                  return (
                    <option key={item._id} value={item.name +" " + item.niveau+" " + item.section}>
                      {item.niveau} {item.name} {item.section}
                    </option>
                  );
                })}
              </select>
            </td>
            <td>
              <select
                className="form-select"
                name="classe"
                onChange={(e) => onChangehandleclasses(e, 46)}
              >
                <option value="">classe</option>
                {classes.map((item) => {
                  return (
                    <option key={item._id} value={item.name +" " + item.niveau+" " + item.section}>
                      {item.niveau} {item.name} {item.section}
                    </option>
                  );
                })}
              </select>
            </td>
            <td>
              <select
                className="form-select"
                name="classe"
                onChange={(e) => onChangehandleclasses(e, 47)}
              >
                <option value="">classe</option>
                {classes.map((item) => {
                  return (
                    <option key={item._id} value={item.name +" " + item.niveau+" " + item.section}>
                      {item.niveau} {item.name} {item.section}
                    </option>
                  );
                })}
              </select>
            </td>
          </tr>
          <tr>
            <th>16H à 17H</th>
            <td>
              <select
                className="form-select"
                name="classe"
                onChange={(e) => onChangehandleclasses(e, 48)}
              >
                <option value="">classe</option>
                {classes.map((item) => {
                  return (
                    <option key={item._id} value={item.name +" " + item.niveau+" " + item.section}>
                      {item.niveau} {item.name} {item.section}
                    </option>
                  );
                })}
              </select>
            </td>
            <td>
              <select
                className="form-select"
                name="classe"
                onChange={(e) => onChangehandleclasses(e, 49)}
              >
                <option value="">classe</option>
                {classes.map((item) => {
                  return (
                    <option key={item._id} value={item.name +" " + item.niveau+" " + item.section}>
                      {item.niveau} {item.name} {item.section}
                    </option>
                  );
                })}
              </select>
            </td>
            <td>
              <select
                className="form-select"
                name="classe"
                onChange={(e) => onChangehandleclasses(e, 50)}
              >
                <option value="">classe</option>
                {classes.map((item) => {
                  return (
                    <option key={item._id} value={item.name +" " + item.niveau+" " + item.section}>
                      {item.niveau} {item.name} {item.section}
                    </option>
                  );
                })}
              </select>
            </td>
            <td>
              <select
                className="form-select"
                name="classe"
                onChange={(e) => onChangehandleclasses(e, 51)}
              >
                <option value="">classe</option>
                {classes.map((item) => {
                  return (
                    <option key={item._id} value={item.name +" " + item.niveau+" " + item.section}>
                      {item.niveau} {item.name} {item.section}
                    </option>
                  );
                })}
              </select>
            </td>
            <td>
              <select
                className="form-select"
                name="classe"
                onChange={(e) => onChangehandleclasses(e, 52)}
              >
                <option value="">classe</option>
                {classes.map((item) => {
                  return (
                    <option key={item._id} value={item.name +" " + item.niveau+" " + item.section}>
                      {item.niveau} {item.name} {item.section}
                    </option>
                  );
                })}
              </select>
            </td>
            <td>
              <select
                className="form-select"
                name="classe"
                onChange={(e) => onChangehandleclasses(e, 53)}
              >
                <option value="">classe</option>
                {classes.map((item) => {
                  return (
                    <option key={item._id} value={item.name +" " + item.niveau+" " + item.section}>
                      {item.niveau} {item.name} {item.section}
                    </option>
                  );
                })}
              </select>
            </td>
          </tr>
          <tr>
            <th>17H à 18H</th>
            <td>
              <select
                className="form-select"
                name="classe"
                onChange={(e) => onChangehandleclasses(e, 54)}
              >
                <option value="">classe</option>
                {classes.map((item) => {
                  return (
                    <option key={item._id} value={item.name +" " + item.niveau+" " + item.section}>
                      {item.niveau} {item.name} {item.section}
                    </option>
                  );
                })}
              </select>
            </td>
            <td>
              <select
                className="form-select"
                name="classe"
                onChange={(e) => onChangehandleclasses(e, 55)}
              >
                <option value="">classe</option>
                {classes.map((item) => {
                  return (
                    <option key={item._id} value={item.name +" " + item.niveau+" " + item.section}>
                      {item.niveau} {item.name} {item.section}
                    </option>
                  );
                })}
              </select>
            </td>
            <td>
              <select
                className="form-select"
                name="classe"
                onChange={(e) => onChangehandleclasses(e, 56)}
              >
                <option value="">classe</option>
                {classes.map((item) => {
                  return (
                    <option key={item._id} value={item.name +" " + item.niveau+" " + item.section}>
                      {item.niveau} {item.name} {item.section}
                    </option>
                  );
                })}
              </select>
            </td>
            <td>
              <select
                className="form-select"
                name="classe"
                onChange={(e) => onChangehandleclasses(e, 57)}
              >
                <option value="">classe</option>
                {classes.map((item) => {
                  return (
                    <option key={item._id} value={item.name +" " + item.niveau+" " + item.section}>
                      {item.niveau} {item.name} {item.section}
                    </option>
                  );
                })}
              </select>
            </td>
            <td>
              <select
                className="form-select"
                name="classe"
                onChange={(e) => onChangehandleclasses(e, 58)}
              >
                <option value="">classe</option>
                {classes.map((item) => {
                  return (
                    <option key={item._id} value={item.name +" " + item.niveau+" " + item.section}>
                      {item.niveau} {item.name} {item.section}
                    </option>
                  );
                })}
              </select>
            </td>
            <td>
              <select
                className="form-select"
                name="classe"
                onChange={(e) => onChangehandleclasses(e, 59)}
              >
                <option value="">classe</option>
                {classes.map((item) => {
                  return (
                    <option key={item._id} value={item.name +" " + item.niveau+" " + item.section}>
                      {item.niveau} {item.name} {item.section}
                    </option>
                  );
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

export default AddEmploi;
