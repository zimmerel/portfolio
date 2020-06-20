import {
  forwardRef,
  MutableRefObject,
  MouseEvent,
  ReactElement,
  HTMLAttributes,
} from 'react';
import {Link as MuiLink, LinkProps as MuiLinkProps} from '@material-ui/core';
import NextLink, {LinkProps as NextLinkProps} from 'next/link';
import {useRouter} from 'next/router';

interface NextComposedProps
  extends NextLinkProps,
    HTMLAttributes<HTMLAnchorElement> {
  prefetch?: boolean;
}

const NextComposed = forwardRef(function NextComposed(
  props: NextComposedProps,
  ref: MutableRefObject<HTMLAnchorElement>
) {
  const {as, href, ...other} = props;

  return (
    <NextLink href={href} as={as}>
      <a ref={ref} {...other} />
    </NextLink>
  );
});

interface LinkProps extends NextLinkProps, Omit<MuiLinkProps, 'href'> {
  activeClassName?: string;
  naked?: boolean;
}

function Link(props: LinkProps) {
  const {
    href,
    activeClassName = 'active',
    className: classNameProps,
    innerRef,
    naked,
    ...other
  } = props;
  const router = useRouter();
  const pathname = typeof href === 'string' ? href : href.pathname;
  const isActive = router.pathname === pathname && activeClassName;
  const className = isActive
    ? `${activeClassName} ${classNameProps}`
    : classNameProps;

  if (naked) {
    return (
      <NextComposed
        className={className}
        ref={innerRef}
        href={href}
        {...other}
      />
    );
  }

  return (
    <MuiLink
      component={NextComposed}
      className={className}
      ref={innerRef}
      href={pathname}
      {...other}
    />
  );
}

export default forwardRef(
  (props: LinkProps, ref: MutableRefObject<HTMLAnchorElement>) => (
    <Link {...props} innerRef={ref} />
  )
);
