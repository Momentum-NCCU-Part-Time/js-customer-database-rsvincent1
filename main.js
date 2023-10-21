let customerContainer = document.querySelector('.container')

function customerDirectoryCard(customer) {
    let customerTitle = document.createElement('div');
    let customerCard = document.createElement('div');
    let customerName = document.createElement('h2');
    let customerEmail = document.createElement('div');
    let customerAddress = document.createElement('div');
    let customerLocation = document.createElement('div');
    let customerDOB = document.createElement('div');


    customerName.innerText = `${customer.name.title} ${customer.name.first} ${customer.name.last}`;
    customerEmail.innerText = `${customer.email}`
    customerAddress.innerText = `${customer.location.street.number} ${customer.location.street.name}`;
    customerLocation.innerText = `${customer.location.city} ${customer.location.state} ${customer.location.postcode}`;
    customerDOB.innerText = `DOB:${customer.dob.date}`



    customerContainer.appendChild(customerCard);
    customerCard.appendChild(customerName);
    customerCard.appendChild(customerEmail);
    customerCard.appendChild(customerAddress);
    customerCard.appendChild(customerLocation);
    customerCard.appendChild(customerDOB);

}
let database = customers.map((customer) => customerDirectoryCard(customer))

