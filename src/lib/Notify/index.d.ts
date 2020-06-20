import {List} from 'immutable';
import type {AlertProps, Color} from '@material-ui/lab';
import type {
  SnackbarProps,
  SnackbarContent,
  SnackbarOrigin,
} from '@material-ui/core';
import type {
  TransitionProps,
  TransitionHandlerProps,
} from '@material-ui/core/transitions/transition';

type Key = string | number;
type Message = string | ReactNode;
type Content = ReactNode | ((key: Key, msg: Message) => ReactNode);

export interface SharedProps
  extends Omit<SnackbarProps, 'classes'>,
    Partial<TransitionHandlerProps> {
  variant?: Color;
  content?: Content;
}

export interface Options extends SharedProps {
  key?: string | number;
}

export interface Note {
  message: string;
  alertProps?: AlertProps;
  key: Key;
}

export type AlertList = List<AlertProps>;

export type Notifications = List<Note>;

export {useNotify} from './hooks';
export {default as NoteProvider} from './NoteProvider';
