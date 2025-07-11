/** DescriptionAccordion.tsx */
import React, { useState } from 'react'
import styled from '@emotion/styled'
import { formatDescription } from '@/utils/mask'

interface AccordionProps {
  /** Texto completo da descrição */
  text: string
  /** Quantas linhas mostrar quando fechado */
  collapsedLines?: number
  /** Label do botão para expandir */
  moreLabel?: string
  /** Label do botão para recolher */
  lessLabel?: string
}

const Wrapper = styled.div`
  margin: 1.5rem 0;
`

const Content = styled.div<{ expanded: boolean; collapsedLines: number }>`
  color: var(--text-primary-dark);
  line-height: 1.6;
  font-size: 1rem;

  /* Quando fechado, ativa o clamp de linhas */
  ${({ expanded, collapsedLines }) =>
    !expanded &&
    `
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: ${collapsedLines};
    overflow: hidden;
  `}
`

const ToggleButton = styled.button`
  margin-top: 0.5rem;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.accent};
  font-weight: 600;
  cursor: pointer;
  padding: 0;
  font-size: 0.95rem;
  &:hover {
    text-decoration: underline;
  }
`

export default function DescriptionAccordion({
  text,
  collapsedLines = 3,
  moreLabel = 'Ver mais',
  lessLabel = 'Ver menos',
}: AccordionProps) {
  const [expanded, setExpanded] = useState(false)

  return (
    <Wrapper>
      <Content dangerouslySetInnerHTML={{ __html: formatDescription(text) }} expanded={expanded} collapsedLines={collapsedLines} />
      <ToggleButton onClick={() => setExpanded((o) => !o)}>
        {expanded ? lessLabel : moreLabel}
      </ToggleButton>
    </Wrapper>
  )
}
