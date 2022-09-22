import { useEffect, useState } from "react"

import { get } from "../../services/api"
import Loading from "../layout/Loading"

// redux
import { useDispatch, useSelector } from "react-redux"
import { setRequest } from "../../redux/actions"


function AllSpecialists() {
    

    const [loading, setLoading] = useState(true)

    const dispatch = useDispatch()
    const request = useSelector(state => state.request)

    // const [specialists, setSpecialists] = useState([])

    const getAll = async () => {
        setLoading(true)
        const response = await get('specialists');
        console.log(response);
        if(response.status){
            // setSpecialists(response.data)
            dispatch(setRequest(response.data))
            setLoading(false)
        }        
    }

    useEffect( () =>{
        getAll()
    },[])

    console.log(request);


    return (
        <div className="container">
            <div>&nbsp;</div>
            <div className="card-header">
                <button className="btn btn-success">Nuevo</button>
            </div>
            <div className="card-body">
                <table className="table table-striped">
                    <thead className="thead-dark">
                        <tr>
                            <th>No.</th>
                            <th>Nombre</th>
                            <th>Especialidad</th>
                            <th>Opciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            loading ? <Loading/>:
                            request.map((specialist, index) => (
                                <tr key={specialist.id} >
                                    <td>{index+1}</td>
                                    <td>{specialist.name}</td>
                                    <td>{specialist.speciality.name}</td>
                                    <td><button className="btn btn-sm btn-primary">Ver</button></td>
                                </tr>
                            ))
                        }

                    </tbody>
                </table>
            </div>
            <div className="car-footer">&nbsp;</div>
        </div>
    )
}

export default AllSpecialists