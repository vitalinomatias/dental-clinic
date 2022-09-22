import { useEffect, useState } from "react"
import { get } from "../../services/api" // peticiones al backend
import ModalPiece from "./Modal"
// redux
import { useDispatch, useSelector } from "react-redux"
import { setShow, setActionForm } from "../../redux/actions"

function AllPieces() {
    const [pieces, setPieces] = useState([])
    const [piecesList, setPiecesList] =useState(pieces)
    const [idUpdate, setIdUpdate] = useState('')
    const show = useSelector(state => state.show)
    const actionForm = useSelector(state => state.actionForm)
    //dispatch
    const dispatch = useDispatch()

    const token = localStorage.getItem('Token')
    
    const getAll = async () => {
        const result = await get('pieces', token)
        if (result.status){
            setPieces(result.data)
            setPiecesList(result.data)
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
          setPiecesList(pieces)
        }
        const filteredValues = pieces.filter( piece => piece.name.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1);
        setPiecesList(filteredValues);
      };

    useEffect(()=> {
        getAll()
    },[show])

    return (
        <>
        {
            show && actionForm === 'New' ? <ModalPiece/>:
            show && (actionForm === 'View' || actionForm === 'Update')  ? <ModalPiece id={idUpdate}/>: ''
            
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
                            <th>Opciones</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                        piecesList.map((piece, index) => (
                            <tr key={piece.id}>
                                <td>{index +1}</td>
                                <td>{piece.name}</td>
                                <td>
                                    <button 
                                        className="btn btn-sm btn-primary"
                                        onClick={() => handleShow('View', piece.id)}
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

export default AllPieces