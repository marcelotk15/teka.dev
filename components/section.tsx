import { FC } from "react";

import { styled } from "@theme";
import { P } from ".";

interface SectionProps {
  title: string
}

const SectionStyled = styled('section', {
  mt: '$6'
})

export const Section: FC<SectionProps> = ({ children, title }) => {
  return (
    <SectionStyled>
      <P font={'heading'} weight={'bold'} size={{ '@initial': '9', '@tablet': '11', '@desktop': '12' }} as={'h1'} css={{ mb: '$4' }}>
        {title}
      </P>

      {children}
    </SectionStyled>
  )
};
