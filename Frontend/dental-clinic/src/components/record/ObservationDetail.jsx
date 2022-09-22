function Observation({handleChange, appointment}){
    return (
        <>
            <div className="row">
                <div className="col-12">
                    <h5>Observaciones</h5>
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
                <div className="col-12">
                    <h5>Indicaciones</h5>
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