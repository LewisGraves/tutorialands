import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LoginForm from "../../components/LoginForm/LoginForm";
import "./AuthPage.css";
export default function AuthPage({ setUser, user }) {
	return (
		<>
			<div className="nav d-flex justify-content-center">
				<div className="logo">
					TutoriaLands
				</div>
			</div>
			<div className="container-sm px-0 mt-5">
				<SignUpForm setUser={setUser} user={user} />
			</div>
			<div className="container-sm px-0 ">
				<LoginForm setUser={setUser} user={user} />
			</div>
		</>
	);
}