import React, { useContext } from "react";
import NoteContext from "../context/NoteContext";

function NoteItems(props) {
	const contaxt = useContext(NoteContext);
	const { notes, updateNote } = props;
	const { deleteNotes } = contaxt;
	const { title, description, tag } = notes;

	const handleUpdate = () => {
		// call delete note function in note context api
		deleteNotes(notes._id);
		// show alert
		props.showAlert("Delete Note Successfully", "success");
	};
	return (
		<div className="col-md-3">
			<div className="card my-3">
				<div className="card-body">
					<h5 className="card-title"> Title: {title}</h5>
					<p className="card-text">Description: {description}</p>
					{/* edite icon */}
					<p className="card-text">Tag: {tag}</p>
					{/* edite icon */}
					<i
						className="fa-solid fa-pen-to-square mx-2 "
						onClick={() => {
							updateNote(notes);
						}}
					></i>

					<i className="fa-solid fa-trash-can mx-2" onClick={handleUpdate}></i>
				</div>
			</div>
		</div>
	);
}

export default NoteItems;
