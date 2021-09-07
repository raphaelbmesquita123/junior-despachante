import React, { useState } from 'react'
import { slide as Menu } from 'react-burger-menu'

//styles
import { ContainerNav, BurguerContainer } from './styles'
import './menuStyle.css'

export function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  function handleCloseMenu(e) {
    e.preventDefault()
    setIsMenuOpen(false)
  }

  function handleStateChange(state) {
    setIsMenuOpen(state.isOpen)
  }
  return (
    <>
      <ContainerNav>
        <img src='/logo.png' alt='Junior Despachante Logo' />
        <div>
          <a href='/'>Home</a>
          <a href='/'>Serviços</a>
          <a href='/'>Como funciona</a>
          <a href='/'>Pagamentos</a>
          <a href='/'>FAQ</a>
          <a href='/'>Contato</a>
        </div>
      </ContainerNav>
      <BurguerContainer>
        <Menu
          isOpen={isMenuOpen}
          onStateChange={(state) => handleStateChange(state)}
        >
          <a
            className='menu-item'
            id='menu-button'
            href='/'
            onClick={(e) => handleCloseMenu(e)}
          >
            Home
          </a>
          <a
            className='menu-item'
            id='menu-button'
            href='/'
            onClick={(e) => handleCloseMenu(e)}
          >
            Serviços
          </a>
          <a
            className='menu-item'
            id='menu-button'
            href='/'
            onClick={(e) => handleCloseMenu(e)}
          >
            Como funciona
          </a>
          <a
            className='menu-item'
            id='menu-button'
            href='/'
            onClick={(e) => handleCloseMenu(e)}
          >
            Pagamentos
          </a>
          <a
            className='menu-item'
            id='menu-button'
            href='/'
            onClick={(e) => handleCloseMenu(e)}
          >
            FAQ
          </a>
          <a
            className='menu-item'
            id='menu-button'
            href='/'
            onClick={(e) => handleCloseMenu(e)}
          >
            Contato
          </a>
        </Menu>
      </BurguerContainer>
    </>
  )
}
