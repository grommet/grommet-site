import React from 'react';

import { MarkdownTemplate } from '../../components/MarkdownTemplate';
import { nameToPath } from '../../structure';

import Page from '../../components/Page';

// Enhancement context = grommet principles, best practices, accessibility support

const content = `
  ### [getting started with grommet](${nameToPath('starter')})
  ### [functions](${nameToPath('functions')})
  ### [resources](${nameToPath('resources')})
  ### [browser support](${nameToPath('browsers')})
  ### [theming](${nameToPath('globaltheme')})
  ### [stable branch](${nameToPath('stablebranch')})
  ### [colors](${nameToPath('color')})
  ### [backgrounds](${nameToPath('background')})
  ### [icons](${nameToPath('icons')})
`;

const Docs = () => (
  <Page>
    <MarkdownTemplate
      name="Docs"
      desc="you got questions, we got some answers. something missing? hit us up on [slack](https://slack-invite.grommet.io), or open an [issue](https://github.com/grommet/grommet/issues)."
    >
      {content}
    </MarkdownTemplate>
  </Page>
);

export default Docs;
