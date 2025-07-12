import { CarouselDots } from "@/components/shared/carousel-slider-dots";
import { useCarouselSlider } from "@/hooks/use-carousel-slider";
import styled from "@emotion/styled";

import feedback1 from './../../../../../public/imgs/feedbacks/feedback1.png'
import feedback2 from './../../../../../public/imgs/feedbacks/feedback2.png'
import feedback3 from './../../../../../public/imgs/feedbacks/feedback3.png'
import feedback4 from './../../../../../public/imgs/feedbacks/feedback4.png'
import feedback5 from './../../../../../public/imgs/feedbacks/feedback5.png'
import feedback6 from './../../../../../public/imgs/feedbacks/feedback6.png'
import feedback7 from './../../../../../public/imgs/feedbacks/feedback7.png'
import feedback8 from './../../../../../public/imgs/feedbacks/feedback8.png'
import feedback9 from './../../../../../public/imgs/feedbacks/feedback9.jpg'
import feedback10 from './../../../../../public/imgs/feedbacks/feedback10.jpg'

const feedbackList = [
  feedback1,
  feedback2,
  feedback3,
  feedback4,
  feedback5,
  feedback6,
  feedback7,
  feedback8,
  feedback9,
  feedback10
]

const CustomerFeedbackContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 4rem;  

  @media screen and (max-width: 768px) {
    margin-top: 2rem;
  }

  h3 {
    font-size: 2rem;
    font-weight: 800;
    color: ${({ theme }) => theme.colors.white};
  }

  ul {
    margin-top: 2.5rem;

    li {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
    }
  }
`;

const PhoneFrame = styled.div`
  position: relative;
  width: 100%;
  max-width: 300px;
  aspect-ratio: 300 / 615;
  background: url('imgs/phone-template.svg') center/contain no-repeat;
  overflow: hidden;
  padding: 2rem;
`;

const Screenshot = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  width: 83%;
  height: auto;
  object-fit: cover;
  border-radius: 12px;
`;

export const CustomerFeedbackSection = () => {
  const { sliderRef, instanceRef, currentSlide } = useCarouselSlider<HTMLUListElement>()

  return (
    <CustomerFeedbackContainer id="feedbacks">
      <h3>O que nossos clientes estão dizendo</h3>
      <ul ref={sliderRef} className="keen-slider">
        {feedbackList.map((feedback) => (
          <li key={feedback.src} className="keen-slider__slide">
            <PhoneFrame>
              <Screenshot src={feedback.src} alt="print do relato" />
            </PhoneFrame>
          </li>
        ))}
      </ul>
      <CarouselDots currentSlide={currentSlide} instance={instanceRef.current!} />
    </CustomerFeedbackContainer>
  )
}
