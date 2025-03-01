<script lang="ts">
  let { href } = $props();
</script>

<div>
  <a {href}> SEE MORE &rarr; </a>
</div>

<style>
  a {
    color: white;
    text-decoration: none;
    transition-duration: 0.15s;
  }

  a:hover {
    color: #0051cf;
  }

  a:active {
    opacity: 0.8;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 180px;
    width: 320px;
    font-size: 26px;
  }

  @media only screen and (min-width: 576px) {
    div {
      width: 560px;
      height: 315px;
    }
  }
</style>
