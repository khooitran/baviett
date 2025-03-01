<script>
  import SeeMore from '$lib/SeeMore.svelte';
  import Video from '$lib/Video.svelte';

  let directorVideos = [
    {
      src: 'https://www.youtube.com/embed/VkUWXGSLiyM?si=1VWFQmqTsbz5GFWQ',
    },
    {
      src: 'https://www.youtube.com/embed/98754rVyq1I?si=83xxmUzPdmbvvx_x',
    },
    {
      src: 'https://www.youtube.com/embed/z_ioKFEp3LE?si=0jNvZnFqZWywjVe9',
    },
  ];

  let editorVideos = [
    {
      src: 'https://player.vimeo.com/video/440926789?h=717acf25ed',
    },
    {
      src: 'https://player.vimeo.com/video/440927742?h=8e9a35a0bd',
    },
    {
      src: 'https://player.vimeo.com/video/440929500?h=860d8b127a',
    },
  ];

  let vfxVideos = [
    {
      src: 'https://player.vimeo.com/video/518701986?h=8860c893fa',
    },
    {
      src: 'https://player.vimeo.com/video/470501074?h=c40518aa27',
    },
    {
      src: 'https://player.vimeo.com/video/490657396?h=c73bb16b77',
    },
  ];
</script>

<h1>Hello I'm baviett!</h1>

<section>
  <h2>DIRECTOR</h2>
  <div>
    {#each directorVideos as directorVideo}
      <Video src={directorVideo.src} />
    {/each}
    <SeeMore href="/director/" />
  </div>
</section>

<section>
  <h2>EDITOR</h2>
  <div>
    {#each editorVideos as editorVideo}
      <Video src={editorVideo.src} />
    {/each}
    <SeeMore href="/editor/" />
  </div>
</section>

<section>
  <h2>VFX</h2>
  <div>
    {#each vfxVideos as vfxVideo}
      <Video src={vfxVideo.src} />
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
