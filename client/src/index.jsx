import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    }


  }

  componentDidMount () {

    var setStateTwo = this.setState.bind(this);



    var settings = {
      "url": "http://localhost:1128/repos",
      "method": "GET",
      "timeout": 0,
      "headers": {
        "Content-Type": "application/json"
      },
      "data": "{'username': 'carlitoswillis'}",
      complete: function () {
        console.log('complete');
      }
    };

    $.ajax(settings).done(function (response) {
      setStateTwo({
        repos: JSON.parse(response)
      })
    });

  }

  search (term) {

    var getRequest = function (username) {

      var requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({username}),
        redirect: 'follow',
        complete: function () {
          console.log('hey')
        }

      };

      return fetch("http://localhost:1128/repos", requestOptions)
        // .then(response => response.text())
        .catch(error => console.log('error', error));
    }

    getRequest(term)
    .then(() => {
      console.log(`${term} was searched`);
    });

    // TODO
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));