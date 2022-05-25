import React from "react";
import NoteCotext from "./NoteContext";
function NoteState(props) {
    return <NoteCotext.Provider value={{}}>{props.children}</NoteCotext.Provider>;
}

export default NoteState;
