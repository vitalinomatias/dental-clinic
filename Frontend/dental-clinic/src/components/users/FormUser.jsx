function FormUser(){
    return (
        <div className="container">
            <div className="card-header">
                &nbsp;
            </div>
            <div className="card-body">
                {/* <form onSubmit={(e) => handleSubmit(e)}> */}
                <form>
                    <div className="form-group">
                        <label className="col-lg-12" >Nombres</label>
                        <input
                            type="text"
                            className="form-control"
                            name="first_name"
                            // onChange={(e) => change(e)}
                            // value={device.tipo}
                        />
                    </div>
                    <div className="form-group">
                        <label>Apellidos</label>
                        <input
                            type="text"
                            className="form-control"
                            name="last_name"
                            // onChange={(e) => change(e)}
                            // value={device.marca}
                        />
                    </div>
                    <div className="form-group">
                        <label>Nombre de usuario</label>
                        <input
                            type="text"
                            className="form-control"
                            name="username"
                            // onChange={(e) => change(e)}
                            // value={device.descripcion}
                        />
                    </div>
                    <div className="form-group">
                        <label>Contraseña</label>
                        <input
                            type="text"
                            className="form-control"
                            name="password"
                            // onChange={(e) => change(e)}
                            // value={device.cantidad}
                        />
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

export default FormUser