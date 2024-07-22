

// COM PROBLEMAS NESSA VERSAO

// EXEMPLO 
// export default defineNitroPlugin((nitroApp) => {
//     nitroApp.hooks.hook('render:html', (html) => {
    
//       console.log(html.body.push('<h1/>TESTE</h1>'));
//     });
//   });

  
// export default defineNitroPlugin((nitroApp) => {
    
//     nitroApp.hooks.hook('render:html', (html, { event }) => {
//         // Esta será uma representação de objeto do modelo HTML.
//         console.log(html)
//         html.head.push(`<meta name="description" content="My custom description" />`)
//         html.head.push(`<EXEMPLO1> CONTEUDO INJETADO</EXEMPLO1>`)
//     })
//     // Você também pode interceptar a resposta aqui.
//     nitroApp.hooks.hook('render:response', (response, { event }) => { console.log(response) })
    
//   })


//https://github.com/nuxt/nuxt/issues/15088 
// ERRO

//PARA TESTAR
//https://stackblitz.com/edit/github-xuiv1i-gjjnre?file=package.json,server%2Fplugins%2FNitroPlugin.ts