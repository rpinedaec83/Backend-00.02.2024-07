import { loadNotes } from "./socket.js";
import { onHandleSubmit, renderNotes } from "./ui.js";

renderNotes();
loadNotes();

const noteForm = document.querySelector("#noteForm");

noteForm.addEventListener("submit", onHandleSubmit);
