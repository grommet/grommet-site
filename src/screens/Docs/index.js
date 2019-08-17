import React from 'react';

import { Box, Markdown } from 'grommet';

import Page from '../../components/Page';

const content = `
  #Docs 

  ## you got questions, we got some answers. something missing, hit us up on [slack](https://slackin.grommet.io/), or open an [issue](https://github.com/grommet/grommet/issues).  
  
  ### grommet principles
  ### best practices
  ### getting started with grommet
  ### accessibilty support
  ### browser support
  ### theming grommet for your app
  ### functions
  ### resources
`;

export default () => (
  <Page>
    <Box pad={{ horizontal: 'xlarge' }}>
      <Markdown>{content}</Markdown>
    </Box>
  </Page>
);
