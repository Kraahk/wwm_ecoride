import { trpc } from '../utils/trpc';

export const Hello = () => {
  const { data, isLoading } = trpc.hello.useQuery({ name: 'Gaylor' });

  if (isLoading) return <p>Chargement...</p>;
  return <p>{data?.greeting}</p>;
};
