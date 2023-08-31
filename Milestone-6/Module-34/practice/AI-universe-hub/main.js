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
        const feature = card.features.map((item, index) => `${index + 1}. ${item} <br/>`).join('')

        div.innerHTML = `
        <div class="card w-96 bg-base-100 shadow-xl mb-8">
            <figure><img class="w-full h-[200px]" src="${card.image}" /></figure>
            <div class="card-body">
                <h2 class="card-title">Features</h2>
                ${feature}
                <hr />
                <h1 class="card-title">${card.name}</h1>
                <div class="flex">
                    <img src="Frame.svg" alt="">
                    ${card.published_in}
                    <button class="ml-auto"onclick="details_modal.showModal()"><img src="Frame1.svg" alt=""></button>
                </div>
            </div>
        </div>
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

