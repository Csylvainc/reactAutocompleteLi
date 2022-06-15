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
}

ReactDOM.render(<App data={authors} />, document.getElementById('root'));