// components/common/BrandChangeModal.tsx
import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import Link from 'next/link'
import { Button } from '@/components/shared/button'
import Image from 'next/image'

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`

const Modal = styled.div`
  position: relative;
  background: rgba(255, 255, 255, 0.95) url('/imgs/modal-bg-pattern.svg') no-repeat bottom right;
  background-size: 120px;
  padding: 3rem 2rem 2rem;
  border-radius: 12px;
  width: 85%;
  max-width: 700px;
  text-align: left;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  @media (max-width: 768px) {
    width: 95%;
    padding: 2rem 1.5rem;
  }
`

const Title = styled.h2`
  margin: 0 0 1rem;
  font-size: 2rem;
  line-height: 1.2;
`

const Content = styled.p`
  margin: 0 0 1rem;
  line-height: 1.6;
  font-size: 1rem;
`

const Footer = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`

const CloseButton = styled.button`
  position: absolute;
  top: 0.5rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`

const BrandChangeModal: React.FC = () => {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    if (typeof window === 'undefined') return
    const seen = localStorage.getItem('hasSeenBrandModal')
    if (!seen) {
      setVisible(true)
      localStorage.setItem('hasSeenBrandModal', 'true')
    }
  }, [])
  useEffect(() => {
    document.body.style.overflow = visible ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [visible])
  if (!visible) return null
  return (
    <Overlay onClick={() => setVisible(false)}>
      <Modal onClick={e => e.stopPropagation()}>
        <CloseButton onClick={() => setVisible(false)}>&times;</CloseButton>
        <Title>Conheça nossa nova identidade</Title>
        <Content>A antiga <strong>Brasil Cannabis</strong> agora evoluiu para <strong>American Cannabis</strong>.</Content>
        <Content>Oferecemos produtos canábicos premium, de óleos e extratos a gomas e itens de bem-estar, todos rigorosamente selecionados e testados.</Content>
        <Content>Com logística ágil e transparência total, entregamos para todo o Brasil e garantimos uma experiência de compra excepcional com suporte dedicado.</Content>
        <Footer>
          <Link href="#about" passHref>
            <Button onClick={() => setVisible(false)}>
              Saiba mais
              <Image src="imgs/arrow-right-svgrepo-com.svg" alt="" height={36} width={36} />
            </Button>
          </Link>
        </Footer>
      </Modal>
    </Overlay>
  )
}
export default BrandChangeModal
