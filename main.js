let customerContainer = document.querySelector('.container')

function customerDirectoryCard(customer) {
    let customerImage = document.createElement('img');
    let customerCard = document.createElement('div');
    let customerName = document.createElement('h2');
    let customerEmail = document.createElement('div');
    let customerAddress = document.createElement('div');
    let customerLocation = document.createElement('div');
    let customerDob = document.createElement('div');
    let customerEst = document.createElement('div');

    customerImage.src = `${customer.picture.large}`
    customerName.innerText = `${customer.name.title} ${customer.name.first} ${customer.name.last}`;
    customerEmail.innerText = `${customer.email}`
    customerAddress.innerText = `${customer.location.street.number} ${customer.location.street.name}`;
    customerLocation.innerText = `${customer.location.city} ${customer.location.state} ${customer.location.postcode}`;
    customerDob.innerText = `DOB:${customer.dob.date.slice(0, 10)}`;
    customerEst.innerHTML = `Customer since: ${customer.registered.date.slice(0, 10)}`


    customerContainer.appendChild(customerCard);
    customerCard.append(customerImage)
    customerCard.appendChild(customerName);
    customerCard.appendChild(customerEmail);
    customerCard.appendChild(customerAddress);
    customerCard.appendChild(customerLocation);
    customerCard.appendChild(customerDob);
    customerCard.appendChild(customerEst);

}
let database = customers.map((customer) => customerDirectoryCard(customer))

