import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useEffect, useState } from 'react';
//redux
import { useDispatch, useSelector } from 'react-redux';
import { setShow, setActionForm } from '../../redux/actions';
import FormReservations from './FormReservations'; //componentes
import { post, getOne, put } from '../../services/api'; // peticiones al backend

function ModalReservation({id}) {
  //estados
  const show = useSelector(state => state.show)
  const actionForm = useSelector(state => state.actionForm)
  const [reservation, setReservation] = useState({
    date: null,
    time: null,
    patient: '',
    specialist: ''
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
    setReservation({
      ...reservation,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (actionForm === 'New'){
      const result = await post('reservations', token, reservation)
      console.log(result);
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
    } else if (actionForm ==='Update'){
      const result = await put('reservations', token, reservation)
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

  const getReservation = async () => {
    const result = await getOne('reservations', token, id)
    setReservation(result)
  }

  useEffect(()=>{
    if (actionForm === 'View'){
      getReservation()
    }
  },[id])

  console.log(reservation);

  return (

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {actionForm === 'New' ? 'Crear ': actionForm === 'View' ? 'Ver ': actionForm === 'Update' ? 'Actualizar ':''} Reservación
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormReservations handleChange={handleChange} handleSubmit={handleSubmit} error={error} reservation={reservation}/>
        </Modal.Body>
        <Modal.Footer>
          {actionForm === 'View' ? <Button variant="primary" onClick={handleUpdate} >Actualizar</Button>: '' }
          <Button variant="secondary" onClick={handleClose} >Close</Button>
        </Modal.Footer>
      </Modal>
  );
}

export default ModalReservation