# AloofStar Blogging System

This is a small blogging system using modern web technology in order to demonstrate my skills in this area.

## Environment
In order to avoid problems related to some of the node packages on Windows. I recommend running it on Linux/Mac. 

Please also have the following software installed:
**Node**: v8.11.1
**Yarn**: v1.7.0

## Installation

1. Please first clone this repo
```bash
git clone https://github.com/stevenzhang717/AloofStar.git
```
2. cd into the project folder, install using yarn
```bash
yarn install
```
3. Run the following command to start the server
```bash
# development
yarn start

# production
yarn start:prod
```
4. open browser, navigate to http://localhost:8080


## Functionalities

This project is still under active development, currently it has the following functionalities:

 - Sign Up for new user
 - Sign In with credientials
 - Creating new post (only for logged in user)
 - View the list of posts
 - Sign out
