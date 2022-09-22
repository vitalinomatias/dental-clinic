import { useEffect, useState } from "react"
import { get } from "../../services/api"
import { useSelector } from "react-redux"

function FormReservations({handleChange, handleSubmit, error, reservation}){
    // estados
    const actionForm = useSelector(state => state.actionForm)
    const [patients, setPatients] = useState([])
    const [specialists, setSpecialists] = useState([])

    const token = localStorage.getItem('Token')

    const getPatients = async () => {
        const result = await get('patients', token)
        if (result.status){
            setPatients(result.data)
        }
    }

    const getSpecialist = async () => {
        const result = await get('specialists', token)
        if (result.status) {
            setSpecialists(result.data)
        }
    }

    useEffect( () => {
        getPatients()
        getSpecialist()
    },[])


    return (
        <div className="container">
            <div className="card-header">
                &nbsp;
            </div>
            <div className="card-body">
                <form onSubmit={(event) => handleSubmit(event)}>
                    <div className="form-group">
                        <label className="col-lg-12" >Fecha</label>
                        {error.status ? <div className="form-group text-danger">{error.message.result.date}</div>: '' }
                        <input
                            type="date"
                            className="form-control"
                            name="date"
                            onChange={(event) => handleChange(event)}
                            value = {reservation.date}
                            disabled={actionForm === 'View' ? true: actionForm =='Update' ? false:''}
                        />
                    </div>
                    <div className="form-group">
                        <label>Hora</label>
                        {error.status ? <div className="form-group text-danger">{error.message.result.time}</div>: '' }
                        <input
                            type="time"
                            className="form-control"
                            name="time"
                            onChange={(event) => handleChange(event)}
                            value = {reservation.time}
                            disabled={actionForm === 'View' ? true: actionForm =='Update' ? false:''}
                        />
                    </div>
                    <div className="form-group">
                        <label>Paciente</label>
                        {error.status ? <div className="form-group text-danger">{error.message.result.patient}</div>: '' }
                        <select
                            className="form-select"
                            name='patient'
                            onChange={(event) => handleChange(event)}
                            value = {reservation.patient}
                            disabled={actionForm === 'View' || actionForm =='Update' ? true:''}
                        >
                            <option value={reservation.patient.id} hidden>{reservation.patient.first_name} {reservation.patient.last_name}</option>
                            {/* <option value={reservation.patient}>{reservation.patient}</option> */}
                            {
                                patients.map(patient =>(
                                    <option key={patient.id} value={patient.id}>{patient.first_name} {patient.last_name}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Especialista</label>
                        {error.status ? <div className="form-group text-danger">{error.message.result.specialist}</div>: '' }
                        <select 
                            className="form-select"
                            name="specialist"
                            onChange={(event) => handleChange(event)}
                            value = {reservation.specialist}
                            disabled={actionForm === 'View' || actionForm =='Update' ? true:''}
                        >
                            <option value={reservation.specialist.id} hidden>{reservation.specialist.first_name} {reservation.specialist.last_name}</option>
                            {/* <option value={reservation.specialist}>{reservation.specialist}</option> */}
                            {
                                specialists.map(specialist => (
                                    <option key={specialist.id} value={specialist.id}>{specialist.name}</option>
                                ))
                            }
                        </select>
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

export default FormReservations