import React, { useContext } from "react";
import NoteContext from "../context/NoteContext";
import Notes from "./Notes";
import AddNote from "./AddNote";
function Home() {
	return (
        <>
            {/* user notes */}
			<Notes />
		</>
	);
}

export default Home;
