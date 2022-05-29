import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Navbar() {
	const location = useLocation();
	const neviagte = useNavigate();

	// handlelogout
	const handleLogout = () => {
		localStorage.removeItem("token");
		neviagte("/login");
	};
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
							<Link
								className={`nav-link ${
									location.pathname === "/" ? "active" : ""
								}`}
								aria-current="page"
								to="/"
							>
								{location.pathname === "/login" ||
								location.pathname === "/signup"
									? ""
									: "Home"}
							</Link>
						</li>
						<li className="nav-item">
							<Link
								className={`nav-link ${
									location.pathname === "/about" ||
									location.pathname === "/signup"
										? "active"
										: ""
								}`}
								to="/about"
							>
								{location.pathname === "/login" ||
								location.pathname === "/signup"
									? ""
									: "About"}
							</Link>
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
						<button className="btn btn-primary" onClick={handleLogout}>
							Log out
						</button>
					)}
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
