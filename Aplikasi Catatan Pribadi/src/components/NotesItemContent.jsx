import React from "react";
import NotesItemBody from "./NotesItembody";
import NotesItemTitle from "./NotesItemTitle";


function NotesItemContent({ body, title, createdAt }) {
    return (
        <div className="note-item__content">
            <NotesItemTitle title={title} createdAt={createdAt}/>
            <NotesItemBody body={body}/>
        </div>
    )
}

export default NotesItemContent;