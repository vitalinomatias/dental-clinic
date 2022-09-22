import { useDispatch, useSelector } from 'react-redux';
import { setShow, setActionForm } from '../../redux/actions';

import { useState, useEffect } from "react"
import { get } from "../../services/api" // peticiones al backend

function AddPiece({handleChange, handleSubmit, detail, error}){

    const show = useSelector(state => state.show)
    const actionForm = useSelector(state => state.actionForm)
    console.log(actionForm);
    const dispatch = useDispatch()
    const [pieces, setPieces] = useState([])
    const [areas, setAreas] = useState([])

    const token = localStorage.getItem('Token')

    const getPieces = async () => {
        const result = await get('pieces', token)
        if (result.status){
            setPieces(result.data)
        }
    }

    const getAreas = async () => {
        const result = await get('areas', token)
        if (result.status){
            setAreas(result.data)
        }
    }


    useEffect( () => {
        getPieces()
        getAreas()
    },[])


    return (
        <div className="container">
            <div className="card-header">
                &nbsp;
            </div>
            <div className="card-body">
                <form onSubmit={event => handleSubmit(event)}>
                    <div className="form-group">
                        <label>Pieza</label>
                        {error.status ? <div className="form-group text-danger">{error.message.result.piece}</div>: '' }
                        <select
                            className="form-select"
                            name='piece'
                            onChange={(event) => handleChange(event)}
                            // value = {detail.piece}
                            disabled={actionForm === 'View' || actionForm =='Update' ? true:''}

                        >
                            {
                                actionForm === 'View' ? <option value={detail.piece.id}>{detail.piece.name}</option> : 
                                actionForm === 'NewPiece' ? <option hidden>Elija una pieza</option>: null
                            }
                            
                            {/* <option hidden>Elija una pieza</option> */}
                            {
                                pieces.map(piece =>(
                                    <option key={piece.id} value={parseInt(piece.id)}>{piece.name}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Superficie</label>
                        {error.status ? <div className="form-group text-danger">{error.message.result.area}</div>: '' }
                        <select
                            className="form-select"
                            name='area'
                            onChange={(event) => handleChange(event)}
                            // value = {detail.area}
                            disabled={actionForm === 'View' || actionForm =='Update' ? true:''}
                        >
                            {
                                actionForm === 'View' ? <option value={detail.area.id}>{detail.area.name}</option> : 
                                actionForm === 'NewPiece' ? <option hidden>Elija una superficie</option>: null
                            }
                            
                            {/* <option hidden>Elija una superficie</option> */}
                            {
                                areas.map(area =>(
                                    <option key={area.id} value={area.id}>{area.name}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Diagnostico</label>
                        {error.status ? <div className="form-group text-danger">{error.message.result.diagnosis}</div>: '' }
                        <input 
                            type="text"
                            className="form-control"
                            name="diagnosis"
                            onChange={(event) => handleChange(event)}
                            value = {detail.diagnosis}
                            disabled={actionForm === 'View' ? true: actionForm =='Update' ? false:''}
                        />
                    </div>
                    <div className="form-group">
                        <label>Tratamiento</label>
                        {error.status ? <div className="form-group text-danger">{error.message.result.treatment}</div>: '' }
                        <input
                            type="text"
                            className="form-control"
                            name="treatment"
                            onChange={(event) => handleChange(event)}
                            value = {detail.treatment}
                            disabled={actionForm === 'View' ? true: actionForm =='Update' ? false:''}
                        />
                    </div>
                    <div className="form-group">
                        <label>Costo</label>
                        {error.status ? <div className="form-group text-danger">{error.message.result.cost}</div>: '' }
                        <input
                            type="number"
                            className="form-control"
                            name="cost"
                            onChange={(event) => handleChange(event)}
                            value = {detail.cost}
                            disabled={actionForm === 'View' ? true: actionForm =='Update' ? false:''}
                        /><br/>
                    </div>
                    <div className="form-group">
                        {/* <button type="submit" className="btn btn-success">Guardar</button> */}
                        {actionForm === 'NewPiece' || actionForm === 'Update'  ? <button type="submit" className="btn btn-success">{actionForm ==='NewPiece' ? 'Crear': actionForm === 'Update' ? 'Actualizar':''}</button>: ''}
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddPiece