import React from 'react';

import { MarkdownTemplate } from '../../components/MarkdownTemplate';
import Page from '../../components/Page';

const name = 'Resources';

const desc = "Can't get enough of Grommet? Here are some more useful links.";

const children = ` 

[Templates, patterns, and starters][sandboxes].

End-to-end project examples on the [#i-made-this][slack] channel on [slack][slack].

Browse grommet component library on [Storybook][storybook].

Find us on [X (Twitter)][X (Twitter)].

[sandboxes]: https://codesandbox.io/u/grommetux/sandboxes
[slack]: https://slack-invite.grommet.io
[storybook]: https://storybook.grommet.io
[x]: https://x.com/grommet_io
`;

const Resources = () => (
  <Page>
    <MarkdownTemplate name={name} desc={desc}>
      {children}
    </MarkdownTemplate>
  </Page>
);

export default Resources;
