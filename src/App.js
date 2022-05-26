import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import NoteState from "./context/NoteState";
import Alert from "./components/Alert";

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
				</NoteState>
			</BrowserRouter>
		</div>
	);
}

export default App;
