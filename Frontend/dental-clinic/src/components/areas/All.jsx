import { useEffect, useState } from "react"
import { get } from "../../services/api" // peticiones al backend
import ModalArea from "./Modal" //componente Modal
// redux
import { useDispatch, useSelector } from "react-redux"
import { setShow, setActionForm } from "../../redux/actions"

function AllAreas() {
    const [areas, setAreas] = useState([])
    const [areasList, setAreasList] = useState(areas)
    const [idUpdate, setIdUpdate] = useState('')
    const show = useSelector(state => state.show)
    const actionForm = useSelector(state => state.actionForm)
    //dispatch
    const dispatch = useDispatch()

    const token = localStorage.getItem('Token')
    
    const getAll = async () => {
        const result = await get('areas', token)
        if (result.status){
            setAreas(result.data)
            setAreasList(result.data)
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
          setAreasList(areas)
        }
        const filteredValues = areas.filter( area => area.name.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1);
        setAreasList(filteredValues);
      };

    useEffect(()=> {
        getAll()
    },[show])

    return (
        <>
        {
            show && actionForm === 'New' ? <ModalArea/>:
            show && (actionForm === 'View' || actionForm === 'Update')  ? <ModalArea id={idUpdate}/>: ''
            
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
                            <th>Pieza</th>
                            <th>Opciones-git-</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                        areasList.map((area, index) => (
                            <tr key={area.id}>
                                <td>{index +1}</td>
                                <td>{area.name}</td>
                                <td>
                                    <button 
                                        className="btn btn-sm btn-primary"
                                        onClick={() => handleShow('View', area.id)}
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

export default AllAreas