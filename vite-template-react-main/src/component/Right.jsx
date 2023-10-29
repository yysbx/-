import React from "react";
import "github-markdown-css"

class Right extends React.Component {

    doContentChange(e) {
        this.props.doContentChange(e)
    }
    render() {
        return (
            <div className="app-right">
                <div className="app-right-header">
                    <i className="iconfont icon-bijiben1"></i>
                    <span className="notebookName">{this.props.notebooks[this.props.currentIndex].name}</span>
                </div>
                <input className="app-right-title" name="title" value={this.props.currentNote.title}></input>
                <div className="app-right-content">
                    <textarea className="app-right-edit" name="content" value={this.props.currentNote.content} />
                    <div className="app-right-show">
                        {this.props.currentNote.content}
                    </div>
                </div>
                <div className="app-right-show markdown-body"
                    dangerouslySetInnerHTML={{ __html: marked(this.props.currentNote.content) }} />
                <input className="app-right-title" name="title" value={this.props.currentNote.title} onChange={(e) => { this.doContentChange(e) }} />
                <textarea className="app-right-edit" name="content" value={this.props.currentNote.content} onChange={(e) => { this.doContentChange(e) }} />
            </div>
        )
    }
}
export default Right