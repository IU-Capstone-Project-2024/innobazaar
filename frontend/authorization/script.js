function signInClicked() {
    let sign_in = document.getElementById('sign-in-button');
    let sign_up = document.getElementById('sign-up-button');

    sign_in.style.borderBottom = '3px solid #FA8232';
    sign_in.style.fontWeight = 'bold';
    sign_in.style.opacity = 1;

    sign_up.style.borderBottom = '3px solid lightgray';
    sign_up.style.opacity = 0.6;
    sign_up.style.fontWeight = 'normal';
}

function signUpClicked() {
    let sign_in = document.getElementById('sign-in-button');
    let sign_up = document.getElementById('sign-up-button');

    sign_in.style.borderBottom = '3px solid lightgray';
    sign_in.style.opacity = 0.6;
    sign_in.style.fontWeight = 'normal';

    sign_up.style.opacity = 1;
    sign_up.style.borderBottom = '3px solid #FA8232';
    sign_up.style.fontWeight = 'bold';
}