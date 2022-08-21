import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import MapboxMap from "./map";



export default function EventoCor(props) {
    const evento = props.evento;
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div className="d-flex text-muted pt-3">

                <svg className="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32"
                     height="32" xmlns="http://www.w3.org/2000/svg" role="img"
                     aria-label="Placeholder: 32x32" preserveAspectRatio="xMidYMid slice"
                     focusable="false" onClick={handleShow}><title>Placeholder</title>
                    <rect width="100%" height="100%" fill={(evento.status == 'FECHADO') ? '#21e30b' : '#e83e8c'}/>
                    <text x="50%" y="50%" fill={(evento.status == 'FECHADO') ? '#21e30b' : '#e83e8c'} dy=".3em">32x32
                    </text>
                </svg>

                <p className="pb-3 mb-0 small lh-sm border-bottom">
                    <span className='d-none'>{evento?.id}</span>
                    <strong className="d-block text-gray-dark">{evento?.titulo}</strong>
                    <strong className="d-block text-gray-dark">{evento?.gravidade}</strong>
                    <strong className="d-block text-gray-dark">{evento?.bairro}</strong>
                    <span
                        className="d-block text-gray-dark">Abertura: {new Date(evento?.inicio).toLocaleString('pt-BR')}</span>
                    <span
                        className="d-block text-gray-dark">{!evento?.fim ? '' : `Fim: ${new Date(evento?.fim).toLocaleString('pt-BR')}`}</span>
                    {evento?.descricao}
                </p>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{evento?.titulo}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <span className="d-block text-gray-dark">Bairro: {evento?.bairro}</span>
                    <span
                        className="d-block text-gray-dark">Aberto: {new Date(evento?.inicio).toLocaleString('pt-BR')}</span>
                    {!evento?.fim ? '' :
                        (<span
                            className="d-block text-gray-dark">Fechado: {new Date(evento?.fim).toLocaleString('pt-BR')} </span>)
                    }
                    <span className="d-block text-gray-dark">Prazo: {evento?.prazo}</span>
                    <span className="d-block text-gray-dark">Descrição: {evento?.descricao}</span>
                    <span className="d-block text-gray-dark">Gravidade: {evento?.gravidade}</span>
                    <MapboxMap latitude={evento.latitude} longitude={evento.longitude}/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    {/*<Button variant="primary" onClick={handleClose}>*/}
                    {/*    Save Changes*/}
                    {/*</Button>*/}
                </Modal.Footer>
            </Modal>
        </>
    )
}