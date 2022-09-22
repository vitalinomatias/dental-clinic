import { useSelector } from "react-redux"

function FormArea({handleChange, handleSubmit, error, area}){
    // estados
    const actionForm = useSelector(state => state.actionForm)

    return (
        <div className="container">
            <div className="card-header">
                &nbsp;
            </div>
            <div className="card-body">
                <form onSubmit={(event) => handleSubmit(event)}>
                    <div className="form-group">
                        <label className="col-lg-12" >Area</label> 
                        {error.status ? <div className="form-group text-danger">{error.message.result.name}</div>: '' }
                        <input
                            type="text"
                            className="form-control"
                            name="name"
                            onChange={(event) => handleChange(event)}
                            value = {area.name}
                            disabled={actionForm === 'View' ? true: actionForm =='Update' ? false:''}
                        />
                    </div>
                    <div className="form-group">
                        <div>
                            &nbsp;
                        </div>
                        {actionForm === 'New' || actionForm === 'Update'  ? <button type="submit" className="btn btn-success">{actionForm ==='New' ? 'Crear': actionForm === 'Update' ? 'Actualizar':''}</button>: ''}
                    </div>
                </form>
            </div>
            <div className="card-footer">
                &nbsp;
            </div>
        </div>
    )

}

export default FormArea