import React, {Component} from 'react';

class AccountTemplate extends Component {
    render() {
        const { form, children } = this.props;
        return (
            <div>
                <div className="title">
                    내가 쓴 돈
                </div>
                <div className="form">
                    {form}
                </div>
                <div className="list">
                    {children}
                </div>
            </div>
        );
    }
}

export default AccountTemplate;
