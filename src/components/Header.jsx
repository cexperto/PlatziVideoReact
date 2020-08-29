import React from 'react'
import '../assets/styles/components/Header.scss'

const Header = () =>(
    <header className="header">    
        <img className="header__img" src="https://raw.githubusercontent.com/platzi/PlatziVideo/feature/react/src/assets/static/logo-platzi-video-BW2.png" alt=""/>
        <div className="header__menu">
            <div className="header__menu--profile">
                <img src="https://i.imgur.com/jov4SFj.jpg" alt="User" />
                <p>Perfil</p>
            </div>
            <ul>
                <li><a href="">Cuenta</a></li>
                <li><a href="">Cerrar sesion</a></li>
            </ul>
        </div>
    </header>
)
export default Header
