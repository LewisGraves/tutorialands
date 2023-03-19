import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { getUser } from "../../utilities/users-service";
import AuthPage from "../AuthPage/AuthPage";
import HomePage from "../HomePage/HomePage";
import UpdateTutorial from "../../components/UpdateTutorial/UpdateTutorial";
import NavBar from "../../components/NavBar/NavBar";
import "./App.css";
import { index } from "../../utilities/tutorials-api";
import MyAccountPage from "../MyAccount/MyAccountPage";

function App() {
	const [user, setUser] = useState(getUser());

	const [tutorialList, setTutorialList] = useState([]);

	useEffect(() => {
		index()
			.then((res) => res.json())
			.then((resData) => setTutorialList(resData.tutorials));
	}, []);

	return (
		<main className="App">
			{user ? (
				<>
					<NavBar user={user} setUser={setUser} />
					<Routes>
						<Route path="/" element={<HomePage user={user} />} />
						<Route path="/tutorials" element={<HomePage user={user} />} />
						<Route
							path="/tutorials/:tutorialId"
							element={<UpdateTutorial tutorialList={tutorialList} />}
						/>
						<Route
							path="/myaccount/:userId"
							element={<MyAccountPage user={user} />}
						/>
					</Routes>
				</>
			) : (
				<AuthPage setUser={setUser} user={user} />
			)}
		</main>
	);
}

export default App;