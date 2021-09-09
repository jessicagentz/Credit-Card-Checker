// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];


// Add your functions below:

//function validateCred inputs credit card number as an array and outputs true if valid number and false if invalid
const validateCred = (array) => {
    const toDouble = [];
    const doNotDouble = [];
    const copy = array.slice(0, array.length);
    const reverse = copy.reverse();
    for (i = 0; i < reverse.length; i++) {
        if (i % 2 !== 0) {
            toDouble.push(reverse[i])
        } else if (i % 2 === 0) {
            doNotDouble.push(reverse[i]);
        }
    } 
    const doubled = toDouble.map(element =>
        element * 2
    );
    const subtracted = doubled.map(element => {
        if (element > 9) {
            return element -9
        } else {
            return element;
        }
    }
    );
    const newArray = doNotDouble.concat(subtracted);
    const reducer = (previousValue, currentValue) => previousValue + currentValue;
    const sum = newArray.reduce(reducer);
    if (sum % 10 === 0) {
        return true
    } else if (sum % 10 !== 0) {
        return false;
    }
}

// findInvalidCards takes in an array of credit card numbers and iterates through the nested arrays of card numbers and returns new nested array of invalid card numbers
test = [valid1, valid2, invalid1, invalid2, invalid3];
const findInvalidCards = nestedArray => {
    const invalidNumbers = [];
    for (let i = 0; i < nestedArray.length; i++) {
        if (validateCred(nestedArray[i]) === false) {
            invalidNumbers.push(nestedArray[i]);
        }
    }
    return invalidNumbers;
};

//tests findInvalidCards function
//console.log(findInvalidCards(test));

//function idInvalidCardCompanies takes in a nested array of invalid card companies and returns credit card companies which have issued an invalid card
const idInvalidCardCompanies = nestedInvalidCardsArray => {
    const companiesIssuedInvalidCards = [];
    for (let i = 0; i < nestedInvalidCardsArray.length; i++) {
        if (nestedInvalidCardsArray[i][0] === 3) {
            companiesIssuedInvalidCards.push('Amex (American Express');
        } 
        if (nestedInvalidCardsArray[i][0] === 4) {
            companiesIssuedInvalidCards.push('Visa');
        }
        if (nestedInvalidCardsArray[i][0] === 5) {
            companiesIssuedInvalidCards.push('Mastercard');
        }
        if (nestedInvalidCardsArray[i][0] === 6) {
            companiesIssuedInvalidCards.push('Discover');
        }
        if (nestedInvalidCardsArray[i][0] !== 3 && nestedInvalidCardsArray[i][0] !== 4 && nestedInvalidCardsArray[i][0] !== 5 && nestedInvalidCardsArray[i][0] !== 6) {
            companiesIssuedInvalidCards.push('Company not found');
        }
    }
    const companies = [];
    //removes duplicates and pushes to companies
    companiesIssuedInvalidCards.forEach(element => {
        if (!companies.includes(element)) {
            companies.push(element);
        }
    })
    return companies;
}

//tests idInvalidCardCompanies
//const testInvalid = [[1,2,3,4,5], [2,3,4,5,6], [3,4,5,6,7], [3,5,6,7,8], [6,5,6,7]];
//console.log(idInvalidCardCompanies(testInvalid));


