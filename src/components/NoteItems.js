import React, { useContext } from "react";
import NoteContext from "../context/NoteContext";

function NoteItems(props) {
    const contaxt = useContext(NoteContext);
    const { notes } = props;
    const { deleteNotes } = contaxt;
    const { title, description } = notes;
    return (
        <div className="col-md-3">
            <div className="card my-3">
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    {/* edite icon */}
                    <i className="fa-solid fa-pen-to-square mx-2 "
                    // delete icon 
                    ></i>
                    <i className="fa-solid fa-trash-can mx-2" onClick={() => deleteNotes(notes._id)}></i>
                </div>
            </div>
        </div>
    );
}

export default NoteItems;
