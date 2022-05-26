import React from "react";

function NoteItems(props) {
    const { notes } = props;
    const { title, description } = notes;
    console.log(props);
    return (
        <div className="col-md-3">
            <div className="card my-3">
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <i className="fa-solid fa-pen-to-square mx-2"></i>
                    <i className="fa-solid fa-trash-can mx-2"></i>
                </div>
            </div>
        </div>
    );
}

export default NoteItems;
