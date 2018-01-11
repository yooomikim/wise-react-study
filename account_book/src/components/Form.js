import React, {Component} from 'react';

class Form extends Component {
    render() {
        return (
            <div>
                <input type="text" placeholder="내역"/>
                <input type="number" placeholder="금액"/>
                <button>입력</button>
            </div>
        );
    }
}


export default Form;
