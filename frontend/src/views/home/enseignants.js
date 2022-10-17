import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import enseignantServices from "../../services/enseignantServices"
import liste_classe_enseignant from "../../services/liste_classe_enseignant"
const Enseignant = () => {
  const [data, setData]= useState({})
  const {id} = useParams()
    useEffect(() => {
      enseignantServices.getlisteClasse(id).then(res=>{
        console.log(res)
  setData(res.data.data)
      }).catch(err=>{
        console.log(err)
      })
    }, [])

    const [enseignants,setenseignant]=useState([])
 
    const GetAll=()=>{
    
      enseignantServices.getAll().then(res=>{
        console.log("response >>>>",res)
        setenseignant(res.data.data)
      }).catch(err=>{
        console.log(err)
      })
    
    }
    
    
    useEffect(() => {
     GetAll()
    }, [])
    
    return(
       <>
       
      <div className="widget widget-info widget-padding-sm">
      <div className="widget-big-int plugin-clock">00:00</div>                            
      <div className="widget-subtitle plugin-date">Loading...</div>
      <div className="widget-controls">                                
        <a href="#" className="widget-control-right widget-remove" data-toggle="tooltip" data-placement="left" title="Remove Widget"><span className="fa fa-times" /></a>
      </div>                            
      <div className="widget-buttons widget-c3">
      
   
        <tr className="col">
        <Link to= {`/liste_classe_enseignant/62682b6752e60fcff82d0f40`}>
          <a><span className="fa fa-file-text-o" /></a>
          </Link    >
        </tr>
      
        <tr className="col">
        <Link to="/emploi">
          <a ><span className="fa fa-calendar" /></a>
          </Link>
          </tr>
       
    

  


      </div>                            
    </div>
    
   
    
       </>
    )
    }
    export default Enseignant