# fullstack-review
This app allow users to input a GitHub username and check their repositories' popularity against other GitHub users in the database.

This app was created using React to interact with a RESTful API powered by Node.js using an Express server and a MongoDB database.

## Preview

A deployed version of the project can be found [here](https://carlitoswillis.com/).

## Goals

* Build a full-stack app from scratch
* Fetch data from GitHub API
* Store data in a MongoDB database
* Display the data on the app's main page

### Prerequisites

What things you need to install the software and how to install them

```
node 12.16.1
MongoDB 4.2
```

### Installing

```
npm install
```

To install MongoDB, please follow these [instructions](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/)

### Start Server

```
npm start
```

### Start Webpack

```
npm run react-dev
```

## Built With

* [node.js](https://nodejs.org/en/)
* [React](https://reactjs.org/)
* [MongoDB](https://www.mongodb.com/)


## Deployment

This app uses the GitHub API. Please create a `config.js` and export your Github token as follow

```
module.exports = {
  TOKEN: "your_github_token"
}
```
This app was deployed using [Heroku](https://dashboard.heroku.com/).
