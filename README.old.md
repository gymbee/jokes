# Front-end test task
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
4. ~~Code is tested (reducer tests, snapshot tests etc.)~~
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

#### Getters
1. getAllSaved
1. getSavedById
1. getSavedByCategory

#### Mutations
1. saveFact - unshift
1. deleteSavedFact - delete key

### Libraries
1. React
1. Redux 
1. Router
1. Axios
1. redux-localstorage (for saved items restore on boot)

### UX notes
1. On save of already saved fact user gets an alert with discard note
1. On successful save use transition height
1. On Item delete user gets a confirmation alert
1. On successful delete use transition height