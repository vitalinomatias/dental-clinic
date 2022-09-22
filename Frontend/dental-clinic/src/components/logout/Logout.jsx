import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { post } from "../../services/api"

function Logout () {
    let navigate = useNavigate()

    const token = localStorage.getItem('Token')

    const content = token.split(' ')

    useEffect(()=>{
        post('logout', token, {'token':content[1]} ).then(
            localStorage.removeItem('Token'),
            navigate('/')
        )
    },[])
}

export default Logout