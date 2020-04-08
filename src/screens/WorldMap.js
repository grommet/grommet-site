import React from 'react';

import { WorldMap } from 'grommet';
import { doc, themeDoc } from 'grommet/components/WorldMap/doc';

import Page from '../components/Page';
import Doc from '../components/Doc';
import Item from './Components/Item';
import { genericSyntaxes } from '../utils/props';

const desc = doc(WorldMap).toJSON();

const WorldMapDoc = () => (
  <Page>
    <Doc
      name="WorldMap"
      desc={desc}
      code={`<WorldMap
  color="neutral-1"
  continents={[
    {
      name: 'Africa',
      color: 'light-5',
      onClick: (name) => {},
    },
  ]}
  onSelectPlace={(lat, lon) => {}}
  places={[
    {
      name: 'Sydney',
      location: [-33.8830555556, 151.216666667],
      color: 'accent-2',
      onClick: (name) => {},
    },
  ]}
  selectColor="accent-2"
/>`}
      syntaxes={{
        ...genericSyntaxes,
        continents: [
          [
            {
              name: [
                'Africa',
                'Asia',
                'Australia',
                'Europe',
                'North America',
                'South America',
              ],
              color: ['graph-1', { dark: 'white', light: 'black' }],
              onClick: '(name) => {}',
              onHover: '(name) => {}',
            },
          ],
        ],
        onSelectPlace: ['([lat, lon]) => {}'],
        places: [
          [
            {
              name: 'Sydney',
              color: ['graph-1', { dark: 'white', light: 'black' }],
              location: [-33.8830555556, 151.216666667],
              onClick: '(name) => {}',
            },
          ],
        ],
      }}
      themeDoc={themeDoc}
    />
  </Page>
);

export default WorldMapDoc;

export const WorldMapItem = ({ name, path }) => (
  <Item name={name} path={path} center pad="medium">
    <WorldMap color="brand" />
  </Item>
);

WorldMapItem.propTypes = Item.propTypes;
