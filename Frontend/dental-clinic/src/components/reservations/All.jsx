import { useEffect, useState } from "react"
import { get } from "../../services/api"
import { Link } from "react-router-dom"
import ModalReservation from "./Modal"
// redux
import { useDispatch, useSelector } from "react-redux"
import { setShow, setActionForm } from "../../redux/actions"

function AllReservations() {
    const [reservations, setReservations] = useState([])
    const [reservationsList, setReservationsList] = useState(reservations)
    const [idUpdate, setIdUpdate] = useState('')
    const show = useSelector(state => state.show)
    const actionForm = useSelector(state => state.actionForm)
    //dispatch
    const dispatch = useDispatch()

    const token = localStorage.getItem('Token')
    
    const getAll = async () => {
        const result = await get('reservations', token)
        if (result.status){
            setReservations(result.data)
            setReservationsList(result.data)
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
          setReservationsList(reservations)
        }
        const filteredValues = reservations.filter( reservation => reservation.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1);
        setPatientsList(filteredValues);
      };

    useEffect(()=> {
        getAll()
    },[show])

    console.log(reservations);

    return (
        <>
        {
            show && actionForm === 'New' ? <ModalReservation/>:
            show && (actionForm === 'View' || actionForm === 'Update')  ? <ModalReservation id={idUpdate}/>: ''
            
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
                            <th>fecha</th>
                            <th>Hora</th>
                            <th>Paciente</th>
                            <th>Especialista</th>
                            <th>Opciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            reservationsList.map((reservation,index) => (
                                <tr key={reservation.id}>
                                    <td>{index+1}</td>
                                    <td>{reservation.date}</td>
                                    <td>{reservation.time}</td>
                                    <td>{reservation.patient.first_name} {reservation.patient.last_name}</td>
                                    <td>{reservation.specialist.first_name} {reservation.specialist.last_name}</td>
                                    <td>
                                        <button 
                                            className="btn btn-sm btn-primary"
                                            onClick={() => handleShow('View', reservation.id)}
                                        >
                                        Ver
                                        </button>
                                    </td>
                                    <td><Link className="btn btn-sm btn-success" to={`/record/${reservation.patient.id}/${reservation.specialist.id}/${reservation.id}`}>Atender</Link></td>
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

export default AllReservations