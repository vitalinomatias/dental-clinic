import Layout from "../layout/Layout";
import AllReservations from "../reservations/All";

function ReservationsContainer() {
    return (
        <Layout props={<AllReservations/>}/>
    )
}

export default ReservationsContainer