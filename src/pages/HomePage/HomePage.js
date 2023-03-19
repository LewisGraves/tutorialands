import { useEffect, useState } from "react";
import CreateTutorial from "../../components/CreateTutorial/CreateTutorial";
import { index, removeTutorial } from "../../utilities/tutorials-api";
import Tutorial from "../../components/Tutorial/Tutorial";
import "./HomePage.css";

export default function HomePage({ user }) {
	const [showForm, setShowForm] = useState(false);

	function toggleFormVisiblity() {
		setShowForm(!showForm);
	}

	// this state stores all tutorials in the DB
	const [tutorialArr, setTutorialArr] = useState([]);

	// this makes the index call every time the HomePage mounts
	useEffect(() => {
		index()
			.then((res) => res.json())
			.then((resData) => setTutorialArr(resData.tutorials));
	}, []);

	// this function handles the tutorial delete button
	function deleteTutorial(id) {
		removeTutorial(id)
			.then(() => {
				return index();
			})
			.then((res) => res.json())
			.then((resData) => setTutorialArr(resData.tutorials));
	}

	// this maps each tutorial component out with the tutorial data from state
	const tutorialMap = tutorialArr.map((tutorial, index) => (
		<Tutorial
			tutorial={tutorial}
			key={index}
			deleteTutorial={deleteTutorial}
			setTutorialArr={setTutorialArr}
			user={user}
		/>
	));

	return (
		<div className="container-sm">
			<h1 className="my-2">Home</h1>
			<button className="btn btn-info my-2" onClick={toggleFormVisiblity}>
				New Tutorial 
			</button>
			{showForm && (
				<CreateTutorial
					toggleFormVisiblity={toggleFormVisiblity}
					setTutorialArr={setTutorialArr}
				/>
			)}
			{tutorialMap}
		</div>
	);
}