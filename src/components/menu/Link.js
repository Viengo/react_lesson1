import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

class Link extends Component {
    render() {
        return (
            <NavLink
                to={'/lesson_' + this.props.count}
                className="nav_link"
                activeClassName="active">
                {this.props.title}
            </NavLink>
        );
    }
}
export default Link;