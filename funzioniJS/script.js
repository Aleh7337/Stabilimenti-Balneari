specialChars =/[`!@#$%^&*()_\-+=\[\]{};':"\\|,.<>\/?~ ]/;
/*import { 
    isValid, 
    isExpirationDateValid, 
    isSecurityCodeValid, 
    getCreditCardNameByNumber 
} from 'creditcard.js';*/
function emailValidation(input){
    console.log("EmailValidation")
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(input.value!=""){
        if (input.value.match(validRegex)) {
            console.log("Email valida")
            return true;
        } else {
            console.log("Email non valida")
            alert("Inserire una mail valida")
            return false;
        }
    }
}
function CambiaTrasparenza() {
    if (window.location == "./index.php") {//TODO cambiare con 
        window.location.href = "blank.php";//     trasparenza
    } else {
        window.location.href = "index.php";
    }
}

/*function CCValidate(CCNum, ExpDate, CVC, HolderName){
    isValid('4916108926268679'); // returns true
    isExpirationDateValid('02', '2027'); // returns true
    isSecurityCodeValid('4556603578296676', '250'); // returns true
    getCreditCardNameByNumber('4539578763621486'); // returns 'Visa'
    if(specialChars.test(HolderName)){
        alert("inserire un nome valido");
    }
}
*/