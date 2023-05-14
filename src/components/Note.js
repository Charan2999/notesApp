import { MdDeleteForever } from "react-icons/md";
export default function Note({ id, text, date, handleDeleteNote }) {
  // console.log(date);
  return (
    <div className="note">
      <span>{text}</span>
      <div className="note-footer">
        <small>{date}</small>
        <MdDeleteForever
          className="delete-icon btn"
          size="1.3rem"
          onClick={() => handleDeleteNote(id)}
        />
      </div>
    </div>
  );
}
