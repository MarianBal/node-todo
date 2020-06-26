import { getNotes, postAddNote, deleteANote } from './../../Utils/call';

export const notesData = async setter => {
  const response = await getNotes();
  if (response.data) setter(response.data);
};

export const addToDo = (note, setter, setNewNote) => e => {
  e.charCode === 13 && callAddNote({ data: note }, setter, setNewNote);
};

const callAddNote = async (data, setter, setNewNote) => {
  const response = await postAddNote(data);
  if (response.errorNumber) {
    console.log('nota repetida');
    setNewNote('');
  } else if (response.data) {
    setter(response.data);
    setNewNote('');
  }
};

export const deleteNote = setNotes => id => deleteSingleNote(id, setNotes);

const deleteSingleNote = async (id, setNotes) => {
  const response = await deleteANote(id);
  if (response.data) setNotes(response.data);
};
