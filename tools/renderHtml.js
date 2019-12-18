export default ({ body, styles, scripts, helmet }) => `<!DOCTYPE html>
<html lang="en-US">
  <head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta charset="UTF-8" />
    ${helmet.title.toString()}
    ${helmet.meta.toString()}
    <meta name="fragment" content="!" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="mobile-web-app-capable" content="yes" />
    <meta name="theme-color" content="#865CD6" />
    <meta
      name="google-site-verification"
      content="shJGDc1jnWglPRw_VtQnMTqvcai0Br5JBFX1gVrQg-U"
    />
    <link rel="shortcut icon" type="image/png" href="/img/shortcut-icon.png" />
    <link
      rel="apple-touch-icon"
      sizes="196x196"
      type="image/png"
      href="/img/mobile-app-icon.png"
    />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
    />
    <link rel="manifest" href="/manifest.json" />
    ${styles}
  </head>
  <body>
    <div id="content">${body}</div>
    <noscript>
      <p id="noscript">
        This Grommet documentation site requires javascript to show off what
        can be done with Grommet. You must enable javascript to proceed.
      </p>
    </noscript>
    ${scripts &&
      scripts.length &&
      scripts.map(scriptSrc => `<script src="${scriptSrc}"></script>`).join('')}
  </body>
</html>`;
