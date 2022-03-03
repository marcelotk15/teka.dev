import { styled } from "@theme";
import { FunctionComponent } from "react";

interface ContainerProps {
  layout?: 'center-horizontal' | 'center-vertical' | undefined
  size?: 'full' | 'adaptive' | undefined
  css?: any
  children: React.ReactNode
}

const ContainerStyled = styled('div', {
  width: "768px",
  display: "flex",
  justifyContent: 'space-between',
  mx: "auto",
  maxWidth: 'calc(100% - 1rem * 2)',

  '@desktop': {
    maxWidth: 'calc(100% - 2 rem * 2)'
  },

  variants: {
    layout: {
      'center-horizontal': {
        justifyContent: 'center',
        textAlign: 'center'
      },

      'center-vertical': {
        flexDirection: 'column',
        alignItems: 'center'
      }
    },

    size: {
      full: {
        width: '100%',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        maxWidth: 'calc(100% - 1rem * 2)'
      },

      adaptive: {
        maxWidth: '100%',

        '@tablet': {
          maxWidth: 'calc(100% - 1rem * 2)',
        },

        '@desktop': {
          maxWidth: 'calc(100% - 2rem * 2)',
        }
      },
    }
  }
})

export const Container: FunctionComponent<ContainerProps> = ({
  layout,
  css,
  children,
  size
}) => {
  return (
    <ContainerStyled
      className="container"
      layout={layout}
      size={size}
      css={css}
    >
      {children}
    </ContainerStyled>
  )
};
