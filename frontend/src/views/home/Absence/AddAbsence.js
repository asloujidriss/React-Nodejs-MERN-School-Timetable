import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom' 
import AbsenceServices from '../../../services/absenceService'
import Swal from 'sweetalert2'
 
const AddAbsence = () => {
  const navigate = useNavigate()
  const [absences,setabsences]=useState([])
  const [data,setData]= useState({})
  const onChangehandle=(e)=>{
    setData({
      ...data,
      [e.target.name] : e.target.value
    })
  }
 
  const onSubmithandler=(e)=>{
    e.preventDefault()

    Swal.fire({
      title: 'Do you want to save the changes?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        navigate("/getallAbsence")
        AbsenceServices.create(data).then(res=>{

          console.log(res)
        }).catch(err=>{
          console.log(err)
        })
        Swal.fire('Saved!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
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
            <h3 className="panel-title"><strong>ADD</strong> Absence</h3>
            <ul className="panel-controls">
              <li><a href="#" className="panel-remove"><span className="fa fa-times" /></a></li>
            </ul>
          </div>
          <div className="panel-body">
          <div className="form-group">
              <label className="col-md-3 col-xs-12 control-label">date_absence</label>
              <div className="col-md-6 col-xs-12">
                <div className="input-group">
                  <span className="input-group-addon"><span className="fa fa-pencil" /></span>
                  <input type="data" className="form-control" name='date_absence'  onChange={onChangehandle}/>
                </div>
                <span className="help-block">Add date_absence</span>
              </div>
            </div>
            <div className="form-group">
              <label className="col-md-3 col-xs-12 control-label">type</label>
              <div className="col-md-6 col-xs-12">
                <div className="input-group">
                  <span className="input-group-addon"><span className="fa fa-pencil" /></span>
                  <input type="text" className="form-control" name='type'  onChange={onChangehandle}/>
                </div>
                <span className="help-block">Add type</span>
              </div>
            </div>
            <div className="form-group">
              <label className="col-md-3 col-xs-12 control-label">description</label>
              <div className="col-md-6 col-xs-12">
                <div className="input-group">
                  <span className="input-group-addon"><span className="fa fa-pencil" /></span>
                  <input type="text" className="form-control" name='description'  onChange={onChangehandle}/>
                </div>
                <span className="help-block">Add description</span>
              </div>
            </div>
          </div>
          <div className="panel-footer">
          <Link to="/getallAbsence" className="btn btn-primary">List of Absences</Link>
            <button className="btn btn-primary pull-right" type="submit">Submit</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</div>
    </div>
  )
}

export default AddAbsence