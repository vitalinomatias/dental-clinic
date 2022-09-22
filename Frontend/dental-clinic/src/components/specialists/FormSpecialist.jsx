import { useState, useEffect } from "react"
import { get } from "../../services/api"

function FormSpecialist(){
    const [specialists, setSpecialists] = useState([])
    const [specialities, setSpecialities] = useState([])

    const getSpecialists = async () => {
        const result = await get('userspecialist')
        if (result.status){
            setSpecialists(result.data)
        }
    }

    const getSpecialities = async () => {
        const result = await get('specialities')
        if (result.status){
            setSpecialities(result.data)
        }
    }

    useEffect( ()=> {
        getSpecialists()
        getSpecialities()
        
    },[])

    console.log(specialities);
    // console.log(speciality);

    return (
        <div className="container">
            <div className="card-header">
                &nbsp;
            </div>
            <div className="card-body">
                {/* <form onSubmit={(e) => handleSubmit(e)}> */}
                <form>
                    <div className="form-group">
                        <label className="col-lg-12" >Nombre Especialista</label>
                        {/* <input
                            type="text"
                            className="form-control"
                            name="specialist"
                            // onChange={(e) => change(e)}
                            // value={device.tipo}
                        /> */}
                        <select className="form-select" >
                            {
                                specialists.map(specialist => (
                                    <option key={specialist.id} value={specialist}>{specialist.first_name} {specialist.last_name}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div className="form-group">
                        <label className="col-lg-12" >Especialidad</label>
                        {/* <input
                            type="text"
                            className="form-control"
                            name="speciality"
                            // onChange={(e) => change(e)}
                            // value={device.tipo}
                        /> */}
                        <select className="form-select" >
                            {
                                specialities.map(speciality => (
                                    <option key={speciality.id} value={speciality}>{speciality.name}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div className="form-group">
                        <div>
                            &nbsp;
                        </div>
                        {/* <button type="submit" className="btn btn-success">{action==='New' ? 'Nuevo': 'Actualizar'}</button> */}
                        <button type="submit" className="btn btn-success">Accion</button>
                    </div>
                </form>
            </div>
            <div className="card-footer">
                &nbsp;
            </div>
        </div>
    )

}

export default FormSpecialist