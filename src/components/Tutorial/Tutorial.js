import { Link } from "react-router-dom";
import { useState } from "react";
import { index } from "../../utilities/tutorials-api";
import "./Tutorial.css";
import UpdateModal from "../UpdateTutorial/UpdateModal";

export default function Tutorial({ tutorial, deleteTutorial, setTutorialArr, user }) {

	const [isTutorialOwned, setIsTutorialOwned] = useState(
		tutorial.owner._id === user._id ? true : false
	);

	return (
		<>
			{isTutorialOwned ? (
				<>
					<div className="container border rounded-2 shadow-sm mt-3 mb-3 Tutorial">
						<h4>{tutorial.owner.name}</h4>
						<hr />
						<div className="title-bar">
							<h3>{tutorial.title}</h3>
						</div>
						<p className="tutorial-body">{tutorial.text}</p>
						<a className="tutorial-link" href={tutorial.link} target="_blank" rel="noreferrer"></a>
						<hr />
						<button
							className="btn btn-danger mx-2 my-2 btn-sm"
							onClick={() => deleteTutorial(tutorial._id)}
						>Delete
						</button>
						<Link to={`/tutorials/${tutorial._id}`}>
							<UpdateModal />
						</Link>
					</div>
				</>
			) : (
				<>
					<div className="container border rounded-2 shadow-sm mt-3 mb-3 Tutorial">
						<h2>{tutorial.owner.name}</h2>
						<hr />
						<div className="title-bar">
							<h3>{tutorial.title}</h3>
						</div>
						<p className="tutorial-body">{tutorial.text}</p>
						<a className="tutorial-link" href={tutorial.link} target="_blank" rel="noreferrer"></a>
						<hr />
					</div>
				</>
			)}
		</>
	);
}