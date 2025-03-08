<script>
  import Header from '$lib/Header.svelte';
  import Footer from '$lib/Footer.svelte';
  import { fade } from 'svelte/transition';

  let { data, children } = $props();
</script>

<Header />

{#key data.pathname}
  <main
    in:fade={{ duration: 300, delay: 400 }}
    out:fade={{ duration: 300 }}
  >
    {@render children()}
  </main>
{/key}

<Footer />
