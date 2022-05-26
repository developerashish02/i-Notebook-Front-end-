import React, { useContext, useState } from "react";
import NoteContext from "../context/NoteContext";
import AddNote from "./AddNote";
import NoteItems from "./NoteItems";

function Notes() {
    const context = useContext(NoteContext);
    const { notes, addNote } = context;
    return (
        <>
            <AddNote />
            <div className="row">
                <h2>Your Notes</h2>
                {notes.map((notes) => {
                    return <NoteItems notes={notes} key={notes._id} />;
                })}
            </div>
        </>
    );
}

export default Notes;
