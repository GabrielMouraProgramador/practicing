export default defineNitroPlugin((nitroApp) => {
    nitroApp.hooks.hook('render:html', (html) => {
      //console.log(html)
      html.body.push('<h1/>ADD VIA NITRO</h1>');
    });
  });
