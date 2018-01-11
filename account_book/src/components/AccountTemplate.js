import React, {Component} from 'react';

class AccountTemplate extends Component {
    render() {
        const { form, children } = this.props;
        return (
            <div>
                <div className="title">
                    여행 경비 계산기
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
