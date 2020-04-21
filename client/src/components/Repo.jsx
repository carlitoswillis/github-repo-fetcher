import React from 'react';

const Repo = (props) => (
  <li>
    <div><h4><a href={props.repo.url}>{props.repo.repo_name}</a></h4>
    <h5>by {props.repo.owner}</h5>
    </div>
    <p>{props.repo.description || 'No Description Available'}</p>
  </li>
)

export default Repo;