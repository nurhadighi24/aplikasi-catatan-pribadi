import React from "react";
import NotesItem from "./NotesItem";

function NotesList({ notes, onDelete }) {
    return (
        <div className="notes-list">
            {notes.length === 0 ? (
                <p className="notes-list__empty-message">Tidak ada catatan...</p>
            ) :
            (
                notes.map((note) => (
                    <NotesItem key={note.id} id={note.id} onDelete={onDelete} {...note} />
                ))
            )}
        </div>
    );
}

export default NotesList;