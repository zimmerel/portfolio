import {dateUtil} from '../../util';

interface Props {
  date: string;
}

export default function Date({date}: Props) {
  const parsedDate = dateUtil.parseISO(date);
  const formattedDate = dateUtil.format(parsedDate, 'LLLL d, yyyy');
  return <time dateTime={date}>{formattedDate}</time>;
}
