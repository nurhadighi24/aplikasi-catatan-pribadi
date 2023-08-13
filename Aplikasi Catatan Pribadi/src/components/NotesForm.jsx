import React from "react";

class NotesForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            body: '',
        }

        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onTitleChangeEventHandler(event) {
        this.setState(() => {
            return {
                title: event.target.value,
            }
        });
    }

    onBodyChangeEventHandler(event) {
        this.setState(() => {
            return {
                body: event.target.value,
            }
        });
    }

    onSubmitEventHandler(event) {
        event.preventDefault();
        this.props.addNotes(this.state);
    }

    render() {
        return (
            <form onSubmit={this.onSubmitEventHandler}>
                <input type="text" className="note-input__title" placeholder="Ini adalah judul..." value={this.state.title} onChange={this.onTitleChangeEventHandler}/>
                <textarea className="note-input__body" placeholder="Tuliskan catatanmu di sini..." value={this.state.body} onChange={this.onBodyChangeEventHandler}></textarea>
                <button type="submit">Buat</button>
            </form>
        )
    }
}

export default NotesForm;