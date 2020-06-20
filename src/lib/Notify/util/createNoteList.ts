import type {Note} from '..';
import {List} from 'immutable';

/**
 * Utility function to create an immutable List of Note
 * @param notes Default notes
 */
export default function createNoteList(...notes: Note[]) {
  return List(notes);
}
