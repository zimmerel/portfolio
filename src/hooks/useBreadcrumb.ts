import useRoute from './useRoute';

export default function useBreadcrumb(title: string) {
  const {pathname, levels} = useRoute();
}
