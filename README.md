# AloofStar Blogging System

This is a small blogging system using modern web technology in order to demonstrate my skills in this area.

## Demo

There is a deployment of this application at heroku
Please navigate to: https://aloofstar.herokuapp.com/

## Docker support

if you are using Linux or Mac with docker installation running, simply go to the project directory and run

```bash
make
```

if you are using Windows with docker installation running. You will need to go to the project directory, run the following commands

```bash
docker build -t steven:prod .
docker run -d -p 8080:8080 steven:prod
```

Please wait a few seconds for the project to build and the server to start.
Then Open browser, navigate to http://localhost:8080

## Dev Environment

In order to avoid problems related to some of the node packages on Windows. I recommend running it on Linux/Mac.

Please also have the following software installed:
**Node**: v8.11.1
**Yarn**: v1.7.0

## Installation

1.  Please first clone this repo

```bash
git clone https://github.com/stevenzhang717/AloofStar.git
```

2.  cd into the project folder, install using yarn

```bash
yarn install
```

3.  Run the following command to start the server

```bash
# development
yarn start:dev

# production
yarn start
```

4.  open browser, navigate to http://localhost:8080

## Functionalities

This project is still under active development, currently it has the following functionalities:

* Sign Up for new user
* Sign In with credientials
* Creating new post (only for logged in user)
* View the list of posts
* Sign out

## Database

For development purposes, this project is currently using sqlite database.

**Please note that the database will be cleared out and re-sync with the schema everytime the server restart.**
