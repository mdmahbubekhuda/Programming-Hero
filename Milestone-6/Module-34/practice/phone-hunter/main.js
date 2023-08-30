// load phones - API
const loadPhones = async (displayPhones, searchText, isShowAll) => {
  const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
  const data = await res.json()
  const phones = data.data
  displayPhones(phones, isShowAll)
}

// display phones
const displayPhones = (phones, isShowAll) => {
  const displayArticle = document.querySelector('#phone-container')
  // clear display
  displayArticle.innerHTML = ''

  // show all phones
  const showAllBtn = document.querySelector('#btn-show-all');

  // display only first 6 phones and show all button
  if (phones.length > 6 && !isShowAll) {
    showAllBtn.removeAttribute('hidden')
    phones = phones.slice(0, 6)
  }
  else {
    showAllBtn.setAttribute('hidden', null)
  }

  // display phones
  phones.forEach(phone => {
    const div = document.createElement('div')
    div.innerHTML = `
        <div class="card w-96 bg-base-100 shadow-xl my-8">
          <figure>
            <img
              src="${phone.image}"
              alt="${phone.phone_name}"
            />
          </figure>
          <div class="card-body">
            <h2 class="card-title">
              ${phone.phone_name}
            </h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, eaque!</p>
            <div class="card-actions justify-end">
                <button onclick="loadDetails('${phone.slug}')" class="btn btn-primary">Details</button>
            </div>
          </div>
        </div>
        `
    displayArticle.appendChild(div)
  })

  // hide loading spinner
  toggleLoadingSpinner(false)

}


// search function
const searchFn = (isShowAll) => {
  // loading
  toggleLoadingSpinner(true)
  // search - input text
  const searchField = document.querySelector('#search-input')
  const searchText = searchField.value
  // clear search input
  if (isShowAll) searchField.value = ''

  loadPhones(displayPhones, searchText, isShowAll)
}

// loading-spinner
const toggleLoadingSpinner = (isLoading) => {
  const loadingSpinner = document.querySelector('#loading-spinner');
  (isLoading)
    ? loadingSpinner.classList.remove('hidden')
    : loadingSpinner.classList.add('hidden')
}

// load details - API
const loadDetails = async (id) => {
  const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`)
  const data = await res.json()
  phoneDetails(data.data)
}

// phone details - modal
const phoneDetails = async (data) => {
  const modalContainer = document.querySelector('#modal-container')

  const phoneDetails = document.createElement('div')
  phoneDetails.innerHTML = `
  <div class="card card-compact w-full bg-base-100 shadow-xl">
  <figure><img src="${data?.image}" /></figure>
  <div class="card-body">
    <h2 class="card-title">${data?.name}</h2>
    <p>Storage: ${data?.mainFeatures?.storage}</p>
    <p>Display Size: ${data?.mainFeatures?.displaySize}</p>
    <p>Chipset: ${data?.mainFeatures?.chipSet}</p>
    <p>Memory: ${data?.mainFeatures?.memory}</p>
    <p>Slug: ${data?.slug}</p>
    <p>Release Date: ${data?.releaseDate}</p>
    <p>Brand: ${data?.brand}</p>
    
    <p>GPS: ${data?.others?.GPS ? data.others.GPS : 'Not available'}</p>   

    <div class="card-actions justify-end">
      <button class="btn btn-primary">Close</button>
    </div>
  </div>
</div>
  `
  modalContainer.appendChild(phoneDetails)
  phone_details.showModal()
}

// search event
document.querySelector('#search-container').addEventListener('click', (e) => {

  // search phones
  if (e.target === document.querySelector('#btn-search')) searchFn()

  // show all phones
  if (e.target === document.querySelector('#btn-show-all')) searchFn(true)

})

