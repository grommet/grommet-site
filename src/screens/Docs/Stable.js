import React from 'react';

import { MarkdownTemplate } from '../../components/MarkdownTemplate';
import Page from '../../components/Page';

const name = 'Stable Branch';

const desc =
  'Want to use the latest features and enhancments learn how to connect your project to the grommet stable.';

const children = ` 


Grommet stable is a Github branch that is used as a release that can be installed with NPM. It gets updated every time the [CircleCi](https://circleci.com/gh/grommet) builds passes on the Grommet master branch. The stable branch is updated multiple times a day as Grommet is constantly being enhanced.

Using stable in production is not recommended. It is meant to be used for a short period of time while an official release is not out for a fix or a new component you might be looking for.

To access the stable release you need to update your 'package.json' dependency to the following:

\`\`\`

  "dependencies": {
    "grommet": "https://github.com/grommet/grommet/tarball/stable",
  }
}
\`\`\`

After that remove grommet from node_modules: "rm -rf node_modules/grommet" and run "npm install" again.

You will need to delete the "node_modules/grommet" every time you are looking for updating the stable branch. "npm update" does not work in this case as the name and version are all the same.

For "yarn" users try the following script to make sure all cache is clean:

`;

const StableBranch = () => (
  <Page>
    <MarkdownTemplate name={name} desc={desc}>
      {children}
    </MarkdownTemplate>
  </Page>
);

export default StableBranch;
