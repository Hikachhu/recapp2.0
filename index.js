/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var Version="1.7"
if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/recapp2.0/sw.js')
    .then(() => { console.log('Service Worker Registered'); });
}

let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
  // Prevent Chrome 67 and earlier from automatically showing the prompt
  e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
  // Update UI to notify the user they can add to home screen
  alert("PASSAGE");
  document.getElementById("add-button").addEventListener('click', () => {
    // Show the prompt
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the A2HS prompt');
      } else {
        console.log('User dismissed the A2HS prompt');
      }
      deferredPrompt = null;
    });
  });
});

function askForNPerm() {
  Notification.requestPermission(function(result) {
    console.log("User choice", result);
    if (result !== "granted") {
      console.log("No notification permission granted!");
    } else {
document.getElementById("enableNotifications").addEventListener("click", () => {
            var notification = new Notification('He, la radio viens de se lancer', {body: 'Voir la radio'});
            notification.onclick = function () {
                                  window.open("https://hikachhu.github.io/recapp2.0/radio.html");
                                  }; 

        });
    }
  });
}
askForNPerm();

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAR4W04-0gCdH5p4oEA2sqQ0Tei8-i3Fl0",
  authDomain: "recapp2-0.firebaseapp.com",
  projectId: "recapp2-0",
  storageBucket: "recapp2-0.appspot.com",
  messagingSenderId: "376536407294",
  appId: "1:376536407294:web:5f8f362418df9654f099af",
  measurementId: "G-PMWK771HHM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
