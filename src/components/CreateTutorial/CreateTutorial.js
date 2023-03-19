import { useState } from "react";
import { create, index } from "../../utilities/tutorials-api";

export default function CreateTutorial({ toggleFormVisiblity, setTutorialArr }) {
	const [tutorial, setTutorial] = useState({
		title: "",
		text: "",
		// image: "",
	});

	function handleChange(event) {
		setTutorial({
			...tutorial,
			[event.target.name]: event.target.value,
		});
	}

	async function handleSubmit(event) {
		event.preventDefault();
		try {
			const formData = { ...tutorial };
			await create(formData)
				.then(() => {
					return index();
				})
				.then((res) => res.json())
				.then((resData) => setTutorialArr(resData.tutorials));
			toggleFormVisiblity();
		} catch (error) {
			console.error(error);
		}
	}

	return (
		<>
			<form>
				<div className="form-floating">
					<input
						className="form-control"
						type="text"
						name="title"
						placeholder="Add Title"
						value={tutorial.title}
						onChange={handleChange}
					/>
					<label className="form-label">Title</label>
				</div>
				<div className="form-floating">
					<textarea
						className="form-control"
						placeholder="Add Text"
						name="text"
						value={tutorial.content}
						onChange={handleChange}
					/>
					<label className="form-label">Text</label>
				</div>
				{/* <div className="form-floating">
					<textarea
						className="form-control"
						placeholder="Add Image URL"
						name="image"
						value={tutorial.image}
						onChange={handleChange}
					/>
					<label className="form-label">Image</label>
				</div> */}
				<button
					className="btn btn-primary mt-3 mb-3"
					type="submit"
					onClick={handleSubmit}
				>
					Create Tutorial
				</button>
			</form>
		</>
	);
}