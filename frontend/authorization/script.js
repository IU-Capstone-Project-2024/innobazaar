function signInClicked() {
    let login_window = document.getElementById('login-window');
    login_window.style.display = 'block';

    let registration_window = document.getElementById('registration-window');
    registration_window.style.display = 'none';

    let sign_in = document.getElementById('sign-in-button-login');
    let sign_up = document.getElementById('sign-up-button-login');

    sign_in.style.borderBottom = '3px solid #FA8232';
    sign_in.style.fontWeight = 'bold';
    sign_in.style.opacity = 1;

    sign_up.style.borderBottom = '3px solid lightgray';
    sign_up.style.opacity = 0.6;
    sign_up.style.fontWeight = 'normal';
}

function signUpClicked() {
    let login_window = document.getElementById('login-window');
    login_window.style.display = 'none';

    let registration_window = document.getElementById('registration-window');
    registration_window.style.display = 'block';

    let sign_in = document.getElementById('sign-in-button-registration');
    let sign_up = document.getElementById('sign-up-button-registration');

    sign_in.style.borderBottom = '3px solid lightgray';
    sign_in.style.opacity = 0.6;
    sign_in.style.fontWeight = 'normal';

    sign_up.style.opacity = 1;
    sign_up.style.borderBottom = '3px solid #FA8232';
    sign_up.style.fontWeight = 'bold';

}