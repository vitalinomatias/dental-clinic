import Home from "../home/Home";
import Layout from "../layout/Layout";

function HomeContainer(){
    return (
        <Layout props={<Home/>}/>
    )
}

export default HomeContainer