export default defineNitroPlugin((nitroApp) => {
    nitroApp.hooks.hook('render:html', (html) => {
      //console.log(html)
      html.body.push('<h1/>ADD VIA NITRO</h1>');
      //<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css">
    });
  });
