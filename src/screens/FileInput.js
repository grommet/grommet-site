import React from 'react';

import { FileInput } from 'grommet';
import { doc, themeDoc } from 'grommet/components/FileInput/doc';

import Page from '../components/Page';
import Doc from '../components/Doc';
import Item from './Components/Item';
import { genericSyntaxes } from '../utils/props';

const desc = doc(FileInput).toJSON();

export default () => (
  <Page>
    <Doc
      name="FileInput"
      desc={desc}
      code={`<FileInput
  name="file"
  onChange={event => {
    const fileList = event.target.files;
    for (let i = 0; i < fileList.length; i += 1) {
      const file = fileList[i];
    }
  }}
/>`}
      syntaxes={{
        ...genericSyntaxes,
        onChange: ['({ target: { files } }) => {...}'],
      }}
      themeDoc={themeDoc}
    />
  </Page>
);

export const FileInputItem = ({ name, path }) => (
  <Item name={name} path={path} center>
    <FileInput numberItems={237} />
  </Item>
);

FileInputItem.propTypes = FileInput.propTypes;
