import { useEffect, useState } from "react"
import { get } from "../../services/api"
import Loading from "../layout/Loading"

// redux
import { useDispatch, useSelector } from "react-redux"
import { setRequest } from "../../redux/actions"


function AllUsers() {
    // const [users, setUsers] = useState([])

    const [loading, setLoading] = useState(true)

    const dispatch = useDispatch()
    const request = useSelector(state => state.request)
       
    const getAll = async () => {
        const result = await get('users')
        if (result.status){
            // setUsers(result.data)
            dispatch(setRequest(result.data))
            setLoading(false)
        }
    }

    useEffect(()=> {
        getAll()
    },[])

    
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
                            <th>Username</th>
                            <th>Rol</th>
                            <th>Opciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            loading ? <Loading/>:
                            request.map((user, index) => (
                                <tr key={user.id}>
                                    <td>{index+1}</td>
                                    <td>{user.first_name} {user.last_name}</td>
                                    <td>{user.username}</td>
                                    <td>{user.rol}</td>
                                    <td><button className="btn btn-sm btn-primary">Ver</button></td>
                                </tr>
                            ))
                        }
                        {/* <tr>
                            <td>1</td>
                            <td>1234123451234</td>
                            <td>Vitalino Leonel</td>
                            <td>Matias Morales</td>
                            <td><button className="btn btn-sm btn-primary">Ver</button></td>
                        </tr> */}
                    </tbody>
                </table>
            </div>
            <div className="car-footer">&nbsp;</div>
        </div>
    )
}

export default AllUsers