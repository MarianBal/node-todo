import { getNotes, postAddNote } from './../../Utils/call';

export const notesData = async setter => {
  const response = await getNotes();
  if (response.data) setter(response.data);
};

export const addToDo = (note, setter) => e => {
  e.charCode === 13 && callAddNote({ data: note }, setter);
};

const callAddNote = async (data, setter) => {
  const response = await postAddNote(data);
  console.log(response.data);
  if (response.data) setter(response.data);
};
