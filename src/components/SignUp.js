import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const host = "http://localhost:5000";

function SignUp(props) {
	let navigate = useNavigate();
	const [userDetail, setuserDetail] = useState({
		name: "",
		email: "",
		password: "",
	});
	const handleChnage = (e) => {
		setuserDetail({ ...userDetail, [e.target.name]: e.target.value });
	};

	// handleSubmit
	const handleSubmit = async (e) => {
		e.preventDefault();
		// fetch login api
		const response = await fetch(`${host}/api/auth/createuser`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				name: userDetail.name,
				email: userDetail.email,
				password: userDetail.password,
			}),
		});

		const json = await response.json();
		if (json.success) {
			// redirect to the home
			localStorage.setItem("token", json.authtoken);
			props.showAlert("Created  Account Successfully", "success");
			navigate("/");
		} else {
			props.showAlert("Invalid Credential", "danger");
		}

		setuserDetail({
			name: "",
			email: "",
			password: "",
		});
	};
	return (
		<div className="container">
			<form onSubmit={handleSubmit}>
				<div className="mb-3">
					<label htmlFor="name" className="form-label">
						Full Name
					</label>
					<input
						type="text"
						className="form-control"
						id="name"
						onChange={handleChnage}
						name="name"
						value={userDetail.name}
						required
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="exampleInputEmail1" className="form-label">
						Email address
					</label>
					<input
						type="email"
						className="form-control"
						id="exampleInputEmail1"
						aria-describedby="emailHelp"
						onChange={handleChnage}
						name="email"
						value={userDetail.email}
						required
					/>
					<div id="emailHelp" className="form-text">
						We'll never share your email with anyone else.
					</div>
				</div>
				<div className="mb-3">
					<label htmlFor="Password" className="form-label">
						Password
					</label>
					<input
						type="password"
						className="form-control"
						id="password"
						onChange={handleChnage}
						name="password"
						value={userDetail.password}
						required
					/>
				</div>

				<button type="submit" className="btn btn-primary">
					Submit
				</button>
			</form>
		</div>
	);
}

export default SignUp;
