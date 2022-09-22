import { useEffect, useState } from "react"
import { get } from "../../services/api" // peticiones al backend
import ModalSpeciality from "./Modal" // componenete modal
// redux
import { useDispatch, useSelector } from "react-redux"
import { setShow, setActionForm } from "../../redux/actions"

function AllSpecialities() {   
    const [specialities, setSpecialities] = useState([])
    const [specialitiesList, setSpecialitiesList] = useState(specialities)
    const [idUpdate, setIdUpdate] = useState('')
    const show = useSelector(state => state.show)
    const actionForm = useSelector(state => state.actionForm)
    //dispatch
    const dispatch = useDispatch()

    const token = localStorage.getItem('Token')

    // peticiones
    const getAll = async () => {
        const response = await get('specialities', token);
        if (response.status){
            setSpecialities(response.data)
            setSpecialitiesList(response.data)
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
          setSpecialitiesList(specialities)
        }
        const filteredValues = specialities.filter( speciality => speciality.name.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1);
        setSpecialitiesList(filteredValues);
      };

    useEffect( () =>{
        getAll()
    },[show])

    return (
        <>
        {
            show && actionForm === 'New' ? <ModalSpeciality/>:
            show && (actionForm === 'View' || actionForm === 'Update')  ? <ModalSpeciality id={idUpdate}/>: ''
            
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
                            <th>Especilidad</th>
                            <th>Opciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            specialitiesList.map((speciality, index) => (
                                <tr key={speciality.id}>
                                    <td>{index+1}</td>
                                    <td>{speciality.name}</td>
                                    <td>
                                        <button 
                                            className="btn btn-sm btn-primary"
                                            onClick={() => handleShow('View', speciality.id)}
                                        >Ver
                                        </button>
                                    </td>
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

export default AllSpecialities