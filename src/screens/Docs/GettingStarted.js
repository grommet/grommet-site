import React from 'react';

import { MarkdownTemplate } from '../../components/MarkdownTemplate';
import Page from '../../components/Page';

const name = 'Getting started?';

const desc = 'you came to the right place.';

const children = ` 

Check out the getting started [tutorial](https://github.com/grommet/grommet-starter-new-app), and [blog](https://developer.hpe.com/blog/using-your-first-grommet-component-with-create-react-app).

New to Front-End development? Check out [Slides](https://slides.grommet.io/?id=grommet-training-eric-soderberg-hpe-com) to learn the essential development tools for grommet

Explore how to incorporate [colors](https://github.com/grommet/grommet/wiki/Color-Properties) into themes & components within your application.

Grommet out of the box [patterns, and starters][sandboxes].

More questions? something is missing? hit us on the [#getstarted][slack] or [#general][slack] channels on [slack][slack].

[Migration guide](https://github.com/grommet/grommet/wiki/2.0-Migration-Guide) from grommet v1 to v2. 

[sandboxes]: https://codesandbox.io/u/grommetux/sandboxes
[slack]: https://slack-invite.grommet.io
`;

const GettingStarted = () => (
  <Page>
    <MarkdownTemplate name={name} desc={desc}>
      {children}
    </MarkdownTemplate>
  </Page>
);

export default GettingStarted;
