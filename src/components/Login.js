import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const host = "http://localhost:5000";
function Login(props) {
	let navigate = useNavigate();
	const [credential, SetCredential] = useState({ email: "", password: "" });
	// on changes
	const onChange = (e) => {
		SetCredential({ ...credential, [e.target.name]: e.target.value });
	};
	// handleSubmit
	const handleSubmit = async (e) => {
		e.preventDefault();
		// fetch login api
		const response = await fetch(`${host}/api/auth/login`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				email: credential.email,
				password: credential.password,
			}),
		});

		const json = await response.json();
		// login success
		if (json.success) {
			// redirect to the home
			props.showAlert("Login Successfully", "success");
			const auth = json.authToken;
			localStorage.setItem("token", auth);
			navigate("/");
		}
		// show Alert for invalid credential
		else {
			props.showAlert("Invalid Credential", "danger");
		}

		// reset the values
		SetCredential({ email: "", password: "" });
	};
	return (
		<div className="container align-items-center justify-content-center d-flex ">
			<form onSubmit={handleSubmit} className="border border-dark px-5 py-4 rounded-2"	>
				<h3 className="text-center mt-2 fw-light" >Login In </h3>
				<div className="mb-3">
					<label htmlFor="email" className="form-label">
						Email address
					</label>
					<input
						type="email"
						className="form-control"
						id="email"
						aria-describedby="emailHelp"
						name="email"
						onChange={onChange}
						value={credential.email}
						required
					/>
					<div id="emailHelp" className="form-text">
						We'll never share your email with anyone else.
					</div>
				</div>
				<div className="mb-3">
					<label htmlFor="password" className="form-label">
						Password
					</label>
					<input
						type="password"
						className="form-control"
						id="password"
						onChange={onChange}
						value={credential.password}
						name="password"
						required
					/>
				</div>
				<button type="submit" className="btn btn-primary container align-items-center justify-content-center my-2">
					Submit
				</button>
			</form>
		</div>
	);
}

export default Login;
