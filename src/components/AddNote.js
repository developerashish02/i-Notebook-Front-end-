import React, { useContext, useState } from "react";
import NoteContext from "../context/NoteContext";

function AddNote() {
    const context = useContext(NoteContext);
    const [note, setNote] = useState({ title: "", description: "", tag: "check" });
    // get the notes from context api
    const { addNote } = context;

    // handle Add notes  of the user

    // on changes
    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    };
    const handleAddnote = (e) => {
        e.preventDefault();
        addNote(note.title ,note.description);
    };
    return (
        <div className="container ">
            <h3>Add your note</h3>
            <form>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">
                        Title
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        aria-describedby="emailHelp"
                        onChange={onChange}
                        name="title"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">
                        Description
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="description"
                        onChange={onChange}
                        name="description"
                    />
                </div>

                <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={handleAddnote}
                >
                    Add Note
                </button>
            </form>
        </div>
    );
}

export default AddNote;
