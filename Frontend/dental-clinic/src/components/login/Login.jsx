import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { login } from "../../services/api"


function Login () {
    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    })

    const [message, setMessage] = useState({
        status: false,
        message: ''
    })

    const handleChange = (event) => {
        setCredentials({...credentials, [event.target.name]: event.target.value})
    }

    let navigate = useNavigate()

    const handleSubmit = async (event) => {
        event.preventDefault()
        const result = await login(credentials)
        if (result.status){
            localStorage.setItem('Token', `Token ${result.Token}`)
            navigate('/home')
        } else {
            setMessage({status: true, message:result.message})
        }
    }


    return (
        <section>
            <div className="container-fluid">

                <div className="row">
                    <div className="col-sm-6">

                        <div>

                        <form onSubmit={handleSubmit} >

                            <h3>Log in</h3>

                            <div className="form-group">
                            <input
                                type="text" 
                                className="form-control form-control-lg"
                                name="username"
                                onChange={handleChange}
                            />
                            <label className="form-label">Nombre de usuario</label>
                            </div>

                            <div className="form-group">
                            <input 
                                type="password"
                                className="form-control form-control-lg"
                                name="password"
                                onChange={handleChange}
                            />
                            <label className="form-label">Password</label>
                            </div>

                            <div className="form-group">
                            <button type="submit" className="btn btn-secondary btn-lg btn-block">Iniciar Sesion</button>
                            </div>
                            {
                                message.status ? <div className="form-group text-danger">{message.message}</div> : ''
                            }

                        </form>

                        </div>

                    </div>
                    <div className="col-sm-6 ">
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login