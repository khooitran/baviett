<script>
  import Video from '$lib/Video.svelte';
  import { vfxVideos } from '$lib/videos.js';
</script>

<h1>VFX</h1>

<section>
  <div>
    {#each vfxVideos as video}
      <Video src={video.src} />
    {/each}
  </div>
</section>

<style>
  section {
    text-align: center;
  }

  div {
    display: grid;
    grid-template-columns: auto;
    justify-content: center;
    gap: 10px;
  }

  @media only screen and (min-width: 1200px) {
    div {
      grid-template-columns: auto auto;
    }
  }
</style>
