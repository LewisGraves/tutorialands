import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import UpdateTutorial from "./UpdateTutorial";

function UpdateTutorialModal() {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<>
			<Button className="btn-sm" variant="primary" onClick={handleShow}>
				Update
			</Button>

			<Modal
				show={show}
				onHide={handleClose}
				backdrop="static"
				keyboard={false}
			>
				<Modal.Header>
					<Modal.Title>Update</Modal.Title>
					<h5>Update Tutorial</h5>
				</Modal.Header>
				<Modal.Body>
					<UpdateTutorial />
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
					<Button variant="primary">Understood</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}

export default UpdateTutorialModal;