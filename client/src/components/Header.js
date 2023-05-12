import React from 'react';
import { Link } from 'react-router-dom';
import {useState} from 'react';

function Header () {
    const [click,setClick] = useState(false);
    function toggleMenu(){
        setClick(click => !click)
    }

    return(
        <nav>
            <div className='logo'>
                <span className='nav_logo'></span><h1 className='h1'>COZ Shopping</h1>
            </div>
            <div className='menu'>
                <div className='menu_icon' onClick={toggleMenu}></div>
                <ul 
                className={click ? 'menu_list hide' : 'menu_list'}
                >
                    <li>오하은님, 안녕하세요!</li>
                    <li>상품리스트 페이지</li>
                    <li>북마크 페이지</li>
                </ul>
            </div>
        </nav>
        
    )
}

export default Header;