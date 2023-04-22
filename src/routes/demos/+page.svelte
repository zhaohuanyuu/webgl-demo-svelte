<svelte:head>
  <title>WebGL demos</title>
  <meta name="description" content="WebGL demos"/>
</svelte:head>

<script>
  const demoRoute = import.meta.glob('./**/*.svelte');

  const demoList = Object.keys(demoRoute).map(path => {
    const [pre, name] = path.match(/\.\/(.+)\//)
    return {
      name,
      path: '/demos/' + name
    }
  }).reverse()
</script>

<section class="demo-wrapper">
  <ul class="demo-list_ul">
    {#each demoList as { name, path }}
      <li class="demo-list_li"><a href={path}>{ name }</a></li>
    {/each}
  </ul>
</section>

<style>
  .demo-list_li{
    margin-bottom: 20px;
    padding: 5px 10px;
    font-size: 20px;
    cursor: pointer;
    background-color: #FFDFD3;
  }
  .demo-list_li a{
    display: inline-block;
    width: 100%;
  }
</style>
