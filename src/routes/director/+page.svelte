<script>
  import Video from '$lib/Video.svelte';
  import { directorVideos } from '$lib/videos.js';
</script>

<h1>DIRECTOR</h1>

<section>
  <div>
    <iframe
      src={directorVideos[0].src}
      title="YouTube Media Player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    ></iframe>
    {#each directorVideos.slice(1) as video}
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

  iframe {
    width: 320px;
    height: 180px;
    margin: 0 auto;
  }

  @media only screen and (min-width: 576px) {
    iframe {
      width: 560px;
      height: 315px;
    }
  }

  @media only screen and (min-width: 1200px) {
    div {
      grid-template-columns: auto auto;
    }

    iframe {
      height: 630px;
      width: 1130px;
      grid-column-start: 1;
      grid-column-end: 3;
    }
  }
</style>
