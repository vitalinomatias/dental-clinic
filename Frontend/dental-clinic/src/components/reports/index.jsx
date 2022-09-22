import { useEffect, useState } from "react"
import { get, query } from "../../services/api"

function Reports() {
    const [report, setReport] = useState({
        type: null,
        status: null,
        start: null,
        end: null,
        patient: null,
        specialist: null
    })

    const [specialists, setSpecialists] = useState([])
    const [patients, setPatients] = useState([])
    const [response, setResponse] = useState({
        status: false,
        data: []
    })

    const token = localStorage.getItem('Token')

    const handleChange = (event) => {
        setReport({
            ...report,
            [event.target.name]: event.target.value
        })

    }

    const handleClick = async () => {
        console.log(report);
        const result = await query('report', token, report)
        console.log(result);
        if (result.status && result.data.length > 0) {
            // setResponse(result.data)
            // console.log(result.data.length);
            setResponse({
                status: true,
                data: result.data
            })
        } else {
            setResponse({
                status: false,
                data: result.data
            })
        }
    }
    
    useEffect(()=>{
        get('specialists', token).then(specialists => setSpecialists(specialists.data)).catch(error => console.log(error))
        get('patients', token).then(patients => setPatients(patients.data)).catch(error => console.log(error))
    },[])

    console.log(response);

    return (
        <>
        <div className="container-fluid">
            <div>&nbsp;</div>
            <div className="card">
                <div className="card-header">
                    <h1 className="text-center">Reportes</h1>
                        <div className="row">
                            <div className="col-6">
                                <label className="form-label">Tipo de Reporte</label>
                                <select
                                    name="type"
                                    className="form-select"
                                    onChange={handleChange}
                                >
                                    <option hidden>Elija una opcion</option>
                                    <option value="date">Fechas</option>
                                    <option value="patient">Pacientes</option>
                                </select>
                            </div>
                            {
                                report.type === 'date' ?
                                <>
                                    <div className="col-3">
                                        <label className="form-label">Fecha Inicio</label>
                                        <input onChange={handleChange} name="start" type="date" className="form-control" />
                                    </div>
                                    <div className="col-3">
                                        <label className="form-label">Fecha Final</label>
                                        <input onChange={handleChange} name="end" type="date" className="form-control" />
                                    </div>
                                </> : report.type === 'patient' ?
                                <>
                                    <div className="col-6">
                                        <label className="form-label">Paciente</label>
                                        <select onChange={handleChange} name="patient" id="" className="form-select">
                                            <option hidden>Elegir una opción</option>
                                            {
                                                patients.map(patient => (
                                                    <option key={patient.id} value={patient.id}>{patient.first_name} {patient.last_name}</option>
                                                ))
                                            }
                                        </select>
                                    </div>
                                </> : null

                            }
                        </div>
                        &nbsp;
                        {
                            report.type && report.patient || report.type && report.start && report.end ? 
                            <>
                                <div className="row">
                                    <div className="col-4">
                                        <label className="form-label">Estados</label>
                                        <select onChange={handleChange} name="status" id="" className="form-select">
                                            <option hidden>Elegir una opción</option>
                                            <option value="1">Atendidos</option>
                                            <option value="0">Inasistencia</option>
                                            <option value="2">Atrasos</option>
                                        </select>
                                    </div>
                                    <div className="col-6">
                                        <label className="form-label">Especialista</label>
                                        <select onChange={handleChange} name="specialist" id="" className="form-select">
                                            <option hidden>Elegir una opción</option>
                                            {
                                                specialists.map(specialist => (
                                                    <option key={specialist.id} value={specialist.id}>{specialist.name}</option>
                                                ))
                                            }
                                        </select>
                                    </div>
                                    <div className="col-2">
                                        <br />
                                        <button onClick={handleClick} className="btn btn-primary">Consultar</button>
                                    </div>
                                </div>
                            </> : ''
                        }
                        
                </div>
                <div className="card-body">
                    <table className="table table-striped">
                        <thead className="thead-dark">
                            <tr>
                                <th>No.</th>
                                <th>Nombre</th>
                                <th>Fecha</th>
                                <th>Hora</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                response.data.map((data, index) => (
                                    <tr key={data.id} >
                                        <td>{index+1}</td>
                                        <td>{data.patient.name}</td>
                                        <td>{data.date}</td>
                                        <td>{data.time}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                    <span>Total de consultas: {response.data.length}</span>
                </div>
                <div className="card-footer">




                </div>
            </div>
            <div>&nbsp;</div>
        </div>
        </>
    )
}

export default Reports