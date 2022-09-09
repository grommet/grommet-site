import React from 'react';

import { MarkdownTemplate } from '../../components/MarkdownTemplate';
import Page from '../../components/Page';

const name = 'Stable Branch';

const desc =
  'Want to use the latest features and enhancements? Learn how to connect your project to the grommet stable branch.';

const children = ` 


Grommet stable is a Github branch that is used as a release that can be installed with NPM or Yarn. It gets updated every time the [CircleCi](https://circleci.com/gh/grommet) build passes which includes all of the unit and visual snapshots on the master branch.
The stable branch is updated multiple times a day as Grommet is constantly being enhanced.

Using stable in production is not recommended. It is meant to be used for a short period of time while an official release is not out for a fix or a new component you might be looking for.

To access the stable release you need to update your 'package.json' dependency to the following:

\`\`\`

  "dependencies": {
    "grommet": "https://github.com/grommet/grommet/tarball/stable",
  }
\`\`\`

For npm users use the following script to remove node modules and reinstall npm again:

\`\`\`

rm -rf node_modules && npm install

\`\`\`

You will need to delete the "node_modules/grommet" every time you are looking for updating the stable branch. "npm update" does not work in this case as the name and version are all the same.

For "yarn" users try the following script to make sure all cache is clean:

\`\`\`

rm -rf node_modules && rm -rf yarn.lock && yarn cache clean && yarn

\`\`\`



`;

const StableBranch = () => (
  <Page>
    <MarkdownTemplate name={name} desc={desc}>
      {children}
    </MarkdownTemplate>
  </Page>
);

export default StableBranch;
