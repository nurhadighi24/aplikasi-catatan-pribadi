import React from "react";
import NotesItemContent from "./NotesItemContent";
import NotesItemAction from "./NotesItemAction";

function NotesItem({ body, title, createdAt, id, onDelete }) {

    return (
        <div className="note-item">
            <NotesItemContent body={body} title={title} createdAt={createdAt}/>
            <NotesItemAction id={id} onDelete={onDelete}/>
        </div>
    )
}

export default NotesItem;
