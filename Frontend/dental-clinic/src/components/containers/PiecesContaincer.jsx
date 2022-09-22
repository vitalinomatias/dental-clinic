import Layout from "../layout/Layout";
import AllPieces from "../pieces/All";

function PiecesContainer(){
    return (
        <Layout props={<AllPieces/>}/>
    )
}

export default PiecesContainer