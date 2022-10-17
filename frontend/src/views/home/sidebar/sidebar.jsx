import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div>
<div className="page-sidebar">
  {/* START X-NAVIGATION */}
  <ul className="x-navigation">
    <li className="xn-logo">
      <a >Lycée Ourda</a>
    </li>
    <li className="xn-profile">
      <a  className="profile-mini">
      </a>
      <div className="profile">
        <div className="profile-image">
        <img src={process.env.PUBLIC_URL + 'img/logolycee.png' } />
        </div>
        <div className="profile-data">
          <div className="profile-data-name">Ourdanine</div>
          <div className="profile-data-title">devloppé par Ferchichi Rim</div>
        </div>
      </div>                                                                        
    </li>
    <li ></li>
    <li>
    <Link to={`/getallusers`}>
      <a><span className="fa fa-desktop" /> <span className="xn-text">Listes d'admin</span></a>
      </Link>                        
    </li>                    
    <li className="xn-openable">
      <a><span className="fa fa-file-text-o" /> <span className="xn-text">Gestion d'eleve</span></a>
      <ul>
      <Link to={`/getallEleve`}>
        <li><a ><span  className="fa fa-user" /> liste d'eleve </a></li>
        </Link>
        <Link to={`/addEleve`}>
        <li><a><span className="fa fa-pencil"/> Ajouter</a></li>
        </Link>       
      </ul>
    </li>
    <li className="xn-openable">
      <a ><span className="fa fa-file-text-o" /> <span className="xn-text">Gestion d'enseignant</span></a>
      <ul>
      <Link to={`/getallenseignant`}>
        <li><a ><span  className="fa fa-user" /> liste d'enseignant </a></li>
        </Link>
        <Link to={`/addenseiganat`}>
        <li><a><span className="fa fa-pencil" /> Ajouter</a></li>
        </Link>       
      </ul>
    </li>
    <li className="xn-openable">
      <a><span className="fa fa-file-text-o" /> <span className="xn-text">Gestion de classe</span></a>
      <ul>
      <Link to={`/getAllClasse`}>
        <li><a ><span  className="fa fa-user" /> liste de classe </a></li>
        </Link>
        <Link to={`/addClasse`}>
        <li><a><span className="fa fa-pencil" /> Ajouter</a></li>
        </Link>       
      </ul>
    </li>
    <li className="xn-openable">
      <a><span className="fa fa-file-text-o" /> <span className="xn-text">Gestion de absence</span></a>
      <ul>
      <Link to={`/getallAbsence`}>
        <li><a ><span  className="fa fa-user" /> liste d'absence </a></li>
        </Link>
        <Link to={`/addAbsence`}>
        <li><a><span className="fa fa-pencil" /> Ajouter</a></li>
        </Link>       
      </ul>
    </li>
    <li className="xn-openable">
      <a><span class="fa fa-calendar" /> <span className="xn-text">Gestion d'emploi du temps</span></a>
      <ul>
        <Link to={`/addEmploi`}>
        <li><a><span className="fa fa-pencil" /> Ajouter</a></li>
        </Link>       
      </ul>
    </li>
    
    <Link to={`/Enseignant`}>
    <li >
      <a><span class="fa fa-user" /> <span className="xn-text">Enseiganat</span></a></li>
      </Link> 

      <Link to={`/supAdmin`}>
    <li >
      <a><span class="fa fa-user" /> <span className="xn-text">Super Admin</span></a></li>
      </Link> 
      <Link to={`/Admin`}>
    <li>
      <a><span class="fa fa-user" /> <span className="xn-text"> Admin</span></a></li>
      </Link> 
  </ul>
</div>


    </div>
  )
}

export default Sidebar