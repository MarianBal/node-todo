import { getNotes } from './../../Utils/call';
export const notesData = async (setter) => {
  const response = await getNotes();
  if (response.data) setter(response.data);
};
