import React, { JSXElementConstructor } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Index from './Index/Table';
import Body from './Body/Body';
import Caption from './Caption/Caption';
import DataCell from './DataCell/DataCell';
import Head from './Head/Head';
import HeaderCell from './HeaderCell/HeaderCell';
import Row from './Row/Row';

interface IStoryAdditionalProps {
  caption: string;
  header: string;
  body: string;

  colSpan?: number;
  textAlign?: 'center' | 'left' | 'right';
  border?: 'unbordered' | 'unbordered-vertical';

  textAlignHeaderCell: 'center' | 'left' | 'right';
  borderHeaderCell: 'unbordered' | 'unbordered-vertical';
  paddingHeaderCell: 'small' | 'medium' | 'large';
  paddingLeftHeaderCell: 'small' | 'medium' | 'large';
  paddingRightHeaderCell: 'small' | 'medium' | 'large';
  paddingTopHeaderCell: 'small' | 'medium' | 'large';
  paddingBottomHeaderCell: 'small' | 'medium' | 'large';

  textAlignDataCell: 'center' | 'left' | 'right';
  borderDataCell: 'unbordered' | 'unbordered-vertical';
  paddingDataCell: 'small' | 'medium' | 'large';
  paddingLeftDataCell: 'small' | 'medium' | 'large';
  paddingRightDataCell: 'small' | 'medium' | 'large';
  paddingTopDataCell: 'small' | 'medium' | 'large';
  paddingBottomDataCell: 'small' | 'medium' | 'large';
}

const headerCellProps = {
  textAlignHeaderCell: {
    options: ['center', 'left', 'right'],
    control: { type: 'radio' },
    defaultValue: 'center',
  },
  borderHeaderCell: {
    options: ['unbordered', 'unbordered-vertical'],
    control: { type: 'radio' },
    defaultValue: '',
  },
  paddingHeaderCell: {
    options: ['small', 'medium', 'large'],
    control: { type: 'radio' },
    defaultValue: '',
  },
  paddingLeftHeaderCell: {
    options: ['small', 'medium', 'large'],
    control: { type: 'radio' },
    defaultValue: '',
  },
  paddingRightHeaderCell: {
    options: ['small', 'medium', 'large'],
    control: { type: 'radio' },
    defaultValue: '',
  },
  paddingTopHeaderCell: {
    options: ['small', 'medium', 'large'],
    control: { type: 'radio' },
    defaultValue: '',
  },
  paddingBottomHeaderCell: {
    options: ['small', 'medium', 'large'],
    control: { type: 'radio' },
    defaultValue: '',
  },
};

const dataCellProps = {
  textAlignDataCell: {
    options: ['center', 'left', 'right'],
    control: { type: 'radio' },
    defaultValue: 'center',
  },
  borderDataCell: {
    options: ['unbordered', 'unbordered-vertical'],
    control: { type: 'radio' },
    defaultValue: '',
  },
  paddingDataCell: {
    options: ['small', 'medium', 'large'],
    control: { type: 'radio' },
    defaultValue: '',
  },
  paddingLeftDataCell: {
    options: ['small', 'medium', 'large'],
    control: { type: 'radio' },
    defaultValue: '',
  },
  paddingRightDataCell: {
    options: ['small', 'medium', 'large'],
    control: { type: 'radio' },
    defaultValue: '',
  },
  paddingTopDataCell: {
    options: ['small', 'medium', 'large'],
    control: { type: 'radio' },
    defaultValue: '',
  },
  paddingBottomDataCell: {
    options: ['small', 'medium', 'large'],
    control: { type: 'radio' },
    defaultValue: '',
  },
};

export default {
  title: 'Table',
  components: Index,
  argTypes: {
    ...headerCellProps,
    ...dataCellProps,
    caption: {
      control: { type: 'text' },
      defaultValue: 'caption',
    },
    header: {
      control: { type: 'text' },
      defaultValue: 'head1,head2,head3',
    },
    body: {
      control: { type: 'text' },
      defaultValue: 'body1,body2,body3',
    },
  },
} as ComponentMeta<typeof Index & IStoryAdditionalProps>;

export const Default: ComponentStory<typeof Index & JSXElementConstructor<IStoryAdditionalProps>> =
  ({
    caption, header, body,

    textAlignHeaderCell,
    borderHeaderCell,
    paddingHeaderCell,
    paddingLeftHeaderCell,
    paddingRightHeaderCell,
    paddingTopHeaderCell,
    paddingBottomHeaderCell,

    textAlignDataCell,
    borderDataCell,
    paddingDataCell,
    paddingLeftDataCell,
    paddingRightDataCell,
    paddingTopDataCell,
    paddingBottomDataCell,
    ...props }) => {
    const headerArr = header
      ? header.split(',')
      : [];

    const bodyArr = body
      ? body.split(',')
      : [];

    return (
      <Index {...props}>
        <Caption>
          <span>{caption}</span>
        </Caption>

        <Head>
          <Row>
            {headerArr.map((headerItem) => {
              return (
                <HeaderCell
                  key={headerItem}
                  textAlign={textAlignHeaderCell}
                  border={borderHeaderCell}
                  padding={paddingHeaderCell}
                  paddingLeft={paddingLeftHeaderCell}
                  paddingRight={paddingRightHeaderCell}
                  paddingTop={paddingTopHeaderCell}
                  paddingBottom={paddingBottomHeaderCell}
                >
                  <span>{headerItem}</span>
                </HeaderCell>
              );
            })}
          </Row>
        </Head>

        <Body>
          <Row>
            {bodyArr.map((bodyItem) => {
              return (
                <DataCell
                  key={bodyItem}
                  textAlign={textAlignDataCell}
                  border={borderDataCell}
                  padding={paddingDataCell}
                  paddingLeft={paddingLeftDataCell}
                  paddingRight={paddingRightDataCell}
                  paddingTop={paddingTopDataCell}
                  paddingBottom={paddingBottomDataCell}
                >
                  <span>{bodyItem}</span>
                </DataCell>
              );
            })}
          </Row>
        </Body>
      </Index>
    );
  };
