import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

class SidebarLink extends Component {
    render() {
        return (
            <NavLink
                to={'/lesson_' + this.props.linkIndex}
                className="sidebar_link"
                activeClassName="active">
                {this.props.title}
            </NavLink>
        );
    }
}

export default SidebarLink;