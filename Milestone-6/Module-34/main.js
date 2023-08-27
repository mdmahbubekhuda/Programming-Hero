const loadPhone = async (searchText) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
    const data = await res.json()
    const phones = data.data
    displayPhone(phones)
}

const displayPhone = phones => {
    const phoneContainer = document.querySelector('#phone-container');
    // clear phone container before adding new cards
    phoneContainer.innerText = ''

    // display show all button if more than 12 phones
    const showAllBtn = document.querySelector('#show-all-btn');

    if (phones.length > 12) {
        showAllBtn.classList.remove('hidden')
    }
    else {
        showAllBtn.classList.add('hidden')
    }

    // display only first 12 phones
    phones = phones.slice(0, 12)

    phones.forEach(phone => {
        const phoneCard = document.createElement('div')
        phoneCard.classList = 'card mx-auto gap-4 w-4/5 p-4 mt-12 bg-gray-100 shadow-xl'
        phoneCard.innerHTML = `
        <figure>
            <img src="${phone.image}" alt="Phone" />
        </figure>
        <div class="card-body">
            <h2 class="card-title">${phone.phone_name}</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-end">
                <button class="btn btn-primary">Buy Now</button>
            </div>
        </div>
        `
        phoneContainer.appendChild(phoneCard)
    })
}

const searchBtn = () => {
    const searchField = document.querySelector('#search-field')
    const searchText = searchField.value
    loadPhone(searchText)
}
