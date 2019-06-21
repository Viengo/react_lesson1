import React, {Component} from 'react';
import SidebarLink from "./SidebarLink";
import {LessonsNav} from '../../../fixtures';

class Sidebar extends Component {
    render() {
        return (
            <ul className="sidebar">
                {this.links}
            </ul>
        );
    }

    get links() {
        return LessonsNav.map((lesson) => {
                return Object.entries(lesson.parts).map((link) => (
                        <li className="sidebar_item" key={link[0]}>
                            <SidebarLink title={link[1]} linkIndex={link[0]}/>
                        </li>
                    )
                )
            }
        )
    }
}

export default Sidebar;