import React from "react";
import NotesForm from "./NotesForm";

function NotesInput(props)  {
    
    return (
        <div className="note-input">
            <h2>Buat Catatan</h2>
            <NotesForm addNotes={props.addNotes}/>
        </div>
    )
}


export default NotesInput;