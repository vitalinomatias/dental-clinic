import { useEffect, useState } from "react" 
import { get } from "../../services/api" //peticiones al backend
import ModalPatient from "./Modal" //componentes
// redux
import { useDispatch, useSelector } from "react-redux"
import { setShow, setActionForm } from "../../redux/actions"
import { Link } from "react-router-dom"

function AllPatients() {
    //estados
    const [patients, setPatients] = useState([])
    const [patientsList, setPatientsList] = useState(patients)
    const [idUpdate, setIdUpdate] = useState('')
    const show = useSelector(state => state.show)
    const actionForm = useSelector(state => state.actionForm)
    //dispatch
    const dispatch = useDispatch()

    const token = localStorage.getItem('Token')
    
    //peticiones
    const getAll = async () => {
        const result = await get('patients', token)
        if (result.status){
            setPatients(result.data)
            setPatientsList(result.data)
        }
    }

    //Modal
    const handleShow = (type, id) => {
        dispatch(setShow(true))
        dispatch(setActionForm(type))
        setIdUpdate(id)
    }

    // buscador
    const handleSearch = (event) => {
        if (event.target.value === "") {
          setPatientsList(patients)
        }
        const filteredValues = patients.filter( patient => patient.first_name.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1);
        setPatientsList(filteredValues);
      };

    useEffect(()=> {
        getAll()
    },[show])

    return (
        <>
        {
            show && actionForm === 'New' ? <ModalPatient/>:
            show && (actionForm === 'View' || actionForm === 'Update')  ? <ModalPatient id={idUpdate}/>: ''
            
        }
        <div className="container">
            <div>&nbsp;</div>
            <div className="card-header">
                <div className="row">
                    <div className="col-sm">
                    <button className="btn btn-success" onClick={()=> handleShow('New')}>Nuevo</button>
                    </div> 
                    <div className="col-sm"></div>                   
                    <div className="col-md">Buscar: <input type="text" onChange={handleSearch} /></div>                   
                </div>
            </div>
            <div className="card-body">
                <table className="table table-striped">
                    <thead className="thead-dark">
                        <tr>
                            <th>No.</th>
                            <th>CUI</th>
                            <th>Nombres</th>
                            <th>Apellido</th>
                            <th>Opciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            patientsList.map((patient, index) => (
                                <tr key={patient.id}>
                                    <td>{index+1}</td>
                                    <td>{patient.cui}</td>
                                    <td>{patient.first_name}</td>
                                    <td>{patient.last_name}</td>
                                    <td>
                                        <button 
                                            className="btn btn-sm btn-primary"
                                            onClick={() => handleShow('View', patient.id)}
                                        >Ver
                                        </button>
                                    </td>
                                    <td><Link className="btn btn-sm btn-success" to={`/recordpatient/${patient.id}/`}>Ver Ficha</Link></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            <div className="car-footer">&nbsp;</div>
        </div>
        </>
    )
}

export default AllPatients