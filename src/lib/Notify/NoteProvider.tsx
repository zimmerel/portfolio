import {
  useState,
  useEffect,
  useReducer,
  ReactNode,
  SyntheticEvent,
} from 'react';
import type {Note, Notifications} from '.';
import NoteContext from './NoteContext';
import {createNote, createNoteList} from './util';
import {
  Snackbar,
  createStyles,
  makeStyles,
  Theme,
  IconButton,
} from '@material-ui/core';
import {Close} from '@material-ui/icons';
import {Alert, Color} from '@material-ui/lab';
import type {NoteContextProps} from './NoteContext';
import type {SnackbarProps} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    close: {
      padding: theme.spacing(0.5),
    },
  })
);

interface NoteProviderProps {
  maxNotes?: number;
  initialNotes?: Notifications;
  children?: ReactNode;
  snackbarProps?: SnackbarProps;
}

const defaultSnackbarProps: SnackbarProps = {
  anchorOrigin: {
    vertical: 'bottom',
    horizontal: 'left',
  },
  autoHideDuration: 6000,
};

export default function NoteProvider(props: NoteProviderProps) {
  const {children, initialNotes = createNoteList(), snackbarProps} = props;
  const [notes, setNotes] = useState(initialNotes);
  const [messageInfo, setMessageInfo] = useState<Note>();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (notes.size) {
      if (!messageInfo) {
        setMessageInfo(notes.first());
        setNotes((prev) => prev.shift());
        setIsOpen(true);
      } else if (isOpen) {
        setIsOpen(false);
      }
    }
  }, [notes, messageInfo, isOpen]);

  const handleClose = (event: SyntheticEvent | MouseEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setIsOpen(false);
  };

  const handleExited = () => {
    setMessageInfo(null);
  };

  const pushNote = (note: Note) => {
    setNotes((notes) => notes.push(note));
  };

  const pushMessage = (message: string, severity: Color = 'info') => {
    const note = createNote(message, {severity});
    setNotes((notes) => notes.push(note));
  };

  const contextValue = {notes, isOpen, pushNote, pushMessage, createNote};

  // const classes = useStyles();

  return (
    <NoteContext.Provider value={contextValue}>
      {children}
      <div>
        <Snackbar
          key={messageInfo?.key}
          open={isOpen}
          onClose={handleClose}
          onExited={handleExited}
          message={messageInfo?.message}
          {...defaultSnackbarProps}
          {...snackbarProps}
        >
          <>
            {messageInfo && (
              <Alert onClose={handleClose} {...messageInfo.alertProps}>
                {messageInfo.message}
              </Alert>
            )}
          </>
        </Snackbar>
      </div>
    </NoteContext.Provider>
  );
}
