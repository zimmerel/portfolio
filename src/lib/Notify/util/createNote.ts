import type {Note} from '..';
import {AlertProps} from '@material-ui/lab';

function newKey() {
  return new Date().getTime();
}

export default function createNote(
  message: string,
  alertProps?: AlertProps,
  key: number = newKey()
): Note {
  return {
    message,
    alertProps,
    key,
  };
}

export type CreateNote = typeof createNote;
