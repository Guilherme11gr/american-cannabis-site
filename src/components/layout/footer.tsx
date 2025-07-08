import styled from '@emotion/styled'

const FooterContainer = styled.div`
  width: 100%;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: ${props => props.theme.colors.secondaryDark};
  border-radius: ${props => props.theme.radii.large};
  margin-top: 4rem;

  @media screen and (max-width: 768px) {
    padding: 1rem;
  }  
`

const SocialMediaContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;

  @media screen and (max-width: 768px) {
    gap: 0.5rem;
  }
`;

const SocialMediaButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;

  img {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    padding: 0.25rem;
    background-color: ${props => props.theme.colors.backgroundLight};
  }

  span {
    font-size: 1rem;
    color: white;
  }
`

const InfoContainer = styled.div`
  margin-top: 1rem;
  color: ${props => props.theme.colors.white};
  font-size: 0.875rem;

  p {
    margin: 0.25rem 0;
    font-weight: bold;

    @media screen and (max-width: 768px) {
      font-size: 0.75rem;
    }
  }

  i {
    font-style: italic;
  }
`

export const Footer = () => {
  return (
    <FooterContainer>
      <SocialMediaContainer>
        <SocialMediaButton>
          <img src="/imgs/whatsapp-icon.svg" alt="Logo" />
          <span>Fale conosco</span>
        </SocialMediaButton>
        <SocialMediaButton>
          <img src="/imgs/instagram-icon.svg" alt="Logo" />
          <span>@Instagram</span>
        </SocialMediaButton>
      </SocialMediaContainer>
      <InfoContainer>
        <p><i>Venda proibida para menores de 18 anos</i></p>
        <p>© 2025 American Cannabis. Todos os direitos reservados.</p>
      </InfoContainer>
    </FooterContainer>
  )
}
