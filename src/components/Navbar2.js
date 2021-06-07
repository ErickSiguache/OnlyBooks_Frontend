import React, { useState } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Cookies from 'universal-cookie';


const cookies = new Cookies();

//Funcion de retorna el tipo de usuario administrador
function loginS() {
    //Verifica si el token esta vacio, si lo esta redirecciona la nav con boton de 
    //Inicio de sesion, si tiene datos este verifica que tipo de usuario es y
    //Le envia la navbar que corresponde para cada uno
    if(cookies.get('Token') === ""){
        const [click, setClick] = useState(false);
        const handleClick = () => setClick(!click);
        const closeMobileMenu = () => setClick(false);

        return (
        <>
            <nav className='navbarS'>
                <Link to='/' className='navbarS-logo' onClick={closeMobileMenu}>
                    Only
                    <i class='fab fa-firstdraft' />
                    <img src={require('../images/logo.png')} alt='Books' />
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Inicio
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link
                            to='/bibloteca'
                            className='nav-links'
                            onClick={closeMobileMenu}
                            >
                            Bibloteca
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link
                            to='/about'
                            className='nav-links'
                            onClick={closeMobileMenu}
                            >
                            Sobre Nosotros
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link
                            to='/contact-us'
                            className='nav-links'
                            onClick={closeMobileMenu}
                            >
                            Contactanos
                        </Link>
                    </li>
                    <li>
                        <Link
                            to='/sign-up'
                            className='nav-links-mobile'
                            onClick={closeMobileMenu}
                            >
                            Administracion
                        </Link>
                    </li>
                </ul>
                <Button />
            </nav>
        </> );
    }else{
        if(cookies.get('TipoU') === "Cliente"){
            const [click, setClick] = useState(false);
        const handleClick = () => setClick(!click);
        const closeMobileMenu = () => setClick(false);

        return (
        <>
            <nav className='navbarS'>
                <Link to='/' className='navbarS-logo' onClick={closeMobileMenu}>
                    Only
                    <i class='fab fa-firstdraft' />
                    <img src={require('../images/logo.png')} alt='Books' />
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Inicio
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link
                            to='/bibloteca'
                            className='nav-links'
                            onClick={closeMobileMenu}
                            >
                            Bibloteca
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link
                            to='/about'
                            className='nav-links'
                            onClick={closeMobileMenu}
                            >
                            Sobre Nosotros
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link
                            to='/contact-us'
                            className='nav-links'
                            onClick={closeMobileMenu}
                            >
                            Contactanos
                        </Link>
                    </li>
                    <li>
                        <Link
                            to='/sign-up'
                            className='nav-links-mobile'
                            onClick={closeMobileMenu}
                            >
                            Administracion
                        </Link>
                    </li>
                </ul>
                <Button />
            </nav>
        </> );
        }else if(cookies.get('TipoU') === "Administrador"){

        }
    }
}

export default loginS;