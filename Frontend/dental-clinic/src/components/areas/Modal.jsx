import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useEffect, useState } from 'react';
//redux
import { useDispatch, useSelector } from 'react-redux';
import { setShow, setActionForm } from '../../redux/actions';
import FormArea from './FormArea'; //componentes
import { post, getOne, put } from '../../services/api'; // peticiones al backend


function ModalArea({id}) {
  //estados
  const show = useSelector(state => state.show)
  const actionForm = useSelector(state => state.actionForm)
  const [area, setArea] = useState({
    name: ''
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
    setArea({
      ...area,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (actionForm === 'New'){
      const result = await post('areas', token, area)
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
      const result = await put('areas', token, area)
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

  const getArea = async () => {
    const result = await getOne('areas', token, id)
    setArea(result)
  }

  useEffect(()=>{
    if (actionForm === 'View'){
      getArea()
    }
  },[id])

  return (

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {actionForm === 'New' ? 'Crear ': actionForm === 'View' ? 'Ver ': actionForm === 'Update' ? 'Actualizar ':''} Superficie
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormArea handleChange={handleChange} handleSubmit={handleSubmit} error={error} area={area}/>
        </Modal.Body>
        <Modal.Footer>
          {actionForm === 'View' ? <Button variant="primary" onClick={handleUpdate} >Actualizar</Button>: '' }
          <Button variant="secondary" onClick={handleClose} >Close</Button>
        </Modal.Footer>
      </Modal>
  );
}

export default ModalArea
