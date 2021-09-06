import React, { useState } from 'react'
import { slide as Menu } from 'react-burger-menu'

//services
import { useWindowSize } from '../../services/windowSize'

//styles
import { ContainerNav, BurguerContainer } from './styles'
import { styles } from './menuStyles'

export function NavBar() {
  const { width } = useWindowSize()
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
      <BurguerContainer display={width > 650 ? 'none' : 'block'}>
        <Menu
          styles={styles}
          isOpen={isMenuOpen}
          onStateChange={(state) => handleStateChange(state)}
        >
          <a className='menu-item' href='/' onClick={(e) => handleCloseMenu(e)}>
            Home
          </a>
          <a className='menu-item' href='/' onClick={(e) => handleCloseMenu(e)}>
            Serviços
          </a>
          <a className='menu-item' href='/' onClick={(e) => handleCloseMenu(e)}>
            Como funciona
          </a>
          <a className='menu-item' href='/' onClick={(e) => handleCloseMenu(e)}>
            Pagamentos
          </a>
          <a className='menu-item' href='/' onClick={(e) => handleCloseMenu(e)}>
            FAQ
          </a>
          <a className='menu-item' href='/' onClick={(e) => handleCloseMenu(e)}>
            Contato
          </a>
        </Menu>
      </BurguerContainer>
    </>
  )
}
