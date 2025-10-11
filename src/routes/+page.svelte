<script>
  import SeeMore from "$lib/SeeMore.svelte";
  import Video from "$lib/Video.svelte";
  import { directorVideos, editorVideos, vfxVideos } from "$lib/videos.js";
</script>

<h1>Hello I'm baviett!</h1>

<section>
  <h2>DIRECTOR</h2>
  <div>
    {#each { length: 7 }, i}
      <Video src={directorVideos[i].src} />
    {/each}
    <SeeMore href="/director/" />
  </div>
</section>

<section>
  <h2>EDITOR</h2>
  <div>
    {#each { length: 3 }, i}
      <Video src={editorVideos[i].src} />
    {/each}
    <SeeMore href="/editor/" />
  </div>
</section>

<section>
  <h2>VFX</h2>
  <div>
    {#each { length: 3 }, i}
      <Video src={vfxVideos[i].src} />
    {/each}
    <SeeMore href="/vfx/" />
  </div>
</section>

<style>
  section {
    text-align: center;
  }

  h2 {
    margin-top: 50px;
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
