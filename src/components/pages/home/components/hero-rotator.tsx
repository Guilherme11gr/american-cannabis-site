/** src/components/HeroRotator.tsx */
import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'

const phrases = [
  {
    title: 'Transparência confiável',
    subtitle: 'Todos os ingredientes testados em laboratório.',
  },
  {
    title: 'Qualidade Premium',
    subtitle: 'Importados, certificados e rigorosamente selecionados.',
  },
  {
    title: 'Atendimento Personalizado',
    subtitle: 'Finalize seu pedido via WhatsApp com total segurança.',
  },
]

const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 600px;
`

// efeito bounce no título
const bounceIn = keyframes`
  0%   { opacity: 0; transform: scale(0.8) translateY(20px); }
  60%  { opacity: 1; transform: scale(1) translateY(-8px); }
  100% { transform: scale(1)   translateY(0); }
`

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to   { opacity: 1; transform: translateY(0); }
`

const AnimatedTitle = styled.h1`
  font-size: 2.5rem;
  color: #ff8aa0;
  margin: 0;
  z-index: 100;
  animation: ${bounceIn} 1.2s cubic-bezier(0.68, -0.55, 0.27, 1.55) both;
`

const SubtitleWrapper = styled.div`
  min-height: calc(2 * 1.8rem);
`

const AnimatedSubtitle = styled.p`
  font-size: 1.125rem;
  line-height: 1.6;
  color: #fff;
  margin: 0;
  white-space: pre-wrap;
  animation: ${fadeUp} 0.9s ease-out both;
  animation-delay: 0.6s;
`

export default function HeroRotator() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const iv = window.setInterval(() => {
      setCurrent(i => (i + 1) % phrases.length)
    }, 5000)
    return () => window.clearInterval(iv)
  }, [])

  return (
    <Container>
      <AnimatedTitle key={phrases[current].title}>
        {phrases[current].title}
      </AnimatedTitle>

      <SubtitleWrapper>
        <AnimatedSubtitle key={current}>
          {phrases[current].subtitle}
        </AnimatedSubtitle>
      </SubtitleWrapper>
    </Container>
  )
}
