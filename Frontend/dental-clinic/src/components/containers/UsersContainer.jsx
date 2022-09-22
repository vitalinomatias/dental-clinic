import Layout from "../layout/Layout";
import AllUsers from "../users/All";

function UsersContainer(){
    return (
        <Layout props={<AllUsers/>}/>
    )
}

export default UsersContainer