import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useEffect, useState } from 'react';
//redux
import { useDispatch, useSelector } from 'react-redux';
import { setShow, setActionForm } from '../../redux/actions';
import AddPiece from './AddPiece'; //componente
import { post, getOne, put } from '../../services/api'; // peticiones al backend


function ModalPiece({date, record, id, status}) {

  // console.log(date);
  // console.log(record);
  // console.log(id);
  //estados
  const show = useSelector(state => state.show)
  const actionForm = useSelector(state => state.actionForm)
  
  const dispatch = useDispatch()
  const token = localStorage.getItem('Token')


  const [detail, setDetail] = useState({
    record: record,
    piece: '',
    area: '',
    diagnosis: '',
    treatment: '',
    date: date,
    cost: '',
  })
  const [error, setError] = useState({
    status: false,
    message: {}
    
  })

  //Modal
  const handleClose = () => {
    dispatch(setShow(false))
  }

  const handleUpdate = () => {
      dispatch(setActionForm('Update'))
  }

  const handleChange = (event) => {
    setDetail({
      ...detail,
      [event.target.name]: event.target.value
    })
  }

  
  const handleSubmit = async (event) => {
    event.preventDefault()

    if (actionForm === 'NewPiece'){
      const result = await post('record_detail', token, detail)
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
      const result = await put('record_detail', token, detail)
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
      
    }
  }

  const getDetailPiece = async () => {
    const result = await getOne('record_detail', token, id)
    setDetail(result)
  }

  useEffect(()=>{
    if (actionForm === 'View'){
      getDetailPiece()
    }
  },[id])

 console.log(detail);

  return (

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {/* {actionForm === 'New' ? 'Crear ': actionForm === 'View' ? 'Ver ': actionForm === 'Update' ? 'Actualizar ':''} Pieza */}
            Agregar Pieza
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddPiece handleChange={handleChange} handleSubmit={handleSubmit} detail={detail} error={error}/>
        </Modal.Body>
        <Modal.Footer>
          {actionForm === 'View' && status ? <Button variant="primary" onClick={handleUpdate} >Actualizar</Button>: '' }
          {/* {actionForm === 'View' ? <Button variant="primary" >Actualizar</Button>: '' } */}
          <Button variant="secondary" onClick={handleClose} >Close</Button>
        </Modal.Footer>
      </Modal>
  );
}

export default ModalPiece
