import React from 'react';
import ReactDOM from 'react-dom';

import Total from './Total';
import InputAmount from './InputAmount';
import InputInterest from './InputInterest';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  amount: '',
                        interest: '',
                        total: ''};
    }

    handleChangeAmount = (event) => {
        this.setState({ amount: event.currentTarget.value }, () => {
            if(this.state.interest!==""){
                this.setState({total: (this.state.amount * this.state.interest)/100})
            }
        })
       
    }

    handleChangeInterest = (event) => {
        this.setState({ interest: event.currentTarget.value },() => {
            if (this.state.amount!=="") {
                this.setState({total: (this.state.amount * this.state.interest)/100})
            }
        })
        
    }

    render() {
        return (
            <div>
                <InputAmount amountValue={this.state.amount} handleChangeAmount={this.handleChangeAmount} />
                <InputInterest interestValue={this.state.interest} handleChangeInterest={this.handleChangeInterest} />
                <Total total={this.state.total}/>
            </div>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('root'));