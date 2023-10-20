let customerContainer = document.querySelector('.container')

function customerDirectoryCard(customer){
    let customerCard = document.createElement('div');
    let customerName = document.createElement('h2');
    customerName.innerText = `${customer.name.first} ${customer.name.last}`
    customerCard.appendChild(customerName)
    customerContainer.appendChild(customerCard)
}
let database = customers.map((customer) => customerDirectoryCard(customer))

