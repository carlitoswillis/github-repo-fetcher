import React from 'react';
import Repo from './Repo.jsx';

const RepoList = (props) => (
  <div>
    <h4> Repo List Component </h4>
    There are {props.totalRepos} repos.
    <ul>

      {props.repos.map((repo) =>
        <Repo repo={repo}/>
      )}

    </ul>
  </div>
)

export default RepoList;