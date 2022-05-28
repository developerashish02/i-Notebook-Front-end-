import React, { useContext, useState } from "react";
import NoteContext from "../context/NoteContext";

function AddNote() {
    const context = useContext(NoteContext);
    const [note, setNote] = useState({ title: "", description: "", tag: "" });
    // get the notes from context api
    const { addNote } = context;

    // on changes
    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value });
    };
    const handleAddnote = (e) => {
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
        setNote({ title: "", description: "", tag: "" })
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
                        minLength={3}
                        required
                        value={note.title}
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
                        minLength={5}
                        required
                        value={note.description}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="tag" className="form-label">
                        Tag
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="tag"
                        onChange={onChange}
                        name="tag"
                        value={note.tag}
                    />
                </div>
                <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={handleAddnote}
                    disabled={note.title.length < 3 || note.description.length < 5}
                >
                    Add Note
                </button>
            </form>
        </div>
    );
}

export default AddNote;
