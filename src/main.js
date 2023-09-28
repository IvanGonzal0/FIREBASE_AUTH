import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js"
import { auth } from "./app/firebase.js";
import { loginCheck } from './app/loginCheck.js'

import './app/logout.js'
import './app/firebase.js'
import './app/signupForm.js'

console.log('Hello from main.js');

onAuthStateChanged(auth, async (user) => {
    loginCheck(user);
    // if(user) {
    //     loginCheck(user);
    // } else {
    //     loginCheck(user);
    // }
});