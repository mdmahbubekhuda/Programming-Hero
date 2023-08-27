// client>Server>DataBase
// website - www.jsonplaceholder.typicode.com/ for fetching fake data
// must be integrated to HTML or it wont work

// JavaScript Object Notation - JSON (notation - a note or annotation )

// converts value into JSON string - except for number and boolean
const user = { id: 1, name: 'rnk', job: 'developer' }
const userJSONstr = JSON.stringify(user)
// console.log(user); // {id: 1, name: 'rnk', job: 'developer'}
// console.log(userJSONstr); // {"id":1,"name":"rnk","job":"developer"}

// JSON.parse() - converts back to object from JSONstring
const userObj = JSON.parse(userJSONstr)
// console.log(userObj);

// CRUD Operations - Create, Read, Update, and Delete

/**Rest API Methods
 * GET - Receive information about an API resource
 * POST - Create an API resource
 * DELETE - Delete an API resource
 * PATCH - Update an existing API resource
 * PUT - If exist (update) or if doesn't exist (create)
 */

// GET API Method - fetch()
// fetch starts a request and returns a promise
fetch('https://jsonplaceholder.typicode.com/todos/1') // url to fetch API
    // .then - if the promise is resolved (convert data as a JSON object - return promise)
    .then(response => response.json()) // .json is not similar but close to JSON.parse
    // .then - display JSON object
    .then(json => console.log(json))


