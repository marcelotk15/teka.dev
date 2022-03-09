import GithubSlugger from "github-slugger";
import { Dispatch, MouseEvent, SetStateAction, useEffect, useRef, useState } from "react";

import { styled } from '@theme'
import { Flex, P } from ".";

interface TableOfContentsProps {
  source: string;
}

function useIntersectionObserver (setActiveId: Dispatch<SetStateAction<string>>) {
  const headingElementsRef = useRef<{ [key: string]: IntersectionObserverEntry }>({});

  useEffect(() => {
    const callback = (headings: IntersectionObserverEntry[]) => {
      headingElementsRef.current = headings.reduce(
        (
          map: { [x: string]: any },
          headingElement: { target: { id: string | number } }
        ) => {
          map[headingElement.target.id] = headingElement;

          return map;
        },
        headingElementsRef.current
      );

      const visibleHeadings: IntersectionObserverEntry[] = [];

      Object.keys(headingElementsRef.current).forEach((key) => {
        const headingElement = headingElementsRef.current[key];
        if (headingElement.isIntersecting) visibleHeadings.push(headingElement);
      });

      const getIndexFromId = (id: string) =>
        headingElements.findIndex((heading) => heading.id === id);

      if (visibleHeadings.length === 1) {
        setActiveId(visibleHeadings[0].target.id);
      } else if (visibleHeadings.length > 1) {
        const sortedVisibleHeadings = visibleHeadings.sort(
          (a, b) => getIndexFromId(b.target.id) - getIndexFromId(a.target.id)
        );

        setActiveId(sortedVisibleHeadings[0].target.id);
      }
    };

    const observer = new IntersectionObserver(callback, {
      rootMargin: "0px 0px -70% 0px",
    });

    const headingElements = Array.from(
      document.querySelectorAll("article h2, article h3")
    );

    headingElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [setActiveId]);
}

const ContentHeading = styled('button', {
  display: 'inline-flex',
  appearance: 'none',
  alignItems: 'center',
  justifyContent: 'left',
  whiteSpace: 'nowrap',
  outline: 'transparent solid 2px',
  outlineOffset: '2px',
  lineHeight: 'nonrmal',
  padding: '$0',
  cursor: 'pointer',
  backgroundColor: 'transparent',
  color: '$slate11',
  fontSize: '$-1',

  variants: {
    active: {
      true: {
        fontWeight: '$bold',
        textDecoration: 'underline',
        textUnderlineOffset: '2px',
        textDecorationThickness: '2px',
        textDecorationColor: '$slateA4'
      }
    }
  }
});

export function TableOfContents ({ source }: TableOfContentsProps ) {
  const headingLines = source.split('\n').filter((line) => line.match(/^###*\s/));

  const headings = headingLines.map((raw) => {
    const text = raw.replace(/^###*\s/, "");
    const level = raw.slice(0, 3) === "###" ? 3 : 2;
    const slugger = new GithubSlugger();

    return {
      text,
      level,
      href: slugger.slug(text),
    };
  });

  const [activeId, setActiveId] = useState<string>();

  useIntersectionObserver(setActiveId);

  function handleOnClick (e: MouseEvent<HTMLElement>, href: string) {
    e.preventDefault();

    const element =  document?.querySelector(`#${href}`);

    if (!element) return;

    const dims = element.getBoundingClientRect();

    window.scrollTo(window.scrollX, dims.top + window.scrollY - 100);
  }

  return (
    <Flex flexDirection="column" css={{ gap: '$3' }}>
      <P>Table of contents</P>

      <Flex flexDirection="column" css={{ gap: '$2' }}>
        {headings.map((heading, index) =>
          <ContentHeading
            key={index}
            onClick={(e) => handleOnClick(e, heading.href)}
            active={heading.href === activeId}
          >
            {heading.text}
          </ContentHeading>
        )}
      </Flex>
    </Flex>
  );
}