import { Route, Routes } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";
import ReportsContainer from "../components/containers/ReportsContainer";
import RecordContainer from "../components/containers/RecordContainer";
import PatientsContainer from "../components/containers/PatientsContainer";
import HomeContainer from "../components/containers/HomeContainer";
import SpecialitiesContainer from "../components/containers/Specialities";
import SpecialistsContainer from "../components/containers/Specialists";
import ReservationsContainer from "../components/containers/ReservationsContainer";
import UsersContainer from "../components/containers/UsersContainer";
import PiecesContainer from "../components/containers/PiecesContaincer";
import AreasContainer from "../components/containers/AreasContainer";
import Login from "../components/login/Login";
import Logout from "../components/logout/Logout";


import PruebasContainer from "../components/containers/PruebasContainer";


function RoutesApp() {
    return(
        <Routes>
            <Route exact path='/' element={<Login/>}/>

            <Route exact path='/home' element={<PrivateRoutes component={HomeContainer}/>} />
            <Route exact path='/specialities' element={<PrivateRoutes component={SpecialitiesContainer}/>} />
            <Route exact path='/specialists' element={<PrivateRoutes component={SpecialistsContainer}/>} />
            <Route exact path='/patients' element={<PrivateRoutes component={PatientsContainer}/>} />
            <Route exact path='/reservations' element={<PrivateRoutes component={ReservationsContainer}/>}/>
            <Route exact path='/users' element={<PrivateRoutes component={UsersContainer}/>}/>
            <Route exact path='/pieces' element={<PrivateRoutes component={PiecesContainer}/>}/>
            <Route exact path='/areas' element={<PrivateRoutes component={AreasContainer}/>}/>
            <Route exact path='/record/:idPatient/:idSpecialist/:idReservation' element={<PrivateRoutes component={RecordContainer}/>}/>
            <Route exact path='/recordpatient/:idPatient' element={<PrivateRoutes component={RecordContainer}/>}/>
            <Route exact path='/reports' element={<PrivateRoutes component={ReportsContainer}/>}/>


            <Route exact path='/pruebas' element={<PruebasContainer/>}/>

            <Route exact path='/logout' element={<Logout/>}/>
            
        </Routes>
    )
}

export default RoutesApp