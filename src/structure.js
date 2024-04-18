export const structure = {
  externals: [{ name: 'Icons', url: '/icons' }],
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
        'ToggleGroup',
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
        'Data',
        'DataFilter',
        'DataClearFilters',
        'DataFilters',
        'DataSearch',
        'DataSort',
        'DataSummary',
        'DataTableColumns',
        'DataTableGroupBy',
        'DataView',
        'Toolbar',
      ],
    },
    {
      name: 'Visualizations',
      components: [
        'Avatar',
        'Calendar',
        'Cards',
        'Chart',
        'Clock',
        'DataChart',
        'DataTable',
        'Diagram',
        'Distribution',
        'List',
        'Meter',
        'NameValueList',
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

const pathMap = {};

structure.sections.forEach((s) => {
  s.components?.forEach((c) => {
    pathMap[c] = `/${c.toLowerCase()}`;
  });
  if (!pathMap[s.name] && s.name !== 'Color' && s.name !== 'Background') {
    pathMap[s.name] = `/components#${s.name}`;
  }
});

export const nameToPath = (name) =>
  pathMap[name] || (name ? `/${name.toLowerCase()}` : '/components');

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
