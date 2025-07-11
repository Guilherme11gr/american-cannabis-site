// components/Checkbox.tsx
import { ChangeEvent, FC, ReactNode } from 'react'
import styled from '@emotion/styled'

const CheckboxContainer = styled.label<{ checked: boolean }>`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
  font-size: 1rem;
  color:  ${({ checked, theme }) => checked ? theme.colors.accent : theme.colors.background};
`

const HiddenCheckbox = styled.input`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`

const StyledCheckbox = styled.div<{ checked: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: 1.25em;
  height: 1.25em;
  margin-right: 0.5em;

  border: 2px solid ${({ theme }) => theme.colors.accent};
  border-radius: 4px;
  background: ${({ checked, theme }) => checked ? theme.colors.accent : 'transparent'};

  transition: background 150ms;

  /* checkmark */
  &::after {
    content: ${({ checked }) => (checked ? "'✔'" : "''")};
    color: white;
    font-size: 0.9em;
    line-height: 1;
  }
`

type CheckboxProps = {
  checked: boolean
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  children: ReactNode
}

export const Checkbox: FC<CheckboxProps> = ({ checked, onChange, children }) => (
  <CheckboxContainer checked={checked}>
    <HiddenCheckbox type="checkbox" checked={checked} onChange={onChange} />
    <StyledCheckbox checked={checked} />
    {children}
  </CheckboxContainer>
)
