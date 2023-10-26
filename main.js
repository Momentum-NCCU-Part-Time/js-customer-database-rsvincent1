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

    customerImage.src = customer.picture.large
    customerName.innerText = customer.name.first.charAt(0).toUpperCase() + customer.name.first.slice(1) + " " + customer.name.last.charAt(0).toUpperCase() + customer.name.last.slice(1);
    customerEmail.innerText = customer.email
    customerAddress.innerText = customer.location.street.number + " " + customer.location.street.name;
    customerLocation.innerText = customer.location.city + "," + " " + nameToAbbr(customer.location.state) + " " + customer.location.postcode;
    customerDob.innerText = "DOB:" + " " + moment(customer.dob.date).format("MMM D, YYYY");
    customerEst.innerText = "Customer since:" + " " + moment(customer.registered.date).format("MMM D, YYYY")


    customerContainer.appendChild(customerCard);
    customerCard.appendChild(customerImage)
    customerCard.appendChild(customerName);
    customerCard.appendChild(customerEmail);
    customerCard.appendChild(customerAddress);
    customerCard.appendChild(customerLocation);
    customerCard.appendChild(customerDob);
    customerCard.appendChild(customerEst);

    customerImage.classList.add('image')
    customerName.classList.add('name')
    customerEmail.classList.add('email')
    customerAddress.classList.add('address')
    customerLocation.classList.add('location')
    customerDob.classList.add('dob')
    customerEst.classList.add('est')

}
let database = customers.map((customer) => customerDirectoryCard(customer))

