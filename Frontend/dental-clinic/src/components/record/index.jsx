import Patient from "./Patient"
import Appointment from "./Appointment"
import Detail from "./Detail"
import Observation from "./Observation"
import ObservationDetail from "./ObservationDetail"
import ModalPiece from "./Modal"
import { useEffect, useState } from "react"
import { Navigate, useNavigate, useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { setShow, setActionForm } from "../../redux/actions"
import { getOne, post, patch } from "../../services/api"

function Record() {
    //fecha actual
    const newDate = new Date()
    const date = newDate.getDate();
    const month = newDate.getMonth()+1;
    const year = newDate.getFullYear();
    const dateNow= `${year}-${month<10?`0${month}`:`${month}`}-${date}`
    //estados
    const [status, setStatus] = useState(true)
    const [record, setRecord] = useState({})
    const [idRecord, setIdRecord] = useState('')
    const [recordDetail, setRecordDetail] = useState([])
    const [total, setTotal] = useState(0)
    const [idUpdate, setIdUpdate] = useState('')
    const [appointment, setAppointment] = useState({
        record: '',
        observation: null,
        type_service: true,
        indication: null,
        statusTicket: true,
        statusAttendance: '1',
        specialist: null,
        specialistName: null,
        date: dateNow,
        time: null
    })
    const [appointmentDetail, setAppointmentDetail] = useState([])

    const [error, setError] = useState({
        status: false,
        message: {}
        
      })

    const {idPatient, idSpecialist, idReservation} = useParams()
    

    const show = useSelector(state => state.show)
    const actionForm = useSelector(state => state.actionForm)

    
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const token = localStorage.getItem('Token')

    //Modal
    const handleShow = (type, id, statusDetail) => {
        // console.log(id);
        dispatch(setShow(true))
        dispatch(setActionForm(type))
        setIdUpdate(id)
        setStatus(statusDetail)
    }

    const handleStatus = async (type, id) => {
        if (type){
            const result = await patch('record_detail', token, id, {status:true})
            console.log(result);
        } else {
            const result = await patch('record_detail', token, id, {status:false})
            console.log(result);
        }

    }

    const getRecord = async () => {
        const result = await getOne('searchrecord', token, idPatient)  
        if (result.status){
            setRecord(result.data[0].patient)
            setIdRecord(result.data[0].id)
        }
    }
    
    const getSpecialist = async () => {
        const result = await getOne('specialists', token, idSpecialist)
        if (result.status){
            setAppointment({
                ...appointment,
                specialist : result.id,
                specialistName : result.name
            })
        }
    }
    

    const handleChange = (event) => {
        setAppointment({
            ...appointment,
            record: idRecord,
            [event.target.name] : event.target.value
        })
    }
    console.log(appointment);

    

    const handleAppointment = async () => {
        const result = await post('appointments', token, appointment)
        console.log(result);
        if (result.status) {
            const update = await  patch('reservations', token, idReservation ,{status: false})
            if(update.status){
                navigate('/reservations')
            }
            // console.log('entro al if');
        } else {
            setError({
                ...error,
                status: true,
                message:{
                  result
                }
              })
        }
    }

    const getRecordDetail = async () => {
        const result = await getOne('recordetail', token, idRecord)
        if (result.status){
            setRecordDetail(result.data)
            setTotal(result.total)
        }
    }

    const getAppointment = async () => {
        const result = await getOne('searchappointment', token, idRecord)
        if (result.status){
            setAppointmentDetail(result.data)
        } else {
            setAppointmentDetail(null)
        }
    }

    useEffect(()=>{
        getRecord()
        getSpecialist() 
        getRecordDetail()
        getAppointment()
    },[idRecord,show])
    


    return (
        <>
        {
            show && actionForm === 'NewPiece' ? <ModalPiece date={dateNow} record={idRecord} status={status}/>:
            show && (actionForm === 'View' || actionForm === 'Update')  ? <ModalPiece date={dateNow} record={idRecord} id={idUpdate} status={status}/>: ''
            
        }
        
        <div className="container-fluid">
            <div>&nbsp;</div>
            <div className="card">
                <div className="card-header">
                    <h1 className="text-center">Ficha Odontologica</h1>
                    <h3>Datos del paciente</h3>
                    <Patient patient={record}/>
                </div>
                <div className="card-body">
                    {
                        idPatient && idSpecialist && idReservation ? 
                        <>
                            <h3>Consulta Actual</h3>
                            <Appointment handleChange={handleChange} appointment={appointment} error={error}/>                    
                            <div>&nbsp;</div>
                            <button className="btn btn-primary" onClick={()=> handleShow('NewPiece')}>Agregar Pieza</button>
                        </> : ''
                    }
                    
                    <Detail recordDetail={recordDetail} handleShow={handleShow} handleStatus={handleStatus} />
                    <h3>Total del tratamiento: Q.{total} </h3>
                </div>
                <div className="card-footer">
                    {
                        idPatient && idSpecialist && idReservation ? 
                        <>
                            <Observation handleChange={handleChange} appointment={appointmentDetail}/>
                            <div>&nbsp;</div>
                            <button onClick={handleAppointment} className="btn btn-primary">Guardar</button>
                        </> : <ObservationDetail handleChange={handleChange} appointment={appointmentDetail}/>
                    }
                    
                    
                    
                </div>
            </div>
            <div>&nbsp;</div>
        </div>
        </>
    )
}

export default Record
