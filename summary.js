var tableLenght = 12; 
var tourDestinations = ['Coxsbazar', 'Nepal', 'Vutan', 'Paris'];

tourDestinations.indexOf('Vutan');

var fourthDestinations = tourDestinations[3];
tourDestinations[1] = 'Srilanka';

tourDestinations.push('London');
tourDestinations.pop();

if (tourDestinations[1] == 'Nepal') {
    console.log('Pahare ahare ahare');
}
else if (tourDestinations [1] == 'china'){
    console.log('chaina tor kache jamuna');
}
else if (tourDestinations.length == 4){
    console.log('aro taka ase aro besi ghurmu');
}
else {
    console.logO('kothao jamuna basai thakmu ar mosa marmu')
}

var eggPrice = 32;
var myBudget = 32;
if (eggPrice <= myBudget){
    console.log('ami dim khamu');
}
if (eggPrice >= myBudget){
    console.log('lebu dia vat khamu');
}