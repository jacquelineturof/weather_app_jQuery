// Make sure form is present
const form = document.querySelector('.form');
const toggle = document.querySelector('.form__toggle');
const submit = document.querySelector('.form__submit');


if (form) {
    // when user chooses custom option
    // remove default select from DOM
    // append number input

    // this will be a toggle
    toggle.addEventListener('click', (e) => {
        let select = document.querySelector('.form__options');

        // check if default select is already present
        if (select) {
            form.removeChild(select);
            
            formGroup = document.createElement('div');
            formGroup.classList.add('form__group', 'form__group--custom');

            newInput = document.createElement('input');
            newInput.type = 'number';
            newInput.classList.add('form__input');

            formGroup.appendChild(newInput);
            // form.appendChild(formGroup);
            form.insertBefore(formGroup, form.childNodes[8]);
        } else {
            const newInput = document.querySelector('.form__group--custom');
            form.removeChild(newInput);
            
            select = document.createElement('select');
            select.innerHTML = '<option value = "hourly">Hourly</option><option value = "one-day">1 Day</option><option value = "five-day">5 Day</option><option value = "five-day">10 Day</option>';
            select.classList.add('form__options');
            // form.appendChild(select);
            form.insertBefore(select, form.childNodes[8]);
        }
    });

    // handle data when form is submitted
    submit.addEventListener('click', (e) => {
        const zip = document.querySelector('#zip');
        console.log(zip.value);
    });
}

const getWeatherData = async (zipCode) => {
    let url = 'https://maps.googleapis.com/maps/api/geocode/json?address=11214&key=AIzaSyDEBIp7faF_FI5Oil7_LpERCPTxuFgZfZA';
    // $.get()
};