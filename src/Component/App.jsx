import React, { useState } from 'react'
import Footer from './Footer'
import Header from './Header'
import Note from './Note'
import CreateNote from './CreateNote';



export default function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote]
    })

  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;

      })
    })

  }

  return (
    <><React.StrictMode>
      <Header />
      <CreateNote onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
      </React.StrictMode>

    </>
  )
}
