import React, {Component} from 'react';

class SpendingItem extends Component {

    render() {
        const { text, price } = this.props;
        return (

            <div>{text}: {price}</div>
        );
    }
}

export default SpendingItem;
