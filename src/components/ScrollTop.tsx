import {ReactElement, MouseEvent} from 'react';
import {
  makeStyles,
  Theme,
  createStyles,
  useScrollTrigger,
  Zoom,
} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: 'fixed',
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },
  })
);

interface ScrollTopProps {
  anchorId: string;
  children: ReactElement;
}

export default function ScrollTop(props: ScrollTopProps) {
  const {children, anchorId} = props;
  const classes = useStyles();

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    const doc = event.currentTarget.ownerDocument || document;
    doc
      .querySelector(`#${anchorId}`)
      ?.scrollIntoView({behavior: 'smooth', block: 'center'});
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}
