<script>
  import Video from '$lib/Video.svelte';

  let videos = [
    {
      src: 'https://player.vimeo.com/video/518701986?h=8860c893fa',
    },
    {
      src: 'https://player.vimeo.com/video/470501074?h=c40518aa27',
    },
    {
      src: 'https://player.vimeo.com/video/490657396?h=c73bb16b77',
    },
    {
      src: 'https://player.vimeo.com/video/506952568?h=911a419403',
    },
    {
      src: 'https://player.vimeo.com/video/548937829?h=96aa33ca84',
    },
    {
      src: 'https://player.vimeo.com/video/608125459?h=6bd51cc6d5',
    },
    {
      src: 'https://player.vimeo.com/video/640240537?h=6554451534',
    },
    {
      src: 'https://player.vimeo.com/video/702297725?h=c93b6f7f66',
    },
    {
      src: 'https://player.vimeo.com/video/702371165?h=3f13748cb1',
    },
    {
      src: 'https://player.vimeo.com/video/778053925?h=40b037f438',
    },
  ];
</script>

<h1>VFX</h1>

<section>
  <div>
    {#each videos as video}
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
