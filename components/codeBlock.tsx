import Highlight, { defaultProps, Language } from "prism-react-renderer";
import dracula from 'prism-react-renderer/themes/dracula';
import React, { FC } from "react";
import * as mdx from '@mdx-js/react';

import { styled } from "@theme";

const Pre = styled('pre', {
  width: '90%',
  display: 'inline-block',
  my: '$5',
  mx: 'auto',
  textAlign: 'left',
  padding: '$4',
  overflow: 'auto',
  borderRadius: '$2',
  boxShadow: '-15px 0 30px -10px var(--colors-orangeA7), 0 0 30px -10px var(--colors-pinkA7), 15px 0 30px -20px var(--colors-violetA7), 0 0 0 1px var(--colors-pinkA6)'
})

const Line = styled('div', {
  display: 'table-row',
  my: '$1'
});

const LineNo = styled('span', {
  display: 'table-cell',
  textAlign: 'right',
  pr: '1em',
  userSelect: 'none',
  opacity: .5
});

const LineContent = styled('span', {
  display: 'table-cell'
});

export const CodeBlock: FC<typeof mdx.MDXProvider> = ({ children }) => {
  const { props } = children as { props: { [key: string]: string } };

  const className = props?.className || "";
  const matches = className.match(/language-(?<lang>.*)/);

  return (
    <Highlight
      {...defaultProps}
      code={props?.children.trim() || ''}
      language={ matches?.groups?.lang as Language}
      theme={dracula}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <Pre
          className={className}
          style={style}
        >
          {tokens.map((line, index) => (
            <Line
              key={index}
              { ...getLineProps({ line, key: index }) }
            >
              <LineNo>
                {index + 1}
              </LineNo>

              <LineContent>
                {line.map((token, key) => (
                  <span
                    key={key}
                    { ...getTokenProps({ token, key }) }
                  />
                ))}
              </LineContent>
            </Line>
          ))}
        </Pre>
      )}
    </Highlight>
  );
};