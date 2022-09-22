function Patient({patient}){

    const birthday = new Date(patient.birthday)
    const date = new Date(patient.year)


    return (
        <>
            <div className="row">
                <div className="col-6">
                    <label className="col-2">Nombre: </label>
                    <label className="col-10">{patient.first_name} {patient.last_name}</label>
                </div>
                <div className="col-6">
                    <label className="col-2">Cui:</label>
                    <label className="col-10">{patient.cui}</label>
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                    <label className="col-4">Fecha de nacimiento:</label>
                    <label className="col-5">{birthday.toLocaleDateString()}</label>
                </div>
                <div className="col-6">
                    <label className="col-2">Edad:</label>
                    <label className="col-10">{patient.age} años</label>
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                    <label className="col-2">Carrera:</label>
                    <label className="col-10">{patient.career}</label>
                </div>
                <div className="col-6">
                    <label className="col-3">Año de ingreso:</label>
                    <label className="col-7">{date.toLocaleDateString()}</label>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <label className="col-1">Residencia: </label>
                    <label className="col-11">{patient.residence}</label>
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                    <label className="col-2">Fono: </label>
                    <label className="col-10">{patient.fono}</label>
                </div>
                <div className="col-6">
                    <label className="col-2">Prevision:</label>
                    <label className="col-10">{patient.prevision}</label>
                </div>
            </div>
        </>
    )
}

export default Patient