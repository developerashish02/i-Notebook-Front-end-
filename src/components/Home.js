import React, { useContext } from "react";
import NoteContext from "../context/NoteContext";
import Notes from "./Notes";
import AddNote from "./AddNote";
function Home(props) {
	return (
        <>
            {/* user notes */}
			<Notes showAlert={props.showAlert} />
		</>
	);
}

export default Home;
