import React from 'react';
import ReactDOM from 'react-dom';

import SearchForm from './SearchForm';
import Suggestions from './Suggestions';
import authors from './authorsList';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { searchValue: '' };
    }

    /* Complete here the App component implementation */
    handleChange = (event) => {
        this.setState({searchValue: event.currentTarget.value});
      }

    handleSubmit = (event) => {
        alert(`You are searching for ${this.state.searchValue}`)
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <SearchForm searchValue={this.state.searchValue} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
                <Suggestions searchValue={this.state.searchValue} data={authors}/>
            </div>
        )
    }
}

ReactDOM.render(<App data={authors} />, document.getElementById('root'));