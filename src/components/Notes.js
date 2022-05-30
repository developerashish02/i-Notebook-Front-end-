import React, { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import NoteContext from "../context/NoteContext";
import AddNote from "./AddNote";
import NoteItems from "./NoteItems";

function Notes(props) {
	const navigate = useNavigate();
	const context = useContext(NoteContext);
	const { notes, getAllNotes, editNotes } = context;
	const ref = useRef(null);
	const closeRef = useRef(null);
	// get all notes
	useEffect(() => {
		if (localStorage.getItem("token")) {
			getAllNotes();
		} else {
			navigate("/login");
		}
	}, []);

	const [note, setNote] = useState({
		id: "",
		edit_title: "",
		edit_description: "",
		edit_tag: "",
	});
	// update note
	const updateNote = (currentNote) => {
		ref.current.click();
		setNote({
			id: currentNote._id,
			edit_title: currentNote.title,
			edit_description: currentNote.description,
			edit_tag: currentNote.tag,
		});
	};

	const onChange = (e) => {
		setNote({ ...note, [e.target.name]: e.target.value });
	};

	const handleEditNote = (e) => {
		editNotes(note.id, note.edit_title, note.edit_description, note.edit_tag);
		closeRef.current.click();
		props.showAlert(" Edit Note Successfully", "success");
	};

	return (
		<>
			<AddNote showAlert={props.showAlert} />
			{/* edite note modal */}

			<button
				type="button"
				className="btn btn-primary d-none"
				data-bs-toggle="modal"
				data-bs-target="#exampleModal"
				ref={ref}
			></button>

			<div
				className="modal fade"
				id="exampleModal"
				tabIndex="-1"
				aria-labelledby="exampleModalLabel"
				aria-hidden="true"
			>
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" id="exampleModalLabel">
								Edite Note
							</h5>
							<button
								type="button"
								className="btn-close"
								data-bs-dismiss="modal"
								aria-label="Close"
							></button>
						</div>
						<div className="modal-body">
							{/* modal form  */}
							<form>
								<div className="mb-3">
									<label htmlFor="edit_title" className="form-label">
										Title
									</label>
									<input
										type="text"
										className="form-control"
										id="edit_title"
										onChange={onChange}
										name="edit_title"
										value={note.edit_title}
										minLength={3}
										required
									/>
								</div>

								<div className="mb-3">
									<label htmlFor="edit_description" className="form-label">
										Description
									</label>
									<input
										type="text"
										className="form-control"
										id="edit_description"
										onChange={onChange}
										name="edit_description"
										value={note.edit_description}
										minLength={5}
										required
									/>
								</div>

								<div className="mb-3">
									<label htmlFor="edit_tag" className="form-label">
										Tag
									</label>
									<input
										type="text"
										className="form-control"
										id="edit_tag"
										onChange={onChange}
										name="edit_tag"
										value={note.edit_tag}
									/>
								</div>
							</form>
						</div>
						<div className="modal-footer">
							<button
								type="button"
								className="btn btn-secondary"
								data-bs-dismiss="modal"
								ref={closeRef}
							>
								Close
							</button>
							<button
								disabled={
									note.edit_title.length < 3 || note.edit_description.length < 5
								}
								type="button"
								className="btn btn-primary"
								onClick={handleEditNote}
							>
								Edit Note
							</button>
						</div>
					</div>
				</div>
			</div>
			<div className="container">
				<div className="row">
					<h2 className="text-center fw-bold">Your I-Notes</h2>
					{/* when notes array is empty  */}
					<div className="container mx-2">
						{notes.length === 0 && "No Notes to display"}
					</div>
					{notes.map((notes) => {
						return (
							<NoteItems
								notes={notes}
								key={notes._id}
								updateNote={updateNote}
								showAlert={props.showAlert}
							/>
						);
					})}
				</div>
			</div>
		</>
	);
}

export default Notes;
