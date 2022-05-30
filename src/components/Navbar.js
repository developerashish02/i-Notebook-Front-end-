import React from "react";
import { Link, useLocation, } from "react-router-dom";

function Navbar() {
	const location = useLocation();

	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<div className="container-fluid">
				<Link className="navbar-brand fw-bold fs-4" to="/">
					iNotebook
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							{localStorage.getItem("token") ? (
								<Link
									className={`nav-link ${location.pathname === "/" ? "active" : ""
										}`}
									aria-current="page"
									to="/"
								>
									Home
								</Link>
							) : (
								""
							)}
						</li>
					</ul>

					{!localStorage.getItem("token") ? (
						<form className="d-flex " role="search">
							<Link className="btn btn-primary mx-2" to="/signup" role="button">
								Sign Up
							</Link>
							<Link className="btn btn-primary" to="/login" role="button">
								Login
							</Link>
						</form>
					) : (
						""
					)}

					{/* user profile */}
					{localStorage.getItem("token") ? (
						<Link to="/userprofile">
							<img
								src="https://cdn-icons-png.flaticon.com/128/236/236832.png"
								style={style}
								className="mx-2"
							/>
						</Link>
					) : (
						""
					)}
				</div>
			</div>
		</nav>
	);
}

const style = {
	height: "40px",
	width: "40",
	cursor: "pointer",
};
export default Navbar;
