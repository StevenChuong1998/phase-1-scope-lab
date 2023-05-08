var customerName = 'bob';
return customerName

var bestCustomer = 'not bob';
return bestCustomer

const leastFavoriteCustomer = 'Harry'

function upperCaseCustomerName() {
    return customerName.toUpperCase() 
}

function setBestCustomer() {
    return bestCustomer;
}

function overwriteBestCustomer() {
    const bestCustomer= 'maybe bob'
    return bestCustomer
}

function changeLeastFavoriteCustomer(name) {
    return leastFavoriteCustomer = `${name}`;
    return leastFavoriteCustomer
}
