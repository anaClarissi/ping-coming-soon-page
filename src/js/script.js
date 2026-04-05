const notifyBtn = document.querySelector('#notify_btn');

const inputEmail = document.querySelector('#email');

const errorMensage = document.querySelector('.error-msg');


const validateEmail = (email) => {

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return regex.test(email);

};

const showErrorState = () => {

    inputEmail.classList.add('error__state')

    errorMensage.classList.add('error__state');

}

const removeErrorState = () => {

    inputEmail.classList.remove('error__state');

    errorMensage.classList.remove('error__state');

};

notifyBtn.addEventListener("click", () => {

    const email = inputEmail.value;

    if (email === "") {

        showErrorState();

    } else if (validateEmail(email) === false) {

        showErrorState();

    } else {

        removeErrorState();

    }

});
