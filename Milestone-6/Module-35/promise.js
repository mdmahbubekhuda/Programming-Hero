/**Promise - eventual completion (or failure) of an asynchronous operation and its resulting value
 * 3 states:
 * 1. Pending
 * 2. Resolve
 * 3. Reject
 */

const getData = new Promise((resolve, reject) => {
    const num = Math.random() * 10
    console.log(num)

    if (num < 5) {
        resolve(566665)
    }
    else {
        reject('no data available')
    }
})

// console.log(getData) // returns - Promise {566665}
getData
    // resolve - .then
    .then((data) => console.log(data)) // returns the value
    // reject - .catch
    .catch(err => console.error('ERR:', err))

/**Fetch - syntax
 * function getFetch(url) {
    * fetch(url)
        * .then(res => res.json())
        * .then(data => console.log(data))
        * .catch(err => console.log(err.message))
 * }
 */

/**Async/Await - syntax
 * async function getFetch(url) {
    * try {
        *const res = await fetch(url) 
        *const data = await res.json()
        *console.log(data)
    * }
    * catch(err) {
    * console.log(err)
    * }
 * }
 */