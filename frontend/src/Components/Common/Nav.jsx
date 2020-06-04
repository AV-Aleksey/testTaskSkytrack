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
            <NavLink activeClassName={scss.active} to="/home" exact >Home</NavLink>
            <NavLink activeClassName={scss.active} to="/history" exact >History</NavLink>
          </div>
        </Navbar>
      </Container>
    </div>

  )
}

