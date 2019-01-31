import React from 'react';

import { Accordion, AccordionPanel, Box, Text } from 'grommet';
import { doc as docAccordion } from 'grommet/components/Accordion/doc';
import {
  doc as docAccordionPanel,
  themeDoc,
} from 'grommet/components/AccordionPanel/doc';

import Page from '../components/Page';
import Doc from '../components/Doc';
import { genericSyntaxes } from '../utils/props';
import Item from './Components/Item';

const desc = docAccordion(Accordion).toJSON();
const descAccordionPanel = docAccordionPanel(AccordionPanel).toJSON();

export default () => (
  <Page>
    <Doc
      name="Accordion"
      desc={desc}
      syntaxes={{
        ...genericSyntaxes,
        activeIndex: [0, [0, 2]],
        children: 'node',
        onActive: '([0]) => {}',
      }}
      example={
        <Accordion>
          <AccordionPanel label="Panel 1">
            <Box
              align="center"
              justify="center"
              background={{ color: 'brand', opacity: 'weak' }}
              height="small"
            >
              <Text color="text">Panel 1 contents</Text>
            </Box>
          </AccordionPanel>
          <AccordionPanel label="Panel 2">
            <Box
              align="center"
              justify="center"
              background={{ color: 'brand', opacity: 'weak' }}
              height="small"
            >
              <Text color="text">Panel 2 contents</Text>
            </Box>
          </AccordionPanel>
        </Accordion>
      }
    />

    <Doc
      name="AccordionPanel"
      nav={false}
      desc={descAccordionPanel}
      themeDoc={themeDoc}
      syntaxes={{
        'accordion.icons.collapse': '<UpIcon />',
        'accordion.icons.expand': '<DownIcon />',
      }}
    />
  </Page>
);

export const AccordionItem = props => (
  <Item {...props} center>
    <Box width="small">
      <Box pad="small" background="brand" />
      <Box pad="small" background={{ color: 'brand', opacity: 'medium' }} />
      <Box pad="small" background="brand" />
      <Box pad="small" background={{ color: 'brand', opacity: 'medium' }} />
    </Box>
  </Item>
);
