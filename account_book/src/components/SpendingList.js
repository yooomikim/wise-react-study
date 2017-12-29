import React, {Component} from 'react';
import SpendingItem from './SpendingItem';

class SpendingList extends Component {
    render() {
        return (
            <div>
                <SpendingItem text="밥" price="20000"/>
                <SpendingItem text="과자" price="1400"/>
                <SpendingItem text="차비" price="2000"/>
            </div>
        );
    }
}


export default SpendingList;
