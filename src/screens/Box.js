import React from 'react';
import { Box } from 'grommet';
import { doc, themeDoc } from 'grommet/components/Box/doc';
import Page from '../components/Page';
import Doc from '../components/Doc';
import { genericSyntaxes } from '../utils/props';
import Item from './Components/Item';

const desc = doc(Box).toJSON();

export default () => (
  <Page>
    <Doc
      name="Box"
      desc={desc}
      code={`<Box
  direction="row"
  border={{ color: 'brand', size: 'large' }}
  pad="medium"
>
  <Box pad="small" background="dark-3" />
  <Box pad="medium" background="light-3" />
</Box>`}
      syntaxes={{
        ...genericSyntaxes,
        align: ['start', 'center', 'end', 'baseline', 'stretch'],
        alignContent: [
          'start',
          'center',
          'end',
          'between',
          'around',
          'stretch',
        ],
        animation: [
          'fadeIn',
          'fadeOut',
          'jiggle',
          'pulse',
          'rotateRight',
          'rotateLeft',
          'slideUp',
          'slideDown',
          'slideLeft',
          'slideRight',
          'zoomIn',
          'zoomOut',
          {
            type: '...',
            delay: 0,
            duration: 1000,
            size: 'xsmall',
          },
          ['fadeIn', 'slideDown', '...'],
        ],
        background: [
          'neutral-1',
          'url(//my.com/assets/img.png)',
          {
            color: 'neutral-1',
            dark: true,
            opacity: true,
            position: 'bottom',
            repeat: 'no-repeat',
            size: 'cover',
            image: 'url(//my.com/assets/img.png)',
          },
          {
            dark: 'light-2',
            light: 'dark-2',
          },
          {
            VALUES: {
              opacity: ['weak', 'medium', 'strong', true],
              position: 'any CSS for background-position',
              repeat: ['no-repeat', 'repeat', 'string'],
              size: ['cover', 'contain', 'string'],
            },
          },
        ],
        basis: [
          'xxsmall',
          'xsmall',
          'small',
          'medium',
          'large',
          'xlarge',
          'full',
          '1/2',
          '1/3',
          '2/3',
          '1/4',
          '2/4',
          '3/4',
          'auto',
        ],
        border: [
          true,
          false,
          'top',
          'left',
          'bottom',
          'right',
          'between',
          'horizontal',
          'vertical',
          'all',
          {
            color: 'border',
            size: 'medium',
            style: 'dashed',
            side: 'all',
          },
          {
            VALUES: {
              size: [
                'xsmall',
                'small',
                'medium',
                'large',
                'xlarge',
                'any CSS size',
              ],
              style: [
                'solid',
                'dashed',
                'dotted',
                'double',
                'groove',
                'ridge',
                'inset',
                'outset',
                'hidden',
              ],
              side: [
                'top',
                'left',
                'bottom',
                'right',
                'horizontal',
                'vertical',
                'all',
              ],
            },
          },
        ],
        elevation: [
          'none',
          'xsmall',
          'small',
          'medium',
          'large',
          'xlarge',
          'any custom elevation name in the current theme',
        ],
        gap: [
          'none',
          'xxsmall',
          'xsmall',
          'small',
          'medium',
          'large',
          'xlarge',
          'any CSS size',
        ],
        height: [
          'xxsmall',
          'xsmall',
          'small',
          'medium',
          'large',
          'xlarge',
          'xxlarge',
          {
            min: '...',
            max: '...',
          },
          'any CSS size',
        ],
        overflow: [
          'auto',
          'hidden',
          'scroll',
          'visible',
          'any CSS overflow',
          {
            vertical: '...',
            horizontal: '...',
          },
        ],
        pad: [
          'none',
          'xxsmall',
          'xsmall',
          'small',
          'medium',
          'large',
          'xlarge',
          'any CSS size',
          {
            vertical: '...',
            horizontal: '...',
            top: '...',
            bottom: '...',
            left: '...',
            right: '...',
          },
        ],
        round: [
          true,
          false,
          'xsmall',
          'small',
          'medium',
          'large',
          'xlarge',
          'full',
          'any CSS size',
          {
            size: '...',
            corner: 'top-left',
          },
          {
            VALUES: {
              corner: [
                'top',
                'left',
                'bottom',
                'right',
                'top-left',
                'top-right',
                'bottom-left',
                'bottom-right',
              ],
            },
          },
        ],
        width: [
          'xxsmall',
          'xsmall',
          'small',
          'medium',
          'large',
          'xlarge',
          'xxlarge',
          {
            min: '...',
            max: '...',
          },
          'any CSS size',
        ],
      }}
      themeDoc={themeDoc}
    />
  </Page>
);

export const BoxItem = ({ name, path }) => (
  <Item name={name} path={path}>
    <Box flex border={{ color: 'brand', size: 'xlarge' }} />
  </Item>
);

BoxItem.propTypes = Item.propTypes;
