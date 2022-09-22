import { useSelector } from "react-redux"

function FormPatient({handleChange, handleSubmit, error, patient}){
    // estados
    const actionForm = useSelector(state => state.actionForm)

    return (
        <div className="container">
            <div className="card-header">
                &nbsp;
            </div>
            <div className="card-body">
                <form onSubmit={(event) => handleSubmit(event)}>
                    <div className="form-group">
                        <label className="col-lg-12" >CUI</label> 
                        {error.status ? <div className="form-group text-danger">{error.message.result.cui}</div>: '' }
                        <input
                            type="number"
                            className="form-control"
                            name="cui"
                            onChange={(event) => handleChange(event)}
                            value = {patient.cui}
                            disabled={actionForm === 'View' ? true: actionForm =='Update' ? false:''}
                        />
                    </div>
                    <div className="form-group">
                        <label>Nombres</label>
                        {error.status ? <div className="form-group text-danger">{error.message.result.first_name}</div>: '' }
                        <input
                            type="text"
                            className="form-control"
                            name="first_name"
                            onChange={(event) => handleChange(event)}
                            value={patient.first_name}
                            disabled={actionForm === 'View' ? true: actionForm =='Update' ? false:''}
                        />
                    </div>
                    <div className="form-group">
                        <label>Apellidos</label>
                        {error.status ? <div className="form-group text-danger">{error.message.result.last_name}</div>: '' }
                        <input
                            type="text"
                            className="form-control"
                            name="last_name"
                            onChange={(event) => handleChange(event)}
                            value={patient.last_name}
                            disabled={actionForm === 'View' ? true: actionForm =='Update' ? false:''}
                        />
                    </div>
                    <div className="form-group">
                        <label>Fecha de nacimiento</label>
                        {error.status ? <div className="form-group text-danger">{error.message.result.birthday}</div>: '' }
                        <input
                            type="date"
                            className="form-control"
                            name="birthday"
                            onChange={(event) => handleChange(event)}
                            value={patient.birthday}
                            disabled={actionForm === 'View' ? true: actionForm =='Update' ? false:''}
                        />
                    </div>
                    <div className="form-group">
                        <label>Edad</label>
                        <input
                            type="number"
                            className="form-control"
                            name="age"
                            onChange={(event) => handleChange(event)}
                            value={patient.age}
                            disabled={actionForm === 'View' ? true: actionForm =='Update' ? false:''}
                        />
                    </div>
                    <div className="form-group">
                        <label>Carrera</label>
                        <input
                            type="text"
                            className="form-control"
                            name="career"
                            onChange={(event) => handleChange(event)}
                            value={patient.career}
                            disabled={actionForm === 'View' ? true: actionForm =='Update' ? false:''}
                        />
                    </div>
                    <div className="form-group">
                        <label>Año de ingreso</label>
                        {error.status ? <div className="form-group text-danger">{error.message.result.year}</div>: '' }
                        <input
                            type="date"
                            className="form-control"
                            name="year"
                            onChange={(event) => handleChange(event)}
                            value={patient.year}
                            disabled={actionForm === 'View' ? true: actionForm =='Update' ? false:''}
                        />
                    </div>
                    <div className="form-group">
                        <label>Domicilio</label>
                        <input
                            type="text"
                            className="form-control"
                            name="residence"
                            onChange={(event) => handleChange(event)}
                            value={patient.residence}
                            disabled={actionForm === 'View' ? true: actionForm =='Update' ? false:''}
                        />
                    </div>
                    <div className="form-group">
                        <label>Fono</label>
                        <input
                            type="text"
                            className="form-control"
                            name="fono"
                            onChange={(event) => handleChange(event)}
                            value={patient.fono}
                            disabled={actionForm === 'View' ? true: actionForm =='Update' ? false:''}
                        />
                    </div>
                    <div className="form-group">
                        <label>Prevision</label>
                        <input
                            type="text"
                            className="form-control"
                            name="prevision"
                            onChange={(event) => handleChange(event)}
                            value={patient.prevision}
                            disabled={actionForm === 'View' ? true: actionForm =='Update' ? false:''}
                        />
                    </div>
                    <div className="form-group">
                        <div>
                            &nbsp;
                        </div>
                        {actionForm === 'New' || actionForm === 'Update'  ? <button type="submit" className="btn btn-success">{actionForm ==='New' ? 'Crear': actionForm === 'Update' ? 'Actualizar':''}</button>: ''}
                    </div>
                </form>
            </div>
            <div className="card-footer">
                &nbsp;
            </div>
        </div>
    )

}

export default FormPatient
