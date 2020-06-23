import { caller } from './caller';
import { getAllNotes } from './api';

export const getNotes = async () => {
  const response = await caller(getAllNotes());
  return response;
};
