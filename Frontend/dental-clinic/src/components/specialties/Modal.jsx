import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useEffect, useState } from 'react';
//redux
import { useDispatch, useSelector } from 'react-redux';
import { setShow, setActionForm } from '../../redux/actions';
import FormSpeciality from './FormSpeciality'; // componente Formulario
import { post, getOne, put } from '../../services/api';



function ModalSpeciality({id}) {
  //estados
  const show = useSelector(state => state.show)
  const actionForm = useSelector(state => state.actionForm)
  const [speciality, setSpeciality] = useState({
    name:''
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
    setSpeciality({
      ...speciality,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (actionForm === 'New'){
      const result = await post('specialities', token, speciality)
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
      const result = await put('specialities', token, speciality)
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

  const getSpeciality = async () => {
    const result = await getOne('specialities', token, id)
    setSpeciality(result)
  }

  useEffect(()=>{
    if (actionForm === 'View'){
      getSpeciality()
    }
  },[id])

  return (

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {actionForm === 'New' ? 'Crear ': actionForm === 'View' ? 'Ver ': actionForm === 'Update' ? 'Actualizar ':''} Especilalidad
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormSpeciality handleChange={handleChange} handleSubmit={handleSubmit} error={error} speciality={speciality}/>
        </Modal.Body>
        <Modal.Footer>
          {actionForm === 'View' ? <Button variant="primary" onClick={handleUpdate} >Actualizar</Button>: '' }
          <Button variant="secondary" onClick={handleClose} >Close</Button>
        </Modal.Footer>
      </Modal>
  );
}

export default ModalSpeciality