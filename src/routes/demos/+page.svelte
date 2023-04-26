<svelte:head>
  <title>WebGL demos</title>
  <meta name="description" content="WebGL demos"/>
</svelte:head>

<script>
  const demoRoute = import.meta.glob('./**/+page.svelte');
  const demoList = Object.entries(Object.keys(demoRoute).reduce((acc, path) => {
    const [prevPath, name] = path.match(/\.\/.+\/(.+)\//)
    
    let [chapterName, ] = prevPath.split(name)
    chapterName = chapterName.replace(/[\.\/]/g, '')

    const item = {
      name,
      path: `/demos/${chapterName}/${name}`
    }

    if (acc[chapterName]) {
      acc[chapterName].unshift(item)
    } else {
      acc[chapterName] = [item]
    }

    return acc    
  }, {})).reverse()
</script>

<section class="demo-wrapper">
  <ul class="demo-list_ul">
    {#each demoList as [dirName, list]}
      <li class="chapter">{ dirName }</li>
      {#each list as { name, path }}
        {#key name}
          <li class="demo-list_li"><a href={path}>{ name }</a></li>
        {/key}
      {/each}
    {/each}
  </ul>
</section>

<style>
  .chapter{
    margin: 30px 0;
    list-style: none;
    font-size: 26px;
    font-weight: bolder;
  }
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
    font-size: 15px;
    font-weight: bold;
    font-family: monolisa, 'pingfang-sc';
  }
</style>
