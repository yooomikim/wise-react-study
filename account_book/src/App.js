import React, {Component} from 'react';
import AccountTemplate from './components/AccountTemplate';
import SpendingList from './components/SpendingList';
import Form from './components/Form';

class App extends Component {
    render() {
        return (
            <AccountTemplate form={<Form/>}>
                <SpendingList/>
            </AccountTemplate>
        );
    }
}


export default App;
