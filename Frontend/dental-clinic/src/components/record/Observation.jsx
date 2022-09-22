function Observation({handleChange, appointment}){
    return (
        <>
            <div className="row">
                <div className="col-6">
                    <label>Observaciones</label>
                    <textarea
                        className="form-control"
                        name="observation"
                        onChange={(event) => handleChange(event)}
                    ></textarea>
                </div>
                <div className="col-6">
                    <label>Observaciones Anteriores</label>
                    {
                        appointment !== null ?
                        <>        
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Fecha</th>
                                        <th>Observación</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        appointment.map(observation => (
                                            <tr key={observation.id}>
                                                {observation.observation !== null && observation.observation !== '' ? 
                                                <>
                                                    <td>{observation.date}</td>
                                                    <td>{observation.observation}</td>
                                                </> : null}
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                            </> : <> <br /><label>No existen observaciones</label> </>
                    }
                </div>
                
            </div>
            &nbsp;
            <div className="row">
                <div className="col-6">
                    <label>Indicaciones</label>
                    <textarea
                        className="form-control"
                        name="indication"
                        onChange={(event) => handleChange(event)}
                    ></textarea>
                </div>
                <div className="col-6">
                    <label>Indicaciones Anteriores</label>
                    {
                        appointment !== null ?            
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Fecha</th>
                                        <th>Observación</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        appointment.map(indication => (
                                            <tr key={indication.id}>
                                                {indication.indication !== null && indication.observation !== '' ? 
                                                <>
                                                <td>{indication.date}</td>
                                                <td>{indication.indication}</td>
                                                </>: null}
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        : <> <br /><label>No existen Indicaciones</label> </>
                    }
                </div>
                
            </div>
        </>
    )
}
export default Observation