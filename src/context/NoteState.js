import React, { useState } from "react";
import NoteCotext from "./NoteContext";
function NoteState(props) {
	// host
	const host = "http://localhost:5000";
	const notesInitial = [];

	const [notes, setNotes] = useState(notesInitial);

	// Add a note
	const addNote = async (title, description, tag) => {
		const response = await fetch(`${host}/api/notes/addnote`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"auth-token":
					"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI4ODkzN2Q5NjA5NWIyYjUxMjBkODM3In0sImlhdCI6MTY1MzE5OTQ2NX0.BjSk329Vd2qw4OQlgzx9tT7d-u2f65o_1btB5209b2c",
			},
			body: JSON.stringify({ title, description, tag }),
		});

		const note = {
			_id: "628e33cfe0aa7ww7b931a07c016",
			user: "6288937d96095b2b5120d837",
			title: title,
			description: description,
			tag: "crete note",
			date: "2022-05-25T13:49:03.087Z",
			__v: 0,
		};
		setNotes(notes.concat(note));
	};
	// Add a note
	const getAllNotes = async () => {
		const response = await fetch(`${host}/api/notes/fetchallnotes`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				"auth-token":
					"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI4ODkzN2Q5NjA5NWIyYjUxMjBkODM3In0sImlhdCI6MTY1MzE5OTQ2NX0.BjSk329Vd2qw4OQlgzx9tT7d-u2f65o_1btB5209b2c",
			},
		});

		const allnote = await response.json();
		setNotes(allnote);
	};

	// delete user notes
	const deleteNotes = async (id) => {
		const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
				"auth-token":
					"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI4ODkzN2Q5NjA5NWIyYjUxMjBkODM3In0sImlhdCI6MTY1MzE5OTQ2NX0.BjSk329Vd2qw4OQlgzx9tT7d-u2f65o_1btB5209b2c",
			},
			body: JSON.stringify(),
		});

		// delete user notes logic
		const newNotes = notes.filter((deleteNote) => {
			return deleteNote._id !== id;
		});
		setNotes(newNotes);
	};

	// edite notes
	const editNotes = async (id, title, description, tag) => {
		// fetch update notes API
		const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
				"auth-token":
					"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI4ODkzN2Q5NjA5NWIyYjUxMjBkODM3In0sImlhdCI6MTY1MzE5OTQ2NX0.BjSk329Vd2qw4OQlgzx9tT7d-u2f65o_1btB5209b2c",
			},
		});
		const json = response.json();

		// logic for edite notes
		for (let index = 0; index < notes.length; index++) {
			const element = notes[index];

			if (element._id == id) {
				element.title = title;
				element.description = description;
				element.tag = tag;
			}
		}
	};

	return (
		<NoteCotext.Provider value={{ notes, addNote, deleteNotes, getAllNotes }}>
			{props.children}
		</NoteCotext.Provider>
	);
}

export default NoteState;
