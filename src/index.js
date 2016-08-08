/* eslint-disable no-console */
//console.log('hi');
// import React from 'react';
// import ReactDOM from 'react-dom';
// const App = function(){
//   return <div>Hi Mathew Welcome to React Session</div>;
// }
//
// ReactDOM.render(<App/>,document.getElementById('app'));
//export default App;

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './searchBar';

class App extends Component {
    render(){
      return(
        <div>
            <SearchBar />;
        </div>
      );
    }
}

ReactDOM.render(<App/>,document.getElementById('app'));
