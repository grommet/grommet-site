import React from 'react';

import {
  Accordion,
  AccordionPanel,
  Box,
  Text,
} from 'grommet';
import doc, { accordionPanel } from 'grommet/components/Accordion/doc';

import Page from '../components/Page';
import Doc from '../components/Doc';

const desc = doc(Accordion).toJSON();
const descAccordionPanel = accordionPanel(AccordionPanel).toJSON();

export default () => (
  <Page>
    <Doc
      name='Accordion'
      desc={desc}
      example={(
        <Accordion>
          <AccordionPanel label='Panel 1'>
            <Box
              align='center'
              justify='center'
              background={{ color: 'brand', opacity: 'weak' }}
              height='small'
            >
              <Text color='text'>Panel 1 contents</Text>
            </Box>
          </AccordionPanel>
          <AccordionPanel label='Panel 2'>
            <Box
              align='center'
              justify='center'
              background={{ color: 'brand', opacity: 'weak' }}
              height='small'
            >
              <Text color='text'>Panel 2 contents</Text>
            </Box>
          </AccordionPanel>
        </Accordion>
      )}
    />

    <Doc name='AccordionPanel' nav={false} desc={descAccordionPanel} />
  </Page>
);
