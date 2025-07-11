import React from 'react'
import styled from '@emotion/styled'
import { KeenSliderInstance } from 'keen-slider/react'

const DotsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`

const DotButton = styled.button`
  width: 0.625rem;
  height: 0.625rem;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.background};
  margin: 0 0.25rem;
  border: none;
  cursor: pointer;
  opacity: 0.5;
  transition: opacity 0.2s;

  &.active {
    opacity: 1;
    background: ${({ theme }) => theme.colors.primaryLight};
  }
`


interface CarouselDotsProps {
  currentSlide: number
  instance?: KeenSliderInstance
}

export const CarouselDots: React.FC<CarouselDotsProps> = ({
  currentSlide,
  instance,
}) => {
  if (!instance) return null

  const slidesCount = instance.track.details.slides.length

  return (
    <DotsContainer>
      {Array.from({ length: slidesCount }).map((_, idx) => (
        <DotButton
          key={idx}
          onClick={() => instance.moveToIdx(idx)}
          className={currentSlide === idx ? 'active' : ''}
          aria-label={`Go to slide ${idx + 1}`}
        />
      ))}
    </DotsContainer>
  )
}

