import Note from "./Note";

export default function NotesList({ notes, handleDeleteNote }) {
  return (
    <div className="notes-list">
      {notes.map((note) => {
        return <Note {...note} handleDeleteNote={handleDeleteNote} />;
      })}
    </div>
  );
}
