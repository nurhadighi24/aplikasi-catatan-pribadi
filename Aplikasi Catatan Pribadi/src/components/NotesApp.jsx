import React from "react";
import NotesList from "./NotesList";
import { getInitialData } from "../utils";
import { showFormattedDate } from "../utils";
import NotesInput from "./NotesInput";

class NotesApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: getInitialData(),
            date: showFormattedDate(),
        }

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    }

    onDeleteHandler(id) {
        const notes = this.state.notes.filter(note => note.id !== id);
        this.setState({ notes });
    }

    onAddNoteHandler({ title, body }) {
        this.setState((prevState) => {
            return {
                notes: [
                    ...prevState.notes,
                    {
                        id: +new Date(),
                        title,
                        body,
                        createdAt: showFormattedDate(new Date()),
                        archived: false,
                    }
                ]
            }
        });
    }

    render() {
    return (
        <div className="note-app__body">
            <NotesInput addNotes={this.onAddNoteHandler}/>
            <h2>Catatan Aktif</h2>
            <NotesList notes={this.state.notes} onDelete={this.onDeleteHandler}/>
        </div>
    );
    }

}

export default NotesApp;