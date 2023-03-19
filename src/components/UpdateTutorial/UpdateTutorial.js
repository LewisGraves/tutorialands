import { useState } from "react";
import { update } from "../../utilities/tutorials-api";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./UpdateTutorial.css";

export default function UpdateTutorial({ tutorial, tutorialList }) {
	let { tutorialId } = useParams();

	let singleTutorialId = tutorialList.find((p) => p._id === tutorialId);

	const [updateTutorial, setUpdateTutorial] = useState({
		title: `${singleTutorialId.title}`,
		text: `${singleTutorialId.text}`,
		// image: `${singleTutorialId.image}`
	});

	function handleChange(event) {
		setUpdateTutorial({ ...updateTutorial, [event.target.name]: event.target.value });
	}

	async function handleSubmit(event) {
		event.preventDefault();
		try {
			const formData = { ...updateTutorial };
			await update(formData, tutorialId);
		} catch (error) {
			console.error(error);
		}
	}

	return (
		<>
			<div className="modal-body">
				<form className="update-form">
					<label className="title">Title</label>
					<input
						className="title-update"
						type="text"
						name="title"
						defaultValue={singleTutorialId.title}
						onChange={handleChange}
					/>
					<label className="text">Text</label>
					<input
						className="text-update"
						type="text"
						name="text"
						defaultValue={singleTutorialId.text}
						onChange={handleChange}
					/>
					{/* <label className="image">Image</label>
					<input
						className="image-update"
						type="text"
						name="image"
						defaultValue={singleTutorialId.image}
						onChange={handleChange}
					/> */}
				</form>
			</div>
			<div>
				<button
					className="btn btn-primary"
					type="submit"
					onClick={handleSubmit}
				>
					<Link class="updateLink" to="/tutorials">
						Update Tutorial
					</Link>
				</button>
				<button
					type="button"
					className="btn btn-danger"
					data-bs-dismiss="modal"
					aria-label="Close"
				>
					<Link class="updateLink" to="/tutorials">
						Cancel
					</Link>
				</button>
			</div>
		</>
	);
}