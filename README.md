# Deviget Frontend Challengue - Carlos Mori

### Project deployed with Heroku

deviget-frontend-challengue.herokuapp.com

### Run locally

Install the dependencies and devDependencies and start the server.

```sh
$ npm install -d
$ node run dev
```

### Run unit test

```sh
$ npm run test -d
```

# Features and relevant notes!

Features:

- Server Side Rendering with Next JS
- Layout building with Sass and React-Bootstrap
- Unit testing with Jest
- ES6
- Redux with Redux-Toolkit library
- Formatting and Lintin with eslint and prettier
- Deployed with Heroku
- Full responsive and crossbrowser support

Notes:

- I hardcoded the search param and went for coronavirus reddits, which are really trendy right now.
- Regarding the split layout I hope you dont mind but I took the liberty of implementing my own UX approach. Responsivenes and pagination are acomplished properly.
- In order to increment overall performance of the app I decided to make an initial server side post request so we start our app with an initial load of posts in our Redux store.
- I have set an enviroment variable to determine the ammount of post per fetch, it will be 18 post per API call.
- I will make subsequent API calls using the page reference provided by Reddit API.
- I have worked with Material design and another Redux tools, please check out my latest challengue for further details https://github.com/carlosmori/FlyBondiChallengue
- Added refresh feature, after a dismiss all so we can still use our app.

### Technologies used

This app uses this technologies

- [Redux Toolkit] - Official redux tool , useful to reduce boilerplate
- [Sass] - Awesome css preprocessor
- [Next Js] - Production grade React applications that scale
- [React Bootstrap] - Great UI boilerplate for modern web apps
- [date-fns] - date-fns provides the most comprehensive yet simple and consistent toolset for manipulating JavaScript dates in a browser & Node.js.
- [eslint] - A pluggable and configurable linter tool for identifying and reporting on patterns in JavaScript. Maintain your code quality with ease.
- [Heroku] - Heroku is a platform as a service (PaaS) that enables developers to build, run, and operate applications entirely in the cloud.
- [Jest] - Jest is a delightful JavaScript Testing Framework with a focus on simplicity

# Front-end Test

## Objective

We would like to have you complete the following code test so we can evaluate your Front-end skills. Please place your code in a public Github repository and commit each step of your process so we can review it.

Your assignment is to create a simple Reddit client that shows the top 50 entries from Reddit - www.reddit.com/top

## Show your work

1.  Create a Public repository
2.  Commit each step of your process so we can follow your thought process.

## What to show

To do this please follow these guidelines and use the front-end technology we talked about during your interview (Specific Javascript Framework). If you are using ReactJS, you must incorporate Redux.

The app should be able to show data from each entry such as:

    - Title (at its full length, so take this into account when sizing your cells)
    - Author
    - entry date, following a format like “x hours ago”
    - A thumbnail for those who have a picture.
    - Number of comments
    - Unread status

In addition, for those having a picture (besides the thumbnail), please allow the user to tap on the thumbnail to be sent to the full sized picture.

## What to Include

    - Pagination support
    - Saving pictures in the picture gallery
    - App state-preservation/restoration
    - Indicator of unread/read post (updated status, after post it’s selected)
    - Dismiss Post Button (remove the cell from list. Animations required)
    - Dismiss All Button (remove all posts. Animations required)
    - Support split layout (left side: all posts / right side: detail post)
    - Responsive design

## Resources

    - Reddit API - http://www.reddit.com/dev/api
    - Example JSON file (top.json) is listed.
    - Example Video of functionality is attached

## Deliverables we expect:

- URL where the game can be accessed and played (use any platform of your preference: heroku.com, aws.amazon.com, etc)
- Code in a public Github repo
- README file with the decisions taken and important notes

## Time Spent

We suggest not to spend more than 5 hours total, which can be done over the course of 2 days. Please make commits as often as possible so we can see the time you spent and please do not make one commit. We will evaluate the code and time spent.

What we want to see is how well you handle yourself given the time you spend on the problem, how you think, and how you prioritize when time is insufficient to solve everything.

Please email your solution as soon as you have completed the challenge or the time is up.

[//]: # "These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax"
[redux toolkit]: https://redux-toolkit.js.org/
[sass]: https://sass-lang.com/documentation/syntax
[next js]: https://nextjs.org/
[react bootstrap]: https://react-bootstrap.github.io/
[date-fns]: https://date-fns.org/
[eslint]: https://eslint.org/
[heroku]: https://www.heroku.com/
[jest]: https://jestjs.io/
