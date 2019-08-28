import React from 'react';

import { Box } from 'grommet';
import { MarkdownTemplate } from '../../components/MarkdownTemplate';
import Page from '../../components/Page';

const children = `

### deepMerge
A function that recieves two themes and returns a theme that includes
          both theme values. 
In case different styling are found for the same components on the two themes, the second argument theme will determine the styling. 

\`\`\`
import { deepMerge } from 'grommet/utils';

const myCustomTheme = deepMerge(grommet, {
  global: {
    colors: {
      brand: 'red',
    },
  },
});
\`\`\`


### deepFreeze
A function that recieves two themes and returns a theme that includes
          both theme values.

\`\`\`
import { deepFreeze } from 'grommet/utils';
...
<ThemeContext.Extend>
  value={deepFreeze(grommet, { global: { colors: { doc: "#ff99cc" } } })}>
    <Box pad="large" background="doc" />
    <Text>
      grommet theme and a custom theme are generating a new theme.
    </Text>
</ThemeContext.Extend>
\`\`\`

`;

export default () => (
  <Page>
    <Box width="xlarge" alignSelf="center">
      <MarkdownTemplate name="Functions" desc="grommet util functions">
        {children}
      </MarkdownTemplate>
    </Box>
  </Page>
);
