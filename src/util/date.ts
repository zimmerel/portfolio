import {parseISO as _parseISO, format as _format} from 'date-fns';

export const dateUtil = {
  parseISO(argument: string) {
    return _parseISO(argument);
  },
  format(date: Date, format?: string) {
    return _format(date, format);
  },
};
