import { Link } from "react-router-dom";

export default function MyAccount({ tutorial, setShowBoard, deleteTutorial }) {

	return (
		<>
			<div className="container border rounded-2 shadow-sm mt-3 mb-3 Tutorial">
				<h2>{tutorial.owner.name}</h2>
				<hr />
				<div className="title-bar">
					<h3>{tutorial.title}</h3>
				</div>
				<p className="tutorial-body">{tutorial.text}</p>
				{/* <a className="tutorial-image" href="{tutorial.image}" target="_blank" rel="noreferrer"></a> */}
				<hr />
				<button
					className="btn btn-danger mx-2 my-2 btn-sm"
					onClick={() => deleteTutorial(tutorial._id)}
				>Delete
				</button>
				<Link to={`/tutorials/${tutorial._id}`}>
					<button
						className="btn btn-primary mx-2 my-2 btn-sm"
						data-bs-toggle="modal"
						data-bs-target="#update-modal"
					>
						Update 
					</button>
				</Link>
			</div>
		</>
	);
}