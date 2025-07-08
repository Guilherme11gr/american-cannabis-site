import { useState } from 'react'
import { useKeenSlider, KeenSliderInstance } from 'keen-slider/react'

export function useCarouselSlider<T extends HTMLElement = HTMLElement>() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const AUTOPLAY_DELAY = 3000

  const autoplay = (slider: KeenSliderInstance) => {
    let timer: ReturnType<typeof setTimeout>
    const clear = () => clearTimeout(timer)
    const next = () => {
      clear()
      timer = setTimeout(() => slider.next(), AUTOPLAY_DELAY)
    }
    slider.on('created', next)
    slider.on('animationEnded', next)
    slider.on('dragStarted', clear)
  }

  const [sliderRef, instanceRef] = useKeenSlider<T>(
    {
      loop: true,
      mode: 'snap',
      rubberband: true,
      defaultAnimation: {
        duration: 300,
        easing: (t: number) => t,
      },
      slides: {
        perView: 1,
        spacing: 16,
      },
      breakpoints: {
        '(min-width: 768px)': {
          slides: {
            perView: 3,
            spacing: 24,
          },
        },
      },
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel)
      },
      created() {
        setLoaded(true)
      },
    },
    [autoplay]
  )

  return { sliderRef, instanceRef, currentSlide, loaded }
}
