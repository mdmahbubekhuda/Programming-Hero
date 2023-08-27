// function - to fetch API and display user name
function loadUsers() {
    fetch('https://jsonplaceholder.typicode.com/users') // can use variable to pass url
        .then(res => res.json())
        .then(data => displayUsers(data))
}
function displayUsers(data) {
    const ul = document.querySelector('.userContainer')
    for (const user of data) {
        const li = document.createElement('li')
        li.innerText = user.name
        ul.appendChild(li)
    }
}

