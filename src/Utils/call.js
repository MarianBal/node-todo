import { caller } from './caller';
import { getAllNotes, addSingleNote, deleteSingleNote } from './api';

export const getNotes = async () => {
  const response = await caller(getAllNotes());
  return response;
};

export const postAddNote = async data => {
  const response = await caller(addSingleNote(data));
  return response;
};

export const deleteANote = async id => {
  const response = await caller(deleteSingleNote(id));
  return response;
};
