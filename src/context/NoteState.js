import React, { useState } from "react";
import NoteCotext from "./NoteContext";
function NoteState(props) {
    const notesInitial = [
        {
            _id: "628a41c55d32f2b749c3c2a29",
            user: "6288937d96095b2b5120d837",
            title: "to do list",
            description: "do coding all the time",
            tag: "list",
            date: "2022-05-22T13:59:33.233Z",
            __v: 0,
        },
        {
            _id: "628e33cfe0aa77b9313a7c016",
            user: "6288937d96095b2b5120d837",
            title: "go to watch cricket today",
            description: "me and my best friend ging to watch cricket today",
            tag: "watch cricket",
            date: "2022-05-25T13:49:03.087Z",
            __v: 0,
        },
        {
            _id: "628a41c55d3f2b749c53c2a29",
            user: "6288937d96095b2b5120d837",
            title: "to do list",
            description: "do coding all the time",
            tag: "list",
            date: "2022-05-22T13:59:33.233Z",
            __v: 0,
        },
        {
            _id: "628e33cfe0aa77b9361a7c016",
            user: "6288937d96095b2b5120d837",
            title: "go to watch cricket today",
            description: "me and my best friend ging to watch cricket today",
            tag: "watch cricket",
            date: "2022-05-25T13:49:03.087Z",
            __v: 0,
        },
        {
            _id: "628a41c55d3f2b7479c3c2a29",
            user: "6288937d96095b2b5120d837",
            title: "to do list",
            description: "do coding all the time",
            tag: "list",
            date: "2022-05-22T13:59:33.233Z",
            __v: 0,
        },
        {
            _id: "628e33cfe0aa77b9831a7c016",
            user: "6288937d96095b2b5120d837",
            title: "go to watch cricket today",
            description: "me and my best friend ging to watch cricket today",
            tag: "watch cricket",
            date: "2022-05-25T13:49:03.087Z",
            __v: 0,
        },
        {
            _id: "628a41c55d3f2b7949c3c2a29",
            user: "6288937d96095b2b5120d837",
            title: "to do list",
            description: "do coding all the time",
            tag: "list",
            date: "2022-05-22T13:59:33.233Z",
            __v: 0,
        },
        {
            _id: "628e33cfe0aa77b931a07c016",
            user: "6288937d96095b2b5120d837",
            title: "go to watch cricket today",
            description: "me and my best friend ging to watch cricket today",
            tag: "watch cricket",
            date: "2022-05-25T13:49:03.087Z",
            __v: 0,
        },
    ];

    const [notes, setNotes] = useState(notesInitial);

    // Add a note
    const addNote = (title, description, tag) => {
        const note = {
            _id: "628e33cfe0aa7ww7b931a07c016",
            user: "6288937d96095b2b5120d837",
            title: title,
            description: description,
            tag: "crete note",
            date: "2022-05-25T13:49:03.087Z",
            __v: 0,
        }
        setNotes(notes.concat(note));
    }

    return (
        <NoteCotext.Provider value={{ notes, addNote }}>
            {props.children}
        </NoteCotext.Provider>
    );
}

export default NoteState;
