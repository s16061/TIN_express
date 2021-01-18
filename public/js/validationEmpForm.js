
function validateForm() {

        const productNameInput = document.getElementById('productName');
        const descriptionInput = document.getElementById('description');
        const priceInput = document.getElementById('price');
        

        
        const errorProductName = document.getElementById('errorProductName');
        const errorDescription = document.getElementById('errorDescription');
        const errorPrice = document.getElementById('errorPrice');
        const errorsSummary = document.getElementById('errorsSummary');

        resetErrors([productNameInput, descriptionInput, priceInput], [errorProductName, errorDescription, errorPrice], errorsSummary);





        let valid = true;

        if (!checkRequired(productNameInput.value)) {
            valid = false;
            productNameInput.classList.add("error-input");
            productNameInput.innerText = "Pole jest wymagane";
        } else if (!checkTextLengthRange(productNameInput.value, 2, 60)) {
            valid = false;
            productNameInput.classList.add("error-input");
            productNameInput.innerText = "Pole powinno zawierać od 2 do 60 znaków";
        }

        if (!checkRequired(priceInput.value)) {
            valid = false;
            priceInput.classList.add("error-input");
            priceInput.innerText = "Pole jest wymagane";
        }

        if (!valid) {
            errorsSummary.innerText = "Formularz zawiera błędy";
        }

        return valid;



    
}

