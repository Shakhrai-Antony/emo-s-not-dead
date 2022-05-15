import React, {useState} from 'react'
import s from './header.module.scss'
import {NavLink} from "react-router-dom";
import logo from './../imges/notdead.png'
import search from './../imges/search.png'
import user from './../imges/user.png'
import cart from './../imges/cart.png'
import {DropDownCollections, DropDownMerch} from "./dropDownMenu";

export const Header = () => {
    const items = [{value: 'Home', to: '/home'}, {value: 'Merch', to: '/merch'}, {
        value: 'Collections',
        to: '/collections'
    },
        {value: 'Watch', to: '/watch'}, {value: 'Playlist', to: '/playlist'}, {value: 'Cruise', to: '/cruise'},
        {value: <img src={user} alt='user'/>, to: '/login'}, {
            value: <img src={search} alt='user'/>,
            to: '/search'
        }, {value: <img src={cart} alt='user'/>, to: '/cart'}]

    const [dropDownMenuMerch, setDropDownMenuMerch] = useState(false)
    const [dropDownMenuCollections, setDropDownMenuCollections] = useState(false)

    return (
        <header>
            <nav>
                <div className={s.freeShipping}>
                    <NavLink to='/home'>
                        <p>:'( free us shipping on orders $100 or more )':</p>
                    </NavLink>
                </div>
                <div className={s.headerNavigation}>
                    <div className={s.home_img}>
                        <NavLink to='/home'> <img src={logo} alt="logo"/>
                        </NavLink>
                    </div>
                    <div className={s.nav_section}>
                        <ul className={s.nav_items}>
                            {items.map((item, index) => {
                                    if (item.value === 'Merch') {
                                        return (
                                            <li className={s.nav_items_li} key={index}
                                                onMouseEnter={() => setDropDownMenuMerch(true) }
                                                onMouseLeave={() => setDropDownMenuMerch(false)}>
                                                <NavLink className={s.nav_items_links} to={item.to}>{item.value}</NavLink>
                                                {dropDownMenuMerch && <DropDownMerch/>}
                                            </li>
                                        )
                                    }
                                    if(item.value === 'Collections') {
                                        return (
                                            <li className={s.nav_items_li} key={index}
                                                onMouseEnter={() => setDropDownMenuCollections(true) }
                                                onMouseLeave={() => setDropDownMenuCollections(false)}>
                                                <NavLink className={s.nav_items_links} to={item.to}>{item.value}</NavLink>
                                                {dropDownMenuCollections && <DropDownCollections/>}
                                            </li>
                                        )
                                    }
                                return (
                                    <li className={s.nav_items_li} key={index}>
                                        <NavLink className={s.nav_items_links} to={item.to}>{item.value}</NavLink>
                                    </li>
                                )
                                }
                            )}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}