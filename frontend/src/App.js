
import "./App.css";
import Home from "./views/home/home";
import { BrowserRouter, Route, Routes,Navigate } from "react-router-dom";

import Login from './views/login/login'
import Addenseignants from'./views/home/enseignants/AddEnseiganat'
import Addclasse from "./views/home/classe/Addclasse";
import Layout from "./views/home/layout/layout"; 
import Register from "./views/home/Users/Register";
import GetAllUsers from "./views/home/Users/GetAllUsers";
import Updateenseignant from "./views/home/enseignants/UpdateEnseigant";
import GetAllEnseignant from "./views/home/enseignants/GetAllEnseigant";
import GetAllclasse from "./views/home/classe/GetAllClasse";
import Updateclasse from "./views/home/classe/updateclasse";
import GetAlleleve from "./views/home/eleves/GetAllEleve";
import UpdatEleve from "./views/home/eleves/UpdateEleve"
import AddEleve from "./views/home/eleves/AddEleve"
import GetAllAbsence from "./views/home/Absence/GetAllAbsence";
import AddAbsence from "./views/home/Absence/AddAbsence";
import AddEmploi from "./views/home/emploi/addEmploi";
import Enseignant from "./views/home/enseignants";
import UpdateEmploi from "./views/home/emploi/UpdateEmploi";
import GetAllEmploi from "./views/home/emploi/GetAllEmploi";
import GetEnseigant from "./views/home/enseignants/GetidEnseigant";
import Admin from "./views/home/Admin"
import SupAdmin from "./views/home/SupAdmin"
import GetClasse from "./views/home/classe/GetIdClasse";
import Emploi from "./views/home/emploi"
import Liste_classe_enseiganat from "./views/home/liste-classe-enseiganat"
import AbsenceEnseigant from "./views/home/absence_enseiganat"
import liste_Eleve from "./views/home/liste-Eleve"
function App() {

  const PrivateRoute = ({auth : {isAuthenticated}, children})=>{
    return isAuthenticated ? children : <Navigate to="/login"/>;
  }
  
  return (
    <div className="App">
         <BrowserRouter>
      <Routes>
        <Route path="/" element={<PrivateRoute auth={{ isAuthenticated: true }}><Home /></PrivateRoute>}>
          <Route index path="/" element={<Layout />} />
          
          <Route index path="/addenseiganat" element={<Addenseignants />} />
          <Route index path="/updatenseignant/:id" element={<Updateenseignant />} />
          <Route index path="/addClasse" element={<Addclasse />} />
          <Route index path="/getallenseignant" element={<GetAllEnseignant/>} />
          <Route index path="/getAllClasse" element={<GetAllclasse />} />
          <Route index path="/updateclasse/:id" element={<Updateclasse />} />
          <Route index path="/getallEleve" element={<GetAlleleve/>} />
          <Route index path="/updatEleve/:id" element={<UpdatEleve/>} />
          <Route index path="/addEleve" element={<AddEleve/>} />
          <Route index path="/getallAbsence" element={<GetAllAbsence/>} />
          <Route index path="/addAbsence" element={<AddAbsence/>} />
          <Route index path="/addEmploi" element={<AddEmploi/>} />
          <Route index path="/updateEmploi" element={<UpdateEmploi/>} />
          <Route path="/getallusers" element={<GetAllUsers/>} />
          <Route path="/Enseignant" element={<Enseignant/>} />
          <Route path="/SuperA" element={<Enseignant/>} />
          <Route path="/getAllEmploi" element={<GetAllEmploi/>} />
          <Route path="/getidEseignant/:id" element={<GetEnseigant/>} />
          <Route path="/admin" element={<Admin/>} />
          <Route path="/supeadmin" element={<SupAdmin/>} />
          <Route path="/getidclasse/:id" element={<GetClasse/>} />
          <Route path="/emploi" element={<Emploi/>} />
          <Route path="/getemploi/:id" element={<Emploi/>} />
          <Route path="/liste_classe_enseignant/:id" element={<Liste_classe_enseiganat/>} />
          <Route path="/absenceEnseigant" element={<AbsenceEnseigant/>} />
          <Route path="/listeEleve/:id" element={<liste_Eleve/>} />
        </Route>
        <Route path="/Login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        
       
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
