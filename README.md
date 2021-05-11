# grommet-site

[![Netlify Status](https://api.netlify.com/api/v1/badges/0ccebcd5-3c08-46b6-857d-bca551102609/deploy-status)](https://app.netlify.com/sites/upbeat-ardinghelli-95952e/deploys)

Go to [deployment site](https://v2.grommet.io/).

To run this application, execute the following commands:

1. Install NPM modules

```
$ yarn install
```

2. Start the front-end dev server:

```
$ yarn start
```

3. Create the app distribution

```
$ yarn build
```

4. Test and run linters:

```
$ yarn test
```

If you are experiencing hash errors during building your package.json, it occurs because grommet-site is referencing the latest stable branch of grommet. As new commits are added to the stable branch that are effecting the site deployment, the sha hash gets updated and becomes out of sync with the sha in the yarn.lock file.

To fetch the latest grommet stable, remove yarn.lock and clean yarn cache, then yarn install as follows:

```
rm yarn.lock && yarn cache clean && yarn install
```
