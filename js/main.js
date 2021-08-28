var USD_TO_UZS = 10641;
var name = prompt('Ism');
var surname = prompt('Familiya');
var age = prompt('Yosh');
var passportId = prompt('Passport raqami');
var moneyInUSD = prompt('Dollordagi summa');
var moneyInUZS = moneyInUSD * USD_TO_UZS;

console.log('Ism-familiya: ' + name + ' ' + surname + '\nYosh: ' + age + '\nPassport raqami: ' + passportId + '\nDollardagi summa: ' + moneyInUSD + ' ' + 'So\'mdagi summa: '  + moneyInUZS);

let USD_TO_UZS = 10641;

let elIntroForm = document.querySelector('.js-intro-form');
let elDollarRateText = elIntroForm.querySelector('.dollar-rate-text');

let elFormInputName = elIntroForm.querySelector('.js-form-input-name');
let elFormInputSurname = elIntroForm.querySelector('.js-form-input-surname');
let elFormInputAge = elIntroForm.querySelector('.js-form-input-age');
let elFormInputPassport = elIntroForm.querySelector('.js-form-input-passport');
let elFormInputDollars = elIntroForm.querySelector('.js-form-input-dollar');

// console.log(IntroForm);

let elResult = document.querySelector('.results');
let elNameText = elResult.querySelector('.name-text');
let elSurnameText = elResult.querySelector('.surname-text');
let elAgeText = elResult.querySelector('.age-text');
let elPassportText = elResult.querySelector('.passport-text');
let elDollarText = elResult.querySelector('.dollar-text');
let elSumText = elResult.querySelector('.sum-text');


elIntroForm.addEventListener('submit', function (evt) {
  evt.preventDefault();

  elNameText.textContent = elFormInputName.value;
  elSurnameText.textContent = elFormInputSurname.value;
  elAgeText.textContent = elFormInputAge.value;
  elPassportText.textContent = elFormInputPassport.value;
  elDollarText.textContent = elFormInputDollars.value;

  let amountInUZS = elFormInputDollars.value * USD_TO_UZS;
  elSumText.textContent = amountInUZS;


  elFormInputName.value = ' '
  elFormInputSurname.value = ' '
  elFormInputAge.value = ' '
  elFormInputPassport.value = ' '
  elFormInputDollar.value = ' '

});




elDollarRateText.textContent = USD_TO_UZS;
