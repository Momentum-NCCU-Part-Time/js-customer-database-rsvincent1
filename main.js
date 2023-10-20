
function customerDirectoryCard(customer){
    return `<div class="firstName"> ${customer.name.first} <div>`
}
let database = customers.map((customer) => customerDirectoryCard(customer))
document.querySelector('.container').innerHTML = database;
