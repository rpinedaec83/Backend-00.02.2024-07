import { saveNote } from "./socket.js";

const notesList = document.querySelector("#notes");

export const renderNotes = (notes) => {
  notesList.innerHTML = `
<h1>notes</h1>
`;
};

export const onHandleSubmit = (e) => {
  e.preventDefault();

  saveNote(noteForm["title"].value, noteForm["description"].value);
};
