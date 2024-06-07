import { component$, Slot, useStyles$ } from '@builder.io/qwik';
import { routeLoader$ } from '@builder.io/qwik-city';
import type { DocumentHead, RequestHandler } from '@builder.io/qwik-city';

// import Header from '../components/starter/header/header';
// import Footer from '../components/starter/footer/footer';

import styles from './styles.css?inline';

export const onGet: RequestHandler = async ({ cacheControl }) => {
  // Control caching for this request for best performance and to reduce hosting costs:
  // https://qwik.dev/docs/caching/
  cacheControl({
    // Always serve a cached response by default, up to a week stale
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
    maxAge: 5,
  });
};

export const useServerTimeLoader = routeLoader$(() => {
  return {
    date: new Date().toISOString(),
  };
});

export default component$(() => {
  useStyles$(styles);
  return (
    <>
      {/* <Header /> */}
      <main
        class="dark h-screen text-primary-800 dark:bg-stone-800 dark:text-primary-500"
        // style={{
        //   backgroundImage: "url('../images/coming-soon-bg.webp')",
        // }}
      >
        <Slot />
      </main>
      {/* <Footer /> */}
    </>
  );
});

export const head: DocumentHead = ({ head }) => {
  return {
    title: `Pax Zenara | ${head.title}`,
    meta: [
      {
        name: 'keywords',
        content:
          'gift hampers, natural soaps, bath scrubs, bath salts, luxurious self-care, natural skincare, handcrafted bath products, pure indulgence',
      },
      {
        name: 'author',
        content: 'Pax Zenara',
      },
    ],
  };
};
