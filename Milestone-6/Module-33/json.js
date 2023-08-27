// JavaScript Object Notation - JSON (notation - a note or annotation )

// converts value into JSON string - except for number and boolean
const user = { id: 1, name: 'rnk', job: 'developer' }
const userJSONstr = JSON.stringify(user)
// console.log(user); // {id: 1, name: 'rnk', job: 'developer'}
// console.log(stringified); // {"id":1,"name":"rnk","job":"developer"}

// JSON.parse() - converts back to object from JSONstring
const userObj = JSON.parse(userJSONstr)
// console.log(userObj);

// another example
const shop = {
    owner: 'Rnk',
    address: {
        street: 'bashundhara',
        city: 'dhaka',
        country: 'bangladesh',
    },
    products: ['laptop', 'mic', 'monitor', 'keyboard'],
    revenue: 50000,
    isOpen: true,
    isNew: false,
}
const shopJSON = JSON.stringify(shop) // converts into JSON string
console.log(typeof shopJSON);
// console.log(shop);
// console.log(shopJSON);
const shopObj = JSON.parse(shopJSON) // converts back to object
// console.log(shopObj);
