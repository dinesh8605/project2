// Notes.js
import React, { useState } from 'react';
import { useNoteContext } from './NoteContext';

const Notes = () => {
  const { state, dispatch } = useNoteContext();
  const [newNote, setNewNote] = useState('');

  const addNote = () => {
    if (newNote) {
      dispatch({ type: 'ADD_NOTE', payload: { id: Date.now(), content: newNote } });
      setNewNote('');
    }
  };

  const editNote = (id, content) => {
    dispatch({ type: 'EDIT_NOTE', payload: { id, content } });
  };

  const deleteNote = (id) => {
    dispatch({ type: 'DELETE_NOTE', payload: id });
  };

  return (
    <div>
      <h1>Notes App</h1>
      <input type="text" value={newNote} onChange={(e) => setNewNote(e.target.value)} />
      <button onClick={addNote}>Add Note</button>
      <ul>
        {state.notes.map((note) => (
          <li key={note.id}>
            {note.content}
            <button onClick={() => editNote(note.id, prompt('Edit note:', note.content))}>Edit</button>
            <button onClick={() => deleteNote(note.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notes;
