// Write your solution in this file!

var customerName = "bob";

function upperCaseCustomerName(){
    customerName= customerName.toUpperCase();
    return customerName;
}

function setBestCustomer(){
    bestCustomer = 'not bob';
    return bestCustomer;
}

function overwriteBestCustomer(){
    bestCustomer = "maybe bob";
}


const leastFavoriteCustomer = "some intial value";

function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = "maybe bob";
}