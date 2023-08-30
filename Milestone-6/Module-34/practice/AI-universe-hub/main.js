// load data
const loadData = async (btnId) => {
    const response = await fetch('https://openapi.programming-hero.com/api/ai/tools')
    const data = await response.json()
    const aiData = await data.data.tools
    displayData(aiData, btnId)
}

const displayData = (data, btnId) => {
    const displayContainer = document.querySelector('#card-container')
    // clear container
    displayContainer.innerHTML = ''

    // show all
    if (btnId !== 'show') {
        data = data.slice(0, 6)
    }
    // sort by date
    if (btnId === 'sort') {
        data.sort((b, a) => new Date(a.published_in) - new Date(b.published_in))
    }

    data.forEach(card => {
        const div = document.createElement('div')
        div.innerHTML = `
        ${card.name}
        ${card.published_in}
        `
        displayContainer.appendChild(div)
    })

}


// sort by date - button
document.querySelector('#btn-sort').addEventListener('click', () => {
    loadData('sort')
})

// show all - cards
document.querySelector('#btn-show-all').addEventListener('click', () => {
    loadData('show')
})

loadData()

