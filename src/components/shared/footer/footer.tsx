import { component$ } from '@builder.io/qwik';
import styles from './footer.module.css';

export default component$(() => {

  return (
    <footer>
      <div class="container" >
          <span class={styles.anchor}>Made with ♡ by Ladyriv</span>
      </div>
    </footer>
  );
});
