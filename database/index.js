const mongoose = require('mongoose');


let uri = process.env.MONGODB_URI|| 'mongodb://localhost/fetcher' ;




mongoose.connect(uri, {
  useMongoClient: true,
  /* other options */
});


let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  repo_name: String,
  id: Number,
  owner: String,
  popularity: Number,
  onwerInfo: String,
  url: String,
  description: String
});


let Repo = mongoose.model('Repo', repoSchema);
Repo.collection.createIndex( { "id": 1 }, { unique: true } )

let save = (repoData) => {

  var entry = new Repo({

    id: repoData.id,
    repo_name: repoData.name,
    owner: repoData.owner.login,
    onwerInfo: JSON.stringify(repoData.owner),
    url: repoData.html_url,
    description: repoData.description,
    popularity: repoData.stargazers_count + repoData.watchers_count + repoData.forks_count
  });


  entry.save((err) => {

    // TODO: Your code here
    // This function should save a repo or repos to
    // the MongoDB
    if (err) {
      console.log('error!');
      return;
    } else {
      console.log('entry inserted!')
    }

  });

}

module.exports.save = save;

module.exports.Repo = Repo;