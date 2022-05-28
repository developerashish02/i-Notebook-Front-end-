import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import NoteState from "./context/NoteState";
import Alert from "./components/Alert";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<NoteState>
					<Navbar />
					<Alert />
					<div className="container">
						<Routes>
							<Route exact path="/" element={<Home />} />
						</Routes>
					</div>
					<Routes>
						<Route exact path="/login" element={<Login />} />
					</Routes>
					<Routes>
						<Route exact path="/signup" element={<SignUp />} />
					</Routes>
				</NoteState>
			</BrowserRouter>
		</div>
	);
}

export default App;
