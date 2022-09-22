import FormUser from "../users/FormUser";
import FormSpeciality from "../specialties/FormSpeciality";
import FormSpecialist from "../specialists/FormSpecialist";
import FormPatient from "../patients/FormPatient";
import FormReservations from "../reservations/FormReservations";
import Record from "../record";
import AddPiece from "../record/AddPiece";

import Layout from "../layout/Layout";

function PruebasContainer(){
    return (
        <Layout props={<Record/>}/>
    )
}

export default PruebasContainer