import React from 'react';

export default (OriginalComponent) => class DecoratedComponent extends React.Component {
    constructor(...args) {
        super(...args);

        this.state = {
            itemOpenId: null
        }
    }

    toggleItemOpen = (itemOpenId) => this.setState((prevState) => {
            if(prevState.itemOpenId === itemOpenId){
                return {itemOpenId: null};
            }else {
                return {itemOpenId: itemOpenId};
            }
        }
    );

    render() {
        return <OriginalComponent {...this.props} {...this.state} toggleItemOpen={this.toggleItemOpen}/>;
    }
}