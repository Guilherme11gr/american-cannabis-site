// src/components/shared/MobileFilter.tsx
import React, { useState } from 'react'
import styled from '@emotion/styled'

const FilterButton = styled.button`
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  background: ${({ theme }) => theme.colors.primaryLight};
  color: ${({ theme }) => theme.colors.darkPurple};
  padding: 1rem 1.25rem;
  border-radius: 1.25rem;
  z-index: 1000;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.3);
  font-weight: 600;
  cursor: pointer;
  font-size: 1rem;
  &:hover {
    filter: brightness(0.9);
  }
`

const Overlay = styled.div<{ visible: boolean }>`
  display: ${({ visible }) => (visible ? 'flex' : 'none')};
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  justify-content: center;
  align-items: center;
  z-index: 999;
`

const Drawer = styled.div`
  position: relative;
  background: linear-gradient(
    135deg,
    rgba(147, 51, 234, 0.95),
    rgba(124, 58, 237, 0.95)
  );
  width: 90%;
  max-width: 340px;
  max-height: 80%;
  overflow-y: auto;
  border-radius: 16px;
  padding: 1.5rem 1rem 2rem;
  color: var(--text-dark);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
`

const CloseButton = styled.button`
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.background};
  font-size: 1.25rem;
  cursor: pointer;
  padding: 0.25rem;
  line-height: 1;
  &:hover {
    color: var(--accent-pink);
  }
`

const ApplyButton = styled.button`
  margin-top: 1.5rem;
  width: 100%;
  background: ${({ theme }) => theme.colors.primaryLight};
  color: var(--text-dark);
  padding: 0.75rem;
  border: none;
  border-radius: 999px;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);

  position: sticky;
  bottom: 0;
  &:hover {
    filter: brightness(0.9);
  }
`

export function MobileFilter({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <FilterButton onClick={() => setOpen(true)}>
        Filtrar
      </FilterButton>

      <Overlay visible={open} onClick={() => setOpen(false)}>
        <Drawer onClick={e => e.stopPropagation()}>
          <CloseButton onClick={() => setOpen(false)} aria-label="Fechar filtros">
            &times;
          </CloseButton>
          <h3 style={{ marginTop: 0, color: '#FFF', fontSize: '1.25rem' }}>
            Filtrar
          </h3>
          {children}
          <ApplyButton onClick={() => setOpen(false)}>
            Aplicar
          </ApplyButton>
        </Drawer>
      </Overlay>
    </>
  )
}
