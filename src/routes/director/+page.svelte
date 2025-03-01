<script>
  import Video from '$lib/Video.svelte';

  let videos = [
    {
      src: 'https://www.youtube.com/embed/VkUWXGSLiyM?si=1VWFQmqTsbz5GFWQ',
    },
    {
      src: 'https://www.youtube.com/embed/98754rVyq1I?si=83xxmUzPdmbvvx_x',
    },
    {
      src: 'https://www.youtube.com/embed/z_ioKFEp3LE?si=0jNvZnFqZWywjVe9',
    },
    {
      src: 'https://www.youtube.com/embed/2nFfVsSy0JU?si=gjYrKYxR3TVvXN-J',
    },
    {
      src: 'https://www.youtube.com/embed/CMgqlPRG2Dc?si=kzxR58Wi9MW-AW_W',
    },
    {
      src: 'https://www.youtube.com/embed/Umu6tmb9I0Q?si=Lqf_H93zU9aTSYRJ',
    },
    {
      src: 'https://www.youtube.com/embed/2pKbANlv1rg?si=AReofDiZg0njRNVu',
    },
    {
      src: 'https://www.youtube.com/embed/OZGTrkziOBg?si=2GlDPc-bBhlh-_Nw',
    },
    {
      src: 'https://www.youtube.com/embed/hYsOBCHUpUk?si=P9ZyAPC5NNvcNGfy',
    },
    {
      src: 'https://www.youtube.com/embed/fw3MZm2lEVA?si=2vWC6iEEjgb6OAsN',
    },
    {
      src: 'https://www.youtube.com/embed/yptflB597IQ?si=CGuIc6hRSk9mmwnC',
    },
    {
      src: 'https://www.youtube.com/embed/a2HjAzIfvKw?si=Zb-mU3vDUTL10-gZ',
    },
    {
      src: 'https://www.youtube.com/embed/WLc5-k3y_Po?si=vukrSwtQvWXFswpm&amp;controls=0',
    },
    {
      src: 'https://www.youtube.com/embed/HYA7-azZv7M?si=RDhBeVQl0gBNCzUo&amp;controls=0',
    },
    {
      src: 'https://www.youtube.com/embed/elrI0fCLxfc?si=69FhphEi3pXmL42W&amp;controls=0',
    },
    {
      src: 'https://www.youtube.com/embed/oBIljftw9hI?si=7QlFlpCSdnVu-sKH&amp;controls=0',
    },
  ];
</script>

<h1>DIRECTOR</h1>

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
