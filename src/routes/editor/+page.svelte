<script>
  import Video from '$lib/Video.svelte';

  let videos = [
    {
      src: 'https://player.vimeo.com/video/440926789?h=717acf25ed',
    },
    {
      src: 'https://player.vimeo.com/video/440927742?h=8e9a35a0bd',
    },
    {
      src: 'https://player.vimeo.com/video/440929500?h=860d8b127a',
    },
    {
      src: 'https://player.vimeo.com/video/458838517?h=bb31025baa',
    },
    {
      src: 'https://player.vimeo.com/video/440930560?h=9a033ff82a',
    },
    {
      src: 'https://player.vimeo.com/video/469193509?h=e0dbccf1c0',
    },
    {
      src: 'https://player.vimeo.com/video/523651484?h=fe5eea37f7',
    },
    {
      src: 'https://player.vimeo.com/video/428965090?h=ffc01d4d82',
    },
    {
      src: 'https://player.vimeo.com/video/435709317?h=770d8801a8',
    },
    {
      src: 'https://player.vimeo.com/video/471315848?h=63047b4cea',
    },
    {
      src: 'https://player.vimeo.com/video/470510671?h=298622c63d',
    },
    {
      src: 'https://player.vimeo.com/video/471313964?h=e19196d062',
    },
    {
      src: 'https://player.vimeo.com/video/471318212?h=62dbc5f08b',
    },
    {
      src: 'https://player.vimeo.com/video/582881218?h=e83ae99af6',
    },
    {
      src: 'https://player.vimeo.com/video/548919181?h=fac104ed9b',
    },
    {
      src: 'https://player.vimeo.com/video/548934057?h=4f6728715b',
    },
    {
      src: 'https://player.vimeo.com/video/640240537?h=6554451534',
    },
    {
      src: 'https://player.vimeo.com/video/734586514?h=43328b30ad',
    },
    {
      src: 'https://player.vimeo.com/video/697244355?h=d924cc2378',
    },
  ];
</script>

<h1>EDITOR</h1>

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
