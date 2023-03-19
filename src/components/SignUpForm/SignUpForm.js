import { Component } from "react";
import { signUp } from "../../utilities/users-service";

export default class SignUpForm extends Component {
	// state is a POJO
	state = {
		name: "",
		email: "",
		password: "",
		confirm: "",
		error: "",
	};

	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value,
			error: "",
		});
	};

	handleSubmit = async (event) => {
		event.preventDefault();
		try {
			// taking the state, copying it and assigning it to formData
			const formData = { ...this.state };
			delete formData.error;
			delete formData.confirm;

			// wait for a response back from the user
			const user = await signUp(formData);
			this.props.setUser(user);
		} catch (error) {
			console.error(error);
			this.setState({
				error: "Sign-up failed - try again later.",
			});
		}
	};

	render() {
		const disabled = this.state.password !== this.state.confirm;

		return (
			<div className="container-sm border rounded-2 shadow-sm mb-4">
				<form autoComplete="off" onSubmit={this.handleSubmit}>
					<label>Username</label>
					<input
						className="form-control"
						type="text"
						name="name"
						value={this.state.name}
						onChange={this.handleChange}
						required
					/>
					<label>Email</label>
					<input
						className="form-control"
						type="email"
						name="email"
						value={this.state.email}
						onChange={this.handleChange}
						required
					/>
					<label>Password</label>
					<input
						className="form-control"
						type="password"
						name="password"
						value={this.state.password}
						onChange={this.handleChange}
						required
					/>
					<label>Confirm</label>
					<input
						className="form-control"
						type="password"
						name="confirm"
						value={this.state.confirm}
						onChange={this.handleChange}
						required
					/>
					<button
						className="btn btn-success mt-3"
						type="submit"
						disabled={disabled}
					>
						Sign Up
					</button>
				</form>
				<p className="error-message">{this.state.error}</p>
			</div>
		);
	}
}