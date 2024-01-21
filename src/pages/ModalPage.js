import { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

function ModalPage(){

    //modal vsibility state
    const [showModal, setShowModal] = useState(false);

    //handleClick event for nodal visibility
    const handleClick = ()=>{
        setShowModal(true);
    }

    //handleClose event handler for closing the modal when clicked on gray area
    const handleClose = ()=>{
        setShowModal(false);
    }

    //action bar element for the modal element
    const actionBar = <Button onClick={handleClose} primary rounded>I Agree</Button>

    //modal element
    const modal = <Modal onClose={handleClose} actionBar={actionBar}>
        <p>Do you agree with the modal window?</p>
    </Modal>

    return (
        <div className="relative">
            <Button onClick={handleClick} primary rounded>Show Modal</Button>
            {showModal && modal}
        </div>
    )
}

export default ModalPage;