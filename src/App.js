import NotesList from "./components/NotesList";
import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import Header from "./components/Header";
import AddNote from "./components/AddNote";
import Search from "./components/Search";

export default function App() {
  const [notes, setNotes] = useState([]);
  const [searchNote, setSearchNote] = useState("");

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);
  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <div className="container">
      <Header />
      <Search handleSearchNote={setSearchNote} />
      <AddNote handleAddNote={addNote} />
      <NotesList
        notes={notes.filter((note) =>
          note.text.toLowerCase().includes(searchNote)
        )}
        handleDeleteNote={deleteNote}
      />
    </div>
  );
}
