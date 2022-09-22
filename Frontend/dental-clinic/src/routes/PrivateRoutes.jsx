import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import Loading from "../components/layout/Loading";




function PrivateRoutes(component) {
    const [authToken, setAuthToken] = useState(false)
    const [loading, setLoading] = useState(true)

    const token = localStorage.getItem('Token')

    useEffect(()=>{
        if (token != null){
            setAuthToken(true)
            setLoading(false)
        }
    })

    if (loading){
        return <Loading/>
    } else {
        const {component: RouteComponent} = component
        if(authToken){
            return (<RouteComponent/>)
        } else {
            return <Navigate to='/'/>
        }
    }
}

export default PrivateRoutes