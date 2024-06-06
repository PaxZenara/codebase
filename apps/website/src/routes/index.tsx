import { component$, useTask$ } from '@builder.io/qwik';
import type { DocumentHead, RequestEvent } from '@builder.io/qwik-city';

import { trpc } from '../trpc';

export const onGet = async ({ redirect }: RequestEvent) => {
  throw redirect(307, '/coming-soon');
};

export default component$(() => {
  useTask$(async () => {
    const { greeting } = await trpc.hello.query({ name: `Tom` });
    console.log('🚀 ~ useTask$ ~ greeting:', greeting);
    console.log('hello world');
  });

  return <></>;
});

export const head: DocumentHead = {
  title: 'Pax Zenara',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};
