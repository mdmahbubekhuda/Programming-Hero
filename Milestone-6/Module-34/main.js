const loadPhone = async (searchText = '13', isShowAll) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
    const data = await res.json()
    const phones = data.data
    displayPhone(phones, isShowAll)
}

const displayPhone = (phones, isShowAll) => {
    const phoneContainer = document.querySelector('#phone-container')
    // clear phone container before adding new cards
    phoneContainer.innerText = ''

    // display show all button if more than 12 phones
    const showAllBtn = document.querySelector('#show-all-btn');

    // display show all button
    if (phones.length > 12 && !isShowAll) {
        showAllBtn.classList.remove('hidden')
    }
    else {
        showAllBtn.classList.add('hidden')
    }

    // display only first 12 phones - if not show all
    if (!isShowAll) phones = phones.slice(0, 12)


    phones.forEach((phone) => {
        const phoneCard = document.createElement('div')
        phoneCard.classList = 'card mx-auto gap-4 w-4/5 p-4 mt-12 bg-gray-100 shadow-xl'
        phoneCard.innerHTML = `
            <figure>
                <img src="${phone.image}" alt="Phone" />
            </figure>
            <div class="card-body">
                <h2 class="card-title">${phone.phone_name}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div class="card-actions justify-center">
                    <button onclick="showDetails('${phone.slug}')" class="btn btn-primary">Show Details</button>
                </div>
            </div>
            `

        phoneContainer.appendChild(phoneCard)
    })
    // hide loading spinner
    toggleLoadingSpinner(false)
}

const searchBtn = (isShowAll) => {
    toggleLoadingSpinner(true)
    const searchField = document.querySelector('#search-field')
    const searchText = searchField.value
    loadPhone(searchText, isShowAll)
}

const showAll = () => {
    searchBtn(true)
}

const showDetails = async (id) => {
    console.log(id);
    // load phone details
    const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`)
    const data = await res.json()
    const phone = data.data
    showPhoneDetails(phone)
    console.log(phone);
}

const showPhoneDetails = (phone) => {
    // display modal
    const phoneName = document.querySelector('#show-details-phone-name')
    phoneName.innerText = phone.name

    const showDetailContainer = document.querySelector('#show-detail-container')
    showDetailContainer.innerHTML = `
    <img src="${phone.image}" />
    <p><span>Storage:</span>${phone?.mainFeatures?.storage}</p>
    <p><span>GPS:</span>${phone?.others?.GPS || 'No GPS'}</p>
    <p><span>GPS:</span>${phone.others?.GPS ? phone.others.GPS : 'No GPS available'}</p>
    `
    show_details.showModal()

}

const toggleLoadingSpinner = (isLoading) => {
    const loadingSpinner = document.querySelector('#loading-spinner')
    if (isLoading) {
        loadingSpinner.classList.remove('hidden')
    }
    else {
        loadingSpinner.classList.add('hidden')
    }
}

loadPhone()