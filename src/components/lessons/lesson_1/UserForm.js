import React, {Component} from 'react';

class UserForm extends Component {
    constructor(...args){
        super(...args);

        this.state={
            username:''
        }
    }
    render() {
        return (
            <div className="user_form">
                <input value={this.state.username} onChange={this.handleUserChange}/>
            </div>
        );
    }

    handleUserChange = ev => this.setState({username: ev.target.value});
}

export default UserForm;