import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js"
import { auth } from "./firebase.js"

const signupForm = document.querySelector('#signup-form');

signupForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = signupForm['signup-email'].value;
  const password = signupForm['signup-password'].value;

  console.log(email, password);

  try{
    const userCredentials = await createUserWithEmailAndPassword(auth, email, password)
    console.log(userCredentials);

  // CERRAR MODAL
    const signupModal = document.querySelector('#signupModal');
    const modal = bootstrap.Modal.getInstance(signupModal);
    modal.hide();
  }
  catch(err){
    console.log(err.message);
    console.log(err.code);
    if(err.code === 'auth/email-already-in-use'){
      alert('Email ya registrado');
    }else if(error.code === 'auth/invalid-email'){
      alert('Email no válido');
    }else if(error.code === 'auth/weak-password'){
      alert('Contraseña débil');
    }else if(err.code){
      alert('Error');
    }
  }

});
