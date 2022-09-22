import Layout from "../layout/Layout";
import AllPatients from "../patients/All";

function PatientsContainer() {

    return (
        <Layout props={<AllPatients/>}/>
    )
    
}

export default PatientsContainer