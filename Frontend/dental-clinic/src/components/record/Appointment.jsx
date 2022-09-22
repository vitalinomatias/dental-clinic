function Appointment({handleChange, appointment, error}){
    return(
        <>
            <div className="row">
                <div className="col-4">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text">Fecha</span>
                            {error.status ? <div className="form-group text-danger">{error.message.result.date}</div>: '' }
                        </div>
                        <input 
                            type="text" 
                            className="form-control"
                            defaultValue={appointment.date}
                        />
                    </div>
                </div> 
                <div className="col-4">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text">Hora</span>
                            {error.status ? <div className="form-group text-danger">{error.message.result.time}</div>: '' }
                        </div>
                        <input 
                            type="time"
                            className="form-control"
                            name="time"
                            onChange={(event) => handleChange(event)}
                            // value={appointment.time}
                        />
                    </div>
                </div> 
                <div className="col-4">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text">Tipo de Atención</span>
                            {error.status ? <div className="form-group text-danger">{error.message.result.type_service}</div>: '' }
                        </div>
                        <select
                            className="form-select"
                            name="type_service"
                            value={appointment.type_service}
                            onChange={(event) => handleChange(event)}
                        >
                            <option value={true}>Tratamiento</option>
                            <option value={false}>Urgencia</option>
                        </select>
                    </div>
                </div> 
            </div>
            <div>&nbsp;</div>
            <div className="row">
                <div className="col-4">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text">Estado de la boleta</span>
                            {error.status ? <div className="form-group text-danger">{error.message.result.statusTicket}</div>: '' }
                        </div>
                        <select
                            className="form-select"
                            name="statusTicket"
                            value={appointment.statusTicket}
                            onChange={(event) => handleChange(event)}
                        >
                            <option value={true}>Cancelado</option>
                            <option value={false}>No Cancelado</option>
                        </select>
                    </div>
                </div> 
                <div className="col-4">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text">Estado de la Cita</span>
                            {error.status ? <div className="form-group text-danger">{error.message.result.statusAttendance}</div>: '' }
                        </div>
                        <select
                            className="form-select"
                            name="statusAttendance"
                            value={appointment.statusAttendance}
                            onChange={(event) => handleChange(event)}
                        >
                            <option value="0">No Asistio</option>
                            <option value="1">Asistio</option>
                            <option value="2">Asistio Tarde</option>
                        </select>
                    </div>
                </div> 
                <div className="col-4">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text">Especialista</span>
                            {error.status ? <div className="form-group text-danger">{error.message.result.specialistName}</div>: '' }
                        </div>
                        <input
                            type="text"
                            defaultValue={appointment.specialistName}
                            className="form-control"
                            readOnly
                        />
                    </div>
                </div> 
            </div>
        </>
    )
}

export default Appointment