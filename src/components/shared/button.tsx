import styled from '@emotion/styled'

const ButtonContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 1.5rem;
  max-width: 412px;
  max-height: 3rem;
  border-radius: 2.5rem;
  transition: background-color 0.15s ease-in-out;

  span {
    color: ${({ theme }) => theme.colors.action};
    font-weight: bold;
    font-size: 1rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryLight};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Button: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ButtonContainer>
      <span>{children}</span>
    </ButtonContainer>
  )
}
