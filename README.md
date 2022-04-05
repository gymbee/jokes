# Chuck Norris jokes app
## Goal
Create a web application using React.JS. The web application will be pulling jokes (facts 😉) from the Chuck Norris API. All documentation for API is available at this link https://api.chucknorris.io/

## Requirements:
1. The web app must have at least 2 routes. For example: "Jokes page" and "About page" (about yourself)
2. It should be possible to get jokes by category and also randomly
3. Received data must be stored in a redux store.
4. It should also be possible to save jokes.
5. Saved jokes should be shown in different place, in a table for example.
6. It should be possible to edit and delete saved jokes.
7. There must not be any duplicate jokes.

### Bonus:
1. Make it look nice 😊
2. Saved facts are grouped by category and sorted by received time
3. Application scales on different screen, mobile for example *- make responsive layout*
4. Code is tested (reducer tests, snapshot tests etc.)
5. Any other “wow factor” that you can think of *- add transitions*

___

## System specifications
### Functions of the system
1. Navigation between pages
1. Fetch categoriers and save on app init
1. Fetch random joke on app init (+ hold the time of receive)
1. Select category and cancel selection for search
1. Fatch manually another joke (+ hold the time of receive)
1. If joke with received ID already saved - repeat fetch
1. Save joke, its category, ID and time of receive to store and localStorage
1. Iterate saved jokes on the Jokes page below the Search. Show the joke, receive date, Edit and Delete buttons
1. On Edit, wrap the joke in input textfield, focus on the input. Show buttons Save and Cancel
1. On Save check, if the joke already exists. If so - show alert, that joke already exists.
1. On Delete show corfirm dialog
1. Restore saved items on app boot

### Data model
1. Saved jokes are stored in hash table, there key is the joke ID string (for fast check of existance in Saved items and quick sorting)
    ```javascript
    [{
        [id]: {
            value: String, // fact
            received: Number, // timestamp of reveive time
            groups: Array<string>
        }
    }]
    ```
    Literable jokes array comes from saved jokes Object.values

### API module
1. requestFact. Optional param: category
    ```javascript
    // GET https://api.chucknorris.io/jokes/random?category={category}
    {
        "categories":[],
        "created_at":"2020-01-05 13:42:23.240175",
        "icon_url":"https://assets.chucknorris.host/img/avatar/chuck-norris.png",
        "id":"RX3oS-gFS4-FkZpZQMsp6g",
        "updated_at":"2020-01-05 13:42:23.240175",
        "url":"https://api.chucknorris.io/jokes/RX3oS-gFS4-FkZpZQMsp6g",
        "value":"Blackouts are caused by Chuck Norris charging his iPhone."
        }
    ```
1. requestCategories
    ```javascript
    // GET https://api.chucknorris.io/jokes/categories
    ["animal","career","celebrity","dev","explicit","fashion","food","history","money","movie","music","political","religion","science","sport","travel"]
    ```

### Store module
#### State
1. categories
1. savedFacts

#### Actions
1. fetchCategories - API requestCategories, save to store
1. fetchFact - API requestFact, payload category, return
1. saveFact - (item) -> return Promise. Check if fact already saved with getSavedById,
    if not - mutation saveFact, return resolve
    if saved - return reject with reason
1. deleteSavedFact - (id) -> trigger a confirmation alert
    if confirm - deleteSavedFact
    if reject - do nothing
1. getAllSaved
1. getSavedById
1. getSavedByCategory


### Libraries
1. React
1. Redux 
1. react-redux
1. Router
1. Axios
1. redux-localstorage (for saved items restore on boot)
1. redux-thunk
1. react-router-dom
1. ...

### UX notes
1. On save of already saved fact user gets an alert with discard note
1. On successful save use transition height
1. On Item delete user gets a confirmation alert
1. On successful delete use transition height
 
 
 
___
 
 
 

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
