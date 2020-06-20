import {createContext, useContext, ReactNode} from 'react';
import {createNoteList, createNote} from './util';
import type {Notifications, Note} from '.';
import type {CreateNote} from './util';
import {Color} from '@material-ui/lab';

interface NoteContextProps {
  notes: Notifications;
  isOpen: boolean;
  pushNote: (note: Note) => void;
  pushMessage: (message: string, severity?: Color) => void;
  createNote: CreateNote;
  children?: ReactNode[];
}

const defaultNoteContext = (): NoteContextProps => ({
  notes: createNoteList(),
  isOpen: false,
  pushNote: () => {},
  pushMessage: () => {},
  createNote,
});

const NoteContext = createContext(defaultNoteContext());
NoteContext.displayName = 'NoteContext';

function useNoteContext() {
  return useContext(NoteContext);
}

export default NoteContext;
export {useNoteContext, NoteContext};
export type {NoteContextProps};
