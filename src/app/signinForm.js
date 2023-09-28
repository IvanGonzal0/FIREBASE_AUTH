import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
import { showMessage } from "./showMessage.js";
import { auth } from "./firebase.js";

const signInForm = document.querySelector('#login-form');

signInForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    // OBTENER VALORES DE LOS INPUTS
    const email = signInForm['login-email'].value;
    const password = signInForm['login-password'].value;

    try{
        const credentials = await signInWithEmailAndPassword(auth, email, password)
        console.log(credentials);
        const modal = bootstrap.Modal.getInstance(document.querySelector('#signinModal'));
        modal.hide();

        showMessage('Bienvenido ' + credentials.user.email, 'success')
    }catch(err){
        // ERROR EMAIL INVALIDO
        if(err.code === 'auth/invalid-login-credentials'){
            showMessage('Email o Password Invalido', 'error')
        // ERROR PASSWORD INVALIDO
        }else if(err.code === 'auth/wrong-password'){
            showMessage('Password Invalido', 'error')
        }else{
            showMessage(err.message, 'error')
        }
    }
});