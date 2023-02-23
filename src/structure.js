export const structure = {
  externals: [{ name: 'Icons', url: 'https://icons.grommet.io//' }],
  sections: [
    {
      name: 'Layout',
      components: [
        'Box',
        'Card',
        'Footer',
        'Grid',
        'Header',
        'Layer',
        'Main',
        'Page',
        'PageHeader',
        'Sidebar',
        'Stack',
      ],
    },
    {
      name: 'Type',
      components: ['Heading', 'Markdown', 'Paragraph', 'Text', 'Tag'],
    },
    {
      name: 'Color',
    },
    {
      name: 'Background',
    },
    {
      name: 'Controls',
      components: [
        'Accordion',
        'Anchor',
        'Button',
        'Drop',
        'DropButton',
        'Menu',
        'Nav',
        'Tabs',
        'Tip',
      ],
    },
    {
      name: 'Input',
      components: [
        'CheckBox',
        'CheckBoxGroup',
        'DateInput',
        'FileInput',
        'MaskedInput',
        'RadioButton',
        'RadioButtonGroup',
        'RangeInput',
        'RangeSelector',
        'Select',
        'SelectMultiple',
        'StarRating',
        'TextArea',
        'TextInput',
        'ThumbsRating',
        'FormField',
        'Form',
      ],
    },
    {
      name: 'Data',
      components: [
        'Cards',
        'Data',
        'DataFilter',
        'DataFilters',
        'DataSearch',
        'DataSort',
        'DataSummary',
        'DataTable',
        'DataTableColumns',
        'DataView',
        'List',
        'NameValueList',
      ],
    },
    {
      name: 'Visualizations',
      components: [
        'Avatar',
        'Calendar',
        'Chart',
        'Clock',
        'DataChart',
        'Diagram',
        'Distribution',
        'Meter',
        'Notification',
        'Skeleton',
        'Pagination',
        'Spinner',
        'Table',
        'WorldMap',
      ],
    },
    {
      name: 'Media',
      components: ['Carousel', 'Image', 'Video'],
    },
    {
      name: 'Utilities',
      components: [
        'AnnounceContext',
        'Collapsible',
        'Grommet',
        'InfiniteScroll',
        'Keyboard',
        'ResponsiveContext',
        'SkipLinks',
        'ThemeContext',
      ],
    },
  ],
};

export const nameToPath = (name) => {
  const section = structure.sections.filter((s) => s.name === name)[0];
  if (section && name !== 'Color' && name !== 'Background') {
    return `/components#${name}`;
  }
  const external = structure.externals.filter((e) => e.name === name)[0];
  if (external) {
    return external.url;
  }
  return name ? `/${name.toLowerCase()}` : '/components';
};

export const nextComponent = (name) => {
  const { sections } = structure;
  let result;
  sections.some((section, sectionIndex) => {
    if (section.components) {
      return section.components.some((component, componentIndex) => {
        if (component === name) {
          result = section.components[componentIndex + 1];
          if (!result) {
            const nextSection = sections[sectionIndex + 1];
            if (nextSection) {
              if (nextSection.components) {
                [result] = nextSection.components;
              } else {
                result = nextSection.name;
              }
            }
          }
        }
        return result;
      });
    }
    if (section.name === name) {
      const nextSection = sections[sectionIndex + 1];
      if (nextSection) {
        if (nextSection.components) {
          [result] = nextSection.components;
        } else {
          result = nextSection.name;
        }
      }
    }
    return false;
  });
  return result;
};

export const previousComponent = (name) => {
  const { sections } = structure;
  let result;
  sections.some((section, sectionIndex) => {
    if (section.components) {
      return section.components.some((component, componentIndex) => {
        if (component === name) {
          result = section.components[componentIndex - 1];
          if (!result) {
            const priorSection = sections[sectionIndex - 1];
            if (priorSection) {
              if (priorSection.components) {
                result =
                  priorSection.components[priorSection.components.length - 1];
              } else {
                result = priorSection.name;
              }
            }
          }
        }
        return result;
      });
    }
    if (section.name === name) {
      const priorSection = sections[sectionIndex - 1];
      if (priorSection) {
        if (priorSection.components) {
          result = priorSection.components[priorSection.components.length - 1];
        } else {
          result = priorSection.name;
        }
      }
    }
    return false;
  });
  return result;
};
