import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setShow, setActionForm } from "../../redux/actions"
import ModalPiece from "./Modal"

function Detail({recordDetail, handleShow, handleStatus}){

    return (
        <>
            <table className="table table-striped">
                <thead className="thead-dark">
                    <tr>
                        <th>Fecha</th>
                        <th>Tratamiento</th>
                        {/* <th>Costo</th> */}
                        <th>Pieza</th>
                        <th>Opciones</th>
                        <th>Estado</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        recordDetail.map(detail => (
                            <tr key={detail.id}>
                                <td className={!detail.status ? "text-danger": '' } >{detail.date}</td>
                                <td className={!detail.status ? "text-danger": '' }>{detail.treatment}</td>
                                {/* <td>{detail.cost}</td> */}
                                <td className={!detail.status ? "text-danger": '' }>{detail.piece.name}</td>
                                {/* <td><button className="btn btn-sm btn-primary">Detalles</button></td> */}
                                <td>
                                        <button 
                                            className={detail.status ? "btn btn-sm btn-primary": "btn btn-sm btn-danger" } 
                                            onClick={() => handleShow('View', detail.id, detail.status)}
                                        >
                                        Detalles
                                        </button>
                                </td>
                                {
                                    detail.status ? <td><button className="btn btn-sm btn-primary" onClick={()=>handleStatus (false, detail.id)}>Pendiente</button></td> : <td><button className="btn btn-sm btn-danger" onClick={()=>handleStatus (true, detail.id)}>Finalizado</button></td>                                    
                                }
                                
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}

export default Detail