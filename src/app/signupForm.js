import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
import { auth } from "./firebase.js";
import { showMessage } from "./showMessage.js";

const signupForm = document.querySelector("#signup-form");

signupForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = signupForm["signup-email"].value;
  const password = signupForm["signup-password"].value;

  console.log(email, password);

  try {
    // REGISTRAR USUARIO
    const userCredentials = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(userCredentials);
    // CERRAR MODAL
    const signupModal = document.querySelector("#signupModal");
    const modal = bootstrap.Modal.getInstance(signupModal);
    modal.hide();

    // MOSTRAR MENSAJE
    showMessage("Bienvenido " + userCredentials.user.email)

  } catch (err) {
    // CAPTURAR ERRORES
    // EMAIL REGISTRADO
    if (err.code === "auth/email-already-in-use") {
      showMessage("Email ya registrado", "error");
      // EMAIL NO VALIDO
    } else if (error.code === "auth/invalid-email") {
      showMessage("Email no válido", "error");
      // CONTRASEÑA DEBIL
    } else if (error.code === "auth/weak-password") {
      showMessage("Contraseña débil", "error");
      // ERROR GENERAL
    } else if (err.code) {
      showMessage("Error", "error");
    }
  }
});
