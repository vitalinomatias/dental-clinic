import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useEffect, useState } from 'react';
//redux
import { useDispatch, useSelector } from 'react-redux';
import { setShow, setActionForm } from '../../redux/actions';
import FormPatient from './FormPatient'; //componentes
import { post, getOne, put } from '../../services/api'; // peticiones al backend


function ModalPatient({id}) {
  //estados
  const show = useSelector(state => state.show)
  const actionForm = useSelector(state => state.actionForm)
  const [patient, setPatient] = useState({
    cui:'',
    firts_name:'',
    last_name:'',
    birthday: null,
    age: '',
    career: '',
    year: null,
    residence: '',
    fono: '',
    prevision: ''
  })
  const [error, setError] = useState({
    status: false,
    message: {}
    
  })

  const dispatch = useDispatch()
  const token = localStorage.getItem('Token')

  //Modal
  const handleClose = () => {
    dispatch(setShow(false))
  }

  const handleUpdate = () => {
      dispatch(setActionForm('Update'))
  }

  const handleChange = (event) => {
    setPatient({
      ...patient,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (actionForm === 'New'){
      const result = await post('patients', token, patient)
      if (result.status){
        const recordStatus = await getOne('searchrecord', token, result.data.id)
        if (!recordStatus.status){
          await post('records', token, {patient: result.data.id})
        }
        dispatch(setShow(false))
      } else{
        setError({
          ...error,
          status: true,
          message:{
            result
          }
        })
      }
    } else if (actionForm ==='Update'){
      const result = await put('patients', token, patient)
      if (result.status){
        dispatch(setShow(false))
      } else{
        setError({
          ...error,
          status: true,
          message:{
            result
          }
        })
      }
      
    }
  }

  const getPatient = async () => {
    const result = await getOne('patients', token, id)
    setPatient(result)
  }

  useEffect(()=>{
    if (actionForm === 'View'){
      getPatient()
    }
  },[id])


  return (

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {actionForm === 'New' ? 'Crear ': actionForm === 'View' ? 'Ver ': actionForm === 'Update' ? 'Actualizar ':''} Paciente
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormPatient handleChange={handleChange} handleSubmit={handleSubmit} error={error} patient={patient}/>
        </Modal.Body>
        <Modal.Footer>
          {actionForm === 'View' ? <Button variant="primary" onClick={handleUpdate} >Actualizar</Button>: '' }
          <Button variant="secondary" onClick={handleClose} >Close</Button>
        </Modal.Footer>
      </Modal>
  );
}

export default ModalPatient