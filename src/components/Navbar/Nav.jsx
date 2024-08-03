import React from 'react'
import style from './Nav.module.css'
import { Link } from 'react-router-dom'
function Nav() {
  return (
    <>
    <div className={style.nav}>
        <div className={style.left}>
            <h1><Link to={"/"}>HomeLogo</Link></h1>
        </div>
        <div className={style.right}>
            <ul>
                <li><Link to={"/movies"}>MOVIES</Link></li>
                <li><Link to={"/tvshows"}>Tv SHOWS</Link></li>
                <li>Search</li>
            </ul>
        </div>
    </div>
    </>
  )
}

export default Nav