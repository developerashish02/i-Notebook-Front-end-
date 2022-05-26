import React, { useContext, useState } from "react";
import NoteContext from "../context/NoteContext";
import NoteItems from "./NoteItems";

function Notes() {
	const context = useContext(NoteContext);
	const { notes, setNotes } = context;
	return (
		<div className="row">
				<h2>Your Notes</h2>
				{notes.map((notes) => {
					return <NoteItems notes={notes} />;
				})}
		</div>
	);
}

export default Notes;
