import React from 'react';

import { Box, WorldMap } from 'grommet';
import { doc, themeDoc } from 'grommet/components/WorldMap/doc';

import Page from '../components/Page';
import Doc from '../components/Doc';

const desc = doc(WorldMap).toJSON();

const WorldMapDoc = () => (
  <Page>
    <Doc
      name="WorldMap"
      desc={desc}
      example={
        <Box flex justify="center" align="center">
          <WorldMap
            color="neutral-1"
            continents={[
              {
                name: 'Africa',
                color: 'accent-1',
                // eslint-disable-next-line no-alert
                onClick: name => alert(name),
              },
            ]}
            onSelectPlaceX={(lat, lon) =>
              // eslint-disable-next-line no-alert
              alert(lat, lon)
            }
            places={[
              {
                name: 'Sydney',
                location: [-33.8830555556, 151.216666667],
                color: 'accent-2',
                // eslint-disable-next-line no-alert
                onClick: name => alert(name),
              },
            ]}
            selectColor="accent-2"
          />
        </Box>
      }
      themeDoc={themeDoc}
    />
  </Page>
);

export default WorldMapDoc;
