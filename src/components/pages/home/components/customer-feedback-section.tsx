import { CarouselDots } from "@/components/shared/carousel-slider-dots";
import { useCarouselSlider } from "@/hooks/use-carousel-slider";
import styled from "@emotion/styled";

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
  background: url('/imgs/phone-template.svg') center/contain no-repeat;
  overflow: hidden;
`;

const Screenshot = styled.img`
  position: absolute;
  top: 8%;
  left: 1%;
  width: 97.5%;
  height: 83%;
  object-fit: contain;
  border-radius: 0px;
`;

export const CustomerFeedbackSection = () => {
  const { sliderRef, instanceRef, currentSlide } = useCarouselSlider<HTMLUListElement>()

  return (
    <CustomerFeedbackContainer>
      <h3>O que nossos clientes estão dizendo</h3>
      <ul ref={sliderRef} className="keen-slider">
        <li className="keen-slider__slide">
          <PhoneFrame>
            <Screenshot src="/imgs/relato-img.jpg" alt="print do relato" />
          </PhoneFrame>
        </li>
        <li className="keen-slider__slide">
          <PhoneFrame>
            <Screenshot src="/imgs/relato-img.jpg" alt="print do relato" />
          </PhoneFrame>
        </li>
        <li className="keen-slider__slide">
          <PhoneFrame>
            <Screenshot src="/imgs/relato-img.jpg" alt="print do relato" />
          </PhoneFrame>
        </li>
        <li className="keen-slider__slide">
          <PhoneFrame>
            <Screenshot src="/imgs/relato-img.jpg" alt="print do relato" />
          </PhoneFrame>
        </li>
        <li className="keen-slider__slide">
          <PhoneFrame>
            <Screenshot src="/imgs/relato-img.jpg" alt="print do relato" />
          </PhoneFrame>
        </li>
        <li className="keen-slider__slide">
          <PhoneFrame>
            <Screenshot src="/imgs/relato-img.jpg" alt="print do relato" />
          </PhoneFrame>
        </li>
        <li className="keen-slider__slide">
          <PhoneFrame>
            <Screenshot src="/imgs/relato-img.jpg" alt="print do relato" />
          </PhoneFrame>
        </li>
      </ul>

      <CarouselDots currentSlide={currentSlide} instance={instanceRef.current!} />
    </CustomerFeedbackContainer>
  )
}
