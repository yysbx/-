import React, { useState } from 'react';
import './App.css';
import Left from './component/Left';
import Right from './component/Right';
import Center from './component/Center'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      notebooks: [],
      currentIndex: 0,
      notes: [],
      currentNote: null
    }
  }
  componentDidMount() {
    axios.get("http://localhost:8080/notebooks").then((res) => {
      this.setState({
        notebooks: res.data
      })
      const notebook = this.state.notebooks[this.state.currentIndex]
      this.getNotes(notebook.id)
    })
  }
  getNotes(bookId) { // 根据bookId获取笔记列表
    axios.get(`http://localhost:8080/notes?bookId=${bookId}`).then((res) => {
      this.setState({
        notes: res.data
      });
    });
  }

  doNoteClick(index) {
    const notebook = this.state.notes[index];
    const noteId = notebook.id;
    axios.get(`http://localhost:8080/notes/${noteId}`).then((res) => {
      this.setState({
        currentNote: res.data
      })
    })
  }
  doNotebookClick(index) {
    this.setState({
      currentIndex: index
    })
    const notebook = this.state.notebooks[index]
    this.getNotes(notebook.id)
    this.setState({
      currentNote: null
    })
  }
  doAdd() {
    const id = parseInt(Math.random() * 100)
    const bookid = this.state.notebooks[this.state.currentIndex].id
    const note = {
      id,
      title: `新建笔记${id}`,
      content: "笔记内容",
      bookid
    }
    axios.post("http://localhost:8080/notes", note).then(() => {
      this.getNotes(bookid)
      this.setState({
        currentNote: note
      })
    })
  }
  doContentChange(e) {
    const currentNote = this.state.currentNote
    currentNote[e.target.name] = e.target.value
    this.setState({
      currentNote
    })
    const notes = this.state.notes
    notes.forEach((note, index) => {
      if (note.id === currentNote.id) {
        notes[index] = currentNote
        this.setState({
          notes
        })
      }
    })
    axios.put(`http://localhost:8080/notes/${currentNote.id}`, currentNote)
  }

  render() {
    return (
      <div className='app-container' >
        <Left notebooks={this.state.notebooks} currentIndex={this.state.currentIndex} doNoteClick={(index) => { this.doNoteClick(index) }}
          doAdd={() => { this.doAdd() }} />
        <Center notes={this.state.notes} doNoteClick={(index => { this.doNoteClick(index) })} />
        {this.state.currentNote ?
          <Right notebooks={this.state.notebooks}
            currentIndex={this.state.currentIndex}
            currentNote={this.state.currentNote}
            doContentChange={(e) => { this.doContentChange(e) }}
          /> : null
        }
      </div >
    )
  }
}


export default App;
