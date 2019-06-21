import React, {Component} from 'react';
import Link from './Link';
import './Menu.scss';
import {LessonsNav} from "../../fixtures";

class Menu extends Component {
    // constructor(...args){
    //     super(...args);
    //
    //     this.state = {
    //         activeLink: null
    //     }
    // }

    render() {
        return (
            <div className="menu">
                <div className="menu_title">Menu</div>
                <ul className="nav">
                    {this.menuList}
                </ul>
            </div>
        );
    }

    get menuList() {
        return LessonsNav.map((link,index) => {
                return (
                    <li key={link.id} className="nav_item">
                        <Link count={index + 1} title={link.title}/>
                    </li>
                )
            }
        )
    }
}

export default Menu;