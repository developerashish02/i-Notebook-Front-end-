import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import NoteState from "./context/NoteState";
import Alert from "./components/Alert";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import { useState } from "react";

function App() {
	const [alert, setAlert] = useState(null);
	// Alert
	const showAlert = (message, type) => {
		setAlert({
			msg: message,
			type: type,
		});

		setTimeout(() => {
			setAlert(null);
		}, 2000);
	};
	return (
		<div className="App">
			<BrowserRouter>
				<NoteState>
					<Navbar />
					<Alert alert={alert} />
					<Routes>
						<Route exact path="/" element={<Home showAlert={showAlert} />} />

						<Route
							exact
							path="/login"
							element={<Login showAlert={showAlert} />}
						/>

						<Route
							exact
							path="/signup"
							element={<SignUp showAlert={showAlert} />}
						/>
					</Routes>
				</NoteState>
			</BrowserRouter>
		</div>
	);
}

export default App;
