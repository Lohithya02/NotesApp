import React, { useEffect } from "react";
import useStore from "../store/store";

const NotesList = () => {
  const { notes, fetchNotes } = useStore();

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <div>
      <h1>Your Notes</h1>
      {notes.map((note) => (
        <div key={note.note_id}>
          <h3>{note.note_title}</h3>
          <p>{note.note_content}</p>
        </div>
      ))}
    </div>
  );
};
export default NotesList;