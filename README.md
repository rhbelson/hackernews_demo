Hackernews Built in React and Apollo (Demo from howtographql.com)

Other dependencies:

```
yarn add apollo-boost react-apollo graphql
```
More on dependencies above:
apollo-boost offers some convenience by bundling several packages you need when working with Apollo Client:

apollo-client: Where all the magic happens
apollo-cache-inmemory: Our recommended cache
apollo-link-http: An Apollo Link for remote data fetching
apollo-link-error: An Apollo Link for error handling
apollo-link-state: An Apollo Link for local state management
graphql-tag: Exports the gql function for your queries & mutations
react-apollo contains the bindings to use Apollo Client with React.
graphql contains Facebook’s reference implementation of GraphQL - Apollo Client uses some of its functionality as well.

There is one thing left to do before you can start your server and begin sending queries and mutations to it. The Prisma database service needs to be deployed so the server can access it.

```
yarn install
yarn prisma deploy
```

Note: If the browser on http://localhost:4000 only says error and is empty otherwise, you probably forgot to have your server running. Note that for the app to work the server needs to run as well - so you have two running processes in your terminal: One for the server and one for the React app. To start the server, navigate into the server directory and run yarn start.

```
yarn add react-router react-router-dom
```








This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
