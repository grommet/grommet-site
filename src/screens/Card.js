import React from 'react';

import { Box, Card, CardHeader, CardBody, CardFooter } from 'grommet';
import { doc, themeDoc } from 'grommet/components/Card/doc';
import { doc as docCardHeader } from 'grommet/components/CardHeader/doc';
import { doc as docCardFooter } from 'grommet/components/CardFooter/doc';
import { doc as docCardBody } from 'grommet/components/CardBody/doc';

import Page from '../components/Page';
import Doc from '../components/Doc';
import Item from './Components/Item';

const desc = doc(Card).toJSON();
const descCardHeader = docCardHeader(CardHeader).toJSON();
const descCardBody = docCardBody(CardBody).toJSON();
const descCardFooter = docCardFooter(CardFooter).toJSON();

export default () => (
  <Page>
    <Doc
      name="Card"
      desc={desc}
      code={`<Card  height="small" width="small" background="light-1">
      <CardHeader pad="medium">Header</CardHeader>
      <CardBody pad="medium">Body</CardBody>
      <CardFooter pad={{horizontal: "small"}} background="light-2">   
      <Button
      icon={<Icons.Favorite color="red" />}
      hoverIndicator
    />
    <Button icon={<Icons.ShareOption color="plain" />} hoverIndicator />
    </CardFooter>
</Card>`}
      themeDoc={themeDoc}
    />
    <Doc
      name="CardHeader"
      desc={descCardHeader}
      isA={{
        base: 'Header',
        path: '/header',
      }}
    />
    <Doc
      name="CardBody"
      desc={descCardBody}
      isA={{
        base: 'Box',
        path: '/box',
        defaultProps: {
          flex: 'true',
        },
      }}
    />
    <Doc
      name="CardFooter"
      desc={descCardFooter}
      isA={{
        base: 'Footer',
        path: '/footer',
      }}
    />
  </Page>
);

export const CardItem = ({ name, path }) => (
  <Item name={name} path={path} center pad="none">
    <Box align="center" pad="small">
      <Card height="small" width="small">
        <CardHeader background="brand" pad="small" />
        <CardBody background="white" />
        <CardFooter background="brand" pad="small" />
      </Card>
    </Box>
  </Item>
);

CardItem.propTypes = Item.propTypes;
