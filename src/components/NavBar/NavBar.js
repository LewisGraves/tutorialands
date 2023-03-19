import { Link } from "react-router-dom";
import { useState } from "react";
import * as userService from "../../utilities/users-service";
import "./NavBar.css";

export default function NavBar({ user, setUser }) {
	const [navMenu, setNavMenu] = useState(false);

	function handleLogOut() {
		userService.logOut();
		setUser(null);
	}
	return (
		<>
			<nav className="nav navbar navbar-static-top d-flex" role="navigation">
				<div className="logo justify-content-start">
					<div className="nav-link text-white" id="logo-name">
						TutoriaLands
					</div>
				</div>
				<div className="menu-container justify-content-end">
					<div className="navbar-menu">
						<button
							type="button"
							className="btn btn-secondary dropdown-toggle"
							data-toggle="dropdown"
							aria-haspopup="true"
							aria-expanded="false"
							id="collapse"
							onClick={() => setNavMenu((prevState) => !prevState)}
						>
						</button>
					</div>
				</div>
			</nav>
			{navMenu ? (
				<div
					className="menuLink collaspe navbar-collaspe"
					id="bs-example-navbar-collaspe-1"
				>
					<ul className="nav navbar-nav">
						<li>
							<Link className="nav-link text-white" to="/tutorials">
								Home 
							</Link>
						</li>
						<li>
							<Link className="nav-link text-white" to={`/myaccount/${user._id}`}>
								My Account 
							</Link>
						</li>
						<li>
							<Link
								className="nav-link text-white"
								to=""
								onClick={handleLogOut}
							>
								Log Out 
							</Link>
						</li>
					</ul>
				</div>
			) : (
				<></>
			)}
			<span className="mt-3">Welcome, {user.name}</span>
		</>
	);
}