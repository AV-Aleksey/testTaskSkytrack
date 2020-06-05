import React from 'react'
import { NavLink } from 'react-router-dom'
import { Navbar, Container } from 'react-bootstrap'
import scss from './nav.module.scss'

export default function Nav() {
  return (
    <div className={scss.Nav__backgroundBlock}>
      <Container>
        <Navbar className={scss.Nav__wrap}>
          <Navbar.Brand href="/home">GIF API</Navbar.Brand>
          <div className={scss.Nav__links}>
            <NavLink activeClassName={scss.active} to="/home" exact >Главная</NavLink>
            <NavLink activeClassName={scss.active} to="/history" exact >История</NavLink>
          </div>
        </Navbar>
      </Container>
    </div>

  )
}

