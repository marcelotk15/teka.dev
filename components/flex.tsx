import { FC } from "react";

import { styled } from '@theme';
import { CSS } from "@stitches/react/types/css-util";

interface FlexProps {
  display?: 'flex' | 'block',
  flexDirection?: 'row' | 'column',
  justifyContent?:
    | 'flexStart'
    | 'flexEnd'
    | 'center'
    | 'spaceBetween'
    | 'spaceAround'
    | 'initial'
    | 'inherit'
    | 'normal',
  flexWrap?: 'wrap' | 'nowrap' | 'wrapReverse',
  alignItems?:
    | 'stretch'
    | 'center'
    | 'flexStart'
    | 'flexEnd'
    | 'baseline'
    | 'initial'
    | 'inherit'
    | 'normal',
  css?: CSS,
  as?: never

  // flexGrow?: number,
  // flexShrink?: number,
  // flexBasis?: number,
  // flex?: string,

  // padding?: string,
  // margin?: string,
  // width?: string,
  // height?: string,
  // maxWidth?: string,
  // maxHeight?: string
}

const FlexStyled = styled('div', {
  variants: {
    display: {
      flex: { display: 'flex' },
      block: { display: 'block' }
    },

    flexDirection: {
      row: { flexDirection: 'row' },
      column: { flexDirection: 'column' }
    },

    justifyContent: {
      flexStart: { justifyContent: 'flex-start' },
      flexEnd: { justifyContent: 'flex-end' },
      center: { justifyContent: 'center' },
      spaceBetween: { justifyContent: 'space-between' },
      spaceAround: { justifyContent: 'space-around' },
      initial: { justifyContent: 'initial' },
      inherit: { justifyContent: 'inherit' },
      normal: { justifyContent: 'normal' }
    },

    flexWrap: {
      wrap: { flexWrap: 'wrap' },
      nowrap: { flexWrap: 'nowrap' },
      wrapReverse: { flexWrap: 'wrap-reverse' },
    },

    alignItems: {
      stretch: { alignItems: 'stretch' },
      center: { alignItems: 'center' },
      flexStart: { alignItems: 'flex-start' },
      flexEnd: { alignItems: 'flex-end' },
      baseline: { alignItems: 'baseline' },
      initial: { alignItems: 'initial' },
      inherit: { alignItems: 'inherit' },
      normal: { alignItems: 'normal' }
    }
  }
});

export const Flex: FC<FlexProps> = ({
  children,
  display,
  flexDirection,
  justifyContent,
  flexWrap,
  alignItems,
  css,
  as
}) => (
  <FlexStyled
    display={display || 'flex'}
    flexDirection={flexDirection || 'row'}
    justifyContent={justifyContent || 'normal'}
    flexWrap={flexWrap || 'nowrap'}
    alignItems={alignItems || 'normal'}
    css={{ ...css }}
    as={as || 'div'}
  >
    {children}
  </FlexStyled>
);