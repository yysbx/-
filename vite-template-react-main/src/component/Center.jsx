import React from "react";

class Center extends React.Component {
    doNoteClick(index) {
        this.props.doNoteClick(index);
    }

    render() {
        return (
            <div className="app-center">
                <div className="app-center-header">笔记列表</div>
                <ul className="app-center-list"></ul>
                {this.props.notes.map((note, index) => {
                    return (
                        <li key={note.id}>
                            <div className="app-center-list-item">
                                <div className="note-header">{note.title}</div>
                                <div className="note-content"><pre>{note.content}</pre></div>
                            </div>
                        </li>
                    )
                })}
                <li key={note.id}
                    onClick={() => { this.doNoteClick(index) }}
                />
            </div>
        )
    }
}
export default Center