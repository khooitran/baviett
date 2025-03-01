<script>
  let { src } = $props();
</script>

<iframe
  {src}
  title="YouTube Media Player"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowfullscreen
></iframe>

<style>
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
    iframe:nth-child(1) {
      height: 630px;
      width: 1120px;
      grid-column-start: 1;
      grid-column-end: 3;
    }
  }
</style>
