import React from 'react';

import { MarkdownTemplate } from './MarkdownTemplate';
import Page from '../../components/Page';

const name = 'Getting started?';

const desc = 'you came to the right place.';

const children = ` 

### Check out the getting started [tutorial](https://github.com/grommet/grommet-starter-new-app).

### Learn how to work with the grommet [theme](https://github.com/grommet/grommet/wiki/Grommet-v2-theming-documentation).

### Grommet out of the box [patterns, and starters][sandboxes].

### More questions? something is missing? hit us on the [#getstarted][slack] or [#general][slack] channels on [slack][slack].

### [Migration guide](https://github.com/grommet/grommet/wiki/2.0-Migration-Guide) from grommet v1 to v2 

[sandboxes]: https://codesandbox.io/u/grommetux/sandboxes
[slack]: http://slackin.grommet.io
`;

export default () => (
  <Page>
    <MarkdownTemplate name={name} desc={desc}>
      {children}
    </MarkdownTemplate>
  </Page>
);
