import MyAccount from "../../components/MyAccount/MyAccount";
import { useEffect, useState } from "react";
import { indexMyAccount } from "../../utilities/tutorials-api";
import { useParams } from "react-router-dom";
import { removeTutorial } from "../../utilities/tutorials-api";

export default function MyAccountPage() {
	const { userId } = useParams();

	const [showBoard, setShowBoard] = useState([]);

	useEffect(() => {
		indexMyAccount(userId)
			.then((res) => res.json())
			.then((resData) => setShowBoard(resData.tutorials));
	}, []);

	function deleteTutorial(id) {
		removeTutorial(id)
			.then(() => {
				return indexMyAccount();
			})
			.then((res) => res.json())
			.then((resData) => setShowBoard(resData.tutorials));
	}

	if (showBoard === undefined) {
		return <h1>Loading...</h1>;
	}
	const tutorialMap = showBoard.map((tutorial, index) => (
		<MyAccount
			tutorial={tutorial}
			key={index}
			deleteTutorial={deleteTutorial}
			indexMyAccount={indexMyAccount}
			setShowBoard={setShowBoard}
		/>
	));

	return (
		<div className="container-sm">
			<h1 className="my-2">My Account</h1>
			{tutorialMap}
		</div>
	);
}