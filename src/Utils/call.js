import { caller } from './caller';
import { getAllNotes, addSingleNote } from './api';

export const getNotes = async () => {
  const response = await caller(getAllNotes());
  return response;
};

export const postAddNote = async data => {
  const response = await caller(addSingleNote(data));
  return response;
};
