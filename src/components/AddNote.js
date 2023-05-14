import React, { useState } from "react";
import "../index.css";

export default function AddNote({ handleAddNote }) {
  const [noteText, setNoteText] = useState("");

  const handleChange = (e) => {
    setNoteText(e.target.value);
  };

  const handleSaveClick = () => {
    if (noteText.trim().length > 0) {
      handleAddNote(noteText);
    }
    setNoteText("");
  };

  return (
    <div className="new container">
      <div className="new note">
        <textarea
          className="textarea"
          row="8"
          cols="10"
          placeholder="add some notes"
          value={noteText}
          onChange={handleChange}
        ></textarea>
        <div className="new note-footer">
          <button className="save btn" onClick={handleSaveClick}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
