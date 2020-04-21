import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';
import Repo from './components/Repo.jsx';

// var fs = require ('fs');
// var port = require('../../server/index');
// console.log(port);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: [],
      totalRepos: 0
    }
    console.log(this.state.repos);


  }

  componentDidMount () {

    var setStateTwo = this.setState.bind(this);

    var settings = {
      "url": `/repos`,
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

      // console.log(response);
      setStateTwo({
        repos: JSON.parse(response).reposAndCount[0],
        totalRepos: JSON.parse(response).reposAndCount[1]
      });
    });

  }

  search (term) {

    var postRequest = function (username) {

      var requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({username}),
        redirect: 'follow',
        complete: function () {
          console.log('hey')
        }

      };

      return fetch(`/repos`, requestOptions)
        // .then(response => response.text())
        .catch(error => console.log('error', error));
    }

    postRequest(term)
    .then((response) => {
      console.log(`${term} was searched`);

    })
    .then(() => {

      var setStateTwo = this.setState.bind(this);

      var settings = {
        "url": `/repos`,
        "method": "GET",
        "timeout": 0,
        "headers": {
          "Content-Type": "application/json"
        },
        "data": "{'username': 'carlitoswillis'}",
        complete: function () {
          // console.log('complete');
        }
      };

      $.ajax(settings).done(function (response) {
        setStateTwo({
          repos: JSON.parse(response).reposAndCount[0],
          totalRepos: JSON.parse(response).reposAndCount[1]
        })
      });
    })

    // TODO
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos} totalRepos={this.state.totalRepos}/>
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));