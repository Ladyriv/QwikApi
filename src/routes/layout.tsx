import { component$, Slot, useStyles$ } from '@builder.io/qwik';

import Footer from '~/components/shared/footer/footer';

import styles from './styles.css?inline';
import Nabvar from '~/components/shared/navbar/nabvar';

export default component$(() => {
  useStyles$(styles);
  return (
    <>
      <Nabvar />
      <main>
        <Slot />
      </main>
      <Footer />
    </>
  );
});
