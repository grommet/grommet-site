import React from 'react';
import { FileInput } from 'grommet';
import Page from '../components/Page';
import Item from './Components/Item';
import {
  GenericBool,
  GenericBackground,
  GenericPad,
  SizesXsmallXlarge,
} from '../utils/genericPropExamples';
import { GenericExtend } from '../utils/genericThemeExamples';
import {
  ComponentDoc,
  Properties,
  Property,
  PropertyValue,
  Description,
  Example,
  ThemeDoc,
  PropOptions,
} from '../components/Doc';
import { InputStyle } from '../utils/themeDocUtils';

export default () => (
  <Page>
    <ComponentDoc
      name="FileInput"
      availableAt={[
        {
          url:
            'https://storybook.grommet.io/?selectedKind=Input-FileInput&full=0&stories=1&panelRight=0',
          badge:
            'https://cdn-images-1.medium.com/fit/c/120/120/1*TD1P0HtIH9zF0UEH28zYtw.png',
          label: 'Storybook',
        },
      ]}
      description="A control to input one or more files"
      intrinsicElement="input"
      code={`<FileInput
  name="file"
  onChange={event => {
    const fileList = event.target.files;
    for (let i = 0; i < fileList.length; i += 1) {
      const file = fileList[i];
    }
  }}
/>`}
    >
      <Properties>
        <Property name="disabled">
          <Description>Whether the control is disabled.</Description>
          <GenericBool />
        </Property>

        <Property name="id">
          <Description>The id attribute of the input.</Description>
          <PropertyValue type="string">
            <Example>"file-input-id"</Example>
          </PropertyValue>
        </Property>

        <Property name="maxSize">
          <Description>
            Specifies a file size limit in bytes for FileInput.
          </Description>
          <PropertyValue type="number">
            <Example>5000</Example>
          </PropertyValue>
        </Property>

        <Property name="messages">
          <Description>
            Custom messages for FileInput. Used for accessibility by screen
            readers.
          </Description>
          <PropertyValue type="object">
            <Example defaultValue>
              {`
{
  browse: "browse", 
  dropPrompt: "Drop file here or", 
  dropPromptMultiple: "Drop files here or", 
  files: "files", 
  remove: "remove", 
  removeAll: "remove all"
}
`}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="multiple">
          <Description>Whether to allow multiple files.</Description>
          <GenericBool />
          <PropertyValue type="object">
            <Description>
              If an object is supplied, 'aggregageThreshold' indicates the
              maximum number of individual files to show. Above this, only a
              single message describing the number of files will be shown.
            </Description>
            <Example>
              {`
{
  aggregateThreshold: number
}
            `}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="name">
          <Description>
            The name attribute of the input. This is required when used within a
            Form.
          </Description>
          <PropertyValue type="string">
            <Example>"name"</Example>
          </PropertyValue>
        </Property>

        <Property name="onChange">
          <Description>
            Function that will be called when one or more files are added to or
            removed from the input.
          </Description>
          <PropertyValue type="function">
            <Description>
              {`The function will be passed two arguments: the event
            and an object with key 'files'. The file(s) can be found in
            event.target.files or by deconstructing files from the second
            argument. For example: (event, {files}) => {}.`}
            </Description>
            <Example>{`({ target: { files } }) => {...}`}</Example>
          </PropertyValue>
        </Property>

        <Property name="renderFile">
          <Description>
            Provides custom rendering of the file. If not provided, the file's
            name will be shown.
          </Description>
          <PropertyValue type="function">
            <Description>
              The function will be passed the browser File object as an
              argument.
            </Description>
            <Example>{`(file) => { <Text>{file.name}</Text> }`}</Example>
          </PropertyValue>
        </Property>
      </Properties>

      <ThemeDoc>
        <InputStyle />

        <Property name="global.input.extend">
          <Description>Any additional style for an input.</Description>
          <GenericExtend />
        </Property>

        <Property name="fileInput.background">
          <Description>The background prop for the container.</Description>
          <GenericBackground />
        </Property>

        <Property name="fileInput.border">
          <Description>The border prop for the container.</Description>
          <PropertyValue type="string">
            <Example>"horizontal"</Example>
            <Example>"vertical"</Example>
            <Example>"top"</Example>
            <Example>"bottom"</Example>
            <Example>"right"</Example>
            <Example>"left"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Example defaultValue>
              {`
{
  side: "all", 
  size: "small", 
  style: "dashed"
}
`}
            </Example>
            <Example>
              {`
{
  color: "string" | { dark: "string", light: "string" },
  error: { color: "string" | { dark: "string", light: "string" } },
  position: "string",
  side: "string",
  size: "string",
  style: "string"
}
            `}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="fileInput.dragOver.background">
          <Description>Background to use when dragging over.</Description>
          <GenericBackground />
        </Property>

        <Property name="fileInput.dragOver.border">
          <Description>Border to use when dragging over.</Description>
          <PropertyValue type="string">
            <Example>"horizontal"</Example>
            <Example>"vertical"</Example>
            <Example>"top"</Example>
            <Example>"bottom"</Example>
            <Example>"right"</Example>
            <Example>"left"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Example>
              {`
{
  color: "string" | { dark: "string", light: "string" },
  error: { color: "string" | { dark: "string", light: "string" } },
  position: "string",
  side: "string",
  size: "string",
  style: "string"
}
            `}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="fileInput.dragOver.extend">
          <Description>
            Any additional style for container when dragging over it.
          </Description>
          <GenericExtend />
        </Property>

        <Property name="fileInput.extend">
          <Description>Any additional style for container.</Description>
          <GenericExtend />
        </Property>

        <Property name="fileInput.hover.background">
          <Description>Background to use when hovering.</Description>
          <GenericBackground />
        </Property>

        <Property name="fileInput.hover.border">
          <Description>Background to use when hovering.</Description>
          <PropertyValue type="string">
            <Example>"horizontal"</Example>
            <Example>"vertical"</Example>
            <Example>"top"</Example>
            <Example>"bottom"</Example>
            <Example>"right"</Example>
            <Example>"left"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Example defaultValue>{`{ color: "brand" }`}</Example>
            <Example>
              {`
{
  color: "string" | { dark: "string", light: "string" },
  error: { color: "string" | { dark: "string", light: "string" } },
  position: "string",
  side: "string",
  size: "string",
  style: "string"
}
            `}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="fileInput.hover.extend">
          <Description>
            Any additional style for container when hovering over it.
          </Description>
          <GenericExtend />
        </Property>

        <Property name="fileInput.icons.remove">
          <Description>
            The icon to use for the control to remove a chosen file.
          </Description>
          <PropertyValue type="React.Element">
            <Example defaultValue>{`<FormClose />`}</Example>
          </PropertyValue>
        </Property>

        <Property name="fileInput.label">
          <Description>The Text props to use for the file label.</Description>
          <PropertyValue type="object">
            <Example defaultValue>{`{ margin: "small" }`}</Example>
          </PropertyValue>
        </Property>

        <Property name="fileInput.message">
          <Description>
            The Text props to use for the message shown before a file has been
            selected.
          </Description>
          <PropertyValue type="object">
            <Example defaultValue>{`{ margin: "small" }`}</Example>
          </PropertyValue>
        </Property>

        <Property name="fileInput.pad">
          <Description>The pad prop for the container.</Description>
          <GenericPad />
        </Property>

        <Property name="fileInput.round">
          <Description>The round prop for the container.</Description>
          <PropertyValue type="string">
            <SizesXsmallXlarge />
            <Example>"full"</Example>
            <Example>"string"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Example>
              {`
{
  corner: "...",
  size: "..."
}
            `}
            </Example>
            <PropOptions prop="corner">
              <Example>"top"</Example>
              <Example>"left"</Example>
              <Example>"bottom"</Example>
              <Example>"right"</Example>
              <Example>"top-left"</Example>
              <Example>"top-right"</Example>
              <Example>"bottom-left"</Example>
              <Example>"bottom-right"</Example>
            </PropOptions>
          </PropertyValue>
        </Property>
      </ThemeDoc>
    </ComponentDoc>
  </Page>
);

export const FileInputItem = ({ name, path }) => (
  <Item name={name} path={path} center>
    <FileInput numberItems={237} />
  </Item>
);

FileInputItem.propTypes = FileInput.propTypes;
