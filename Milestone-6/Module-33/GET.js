const displayData = (users) => {
    console.log(users);
    const postsContainer = document.querySelector('#posts-container')
    for (const data of users) {
        const article = document.createElement('article')
        article.classList.add('post')
        article.innerHTML = `
            <h4>User-${data.userId}</h4>
            <h5>Post: ${data.title}</h5>
            <p>Post Description: ${data.body}</p>`
        postsContainer.appendChild(article)
    }
}
function loadData() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => data.filter((item) => item.id <= 10))
        .then(data => displayData(data))
}
// GET - function
document.querySelector('main').addEventListener('click', (e) => {
    if (e.target === document.querySelector('#get-btn')) loadData()
})
