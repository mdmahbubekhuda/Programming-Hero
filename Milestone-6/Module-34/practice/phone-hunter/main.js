// fetch phones API
const loadPhonesData = async (displayPhones, searchText, isShowAll) => {
  const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
  const data = await res.json()
  const phones = data.data
  console.log(data);
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
                <button class="btn btn-primary">Details</button>
            </div>
          </div>
        </div>
        `
    displayArticle.appendChild(div)
  })
}


// search function
const searchFn = (isShowAll) => {
  // search - input text
  const searchField = document.querySelector('#search-input')
  const searchText = searchField.value
  // clear search input
  if (isShowAll) searchField.value = ''

  loadPhonesData(displayPhones, searchText, isShowAll)
}


// search event
document.querySelector('#search-container').addEventListener('click', (e) => {

  // search button
  if (e.target === document.querySelector('#btn-search')) {
    searchFn()
  }

  // show all button
  if (e.target === document.querySelector('#btn-show-all')) {
    searchFn(true)
  }

})

