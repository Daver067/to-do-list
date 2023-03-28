import "./style.css";
import { renderPage } from "./renderPage";
import { allListeners } from "./eventListeners.js";
import {
  anonymousSigninSetup,
  checkForActiveProject,
  General,
} from "./projectsTodos";
// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import {
  getAuth,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  signInAnonymously,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  addDoc,
  query,
  orderBy,
  limit,
  onSnapshot,
  setDoc,
  updateDoc,
  doc,
  serverTimestamp,
} from "firebase/firestore";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
import { getPerformance } from "firebase/performance";

import { getFirebaseConfig } from "./firebase-config.js";
// Signs-in Friendly Chat.
async function signIn() {
  // Sign in Firebase using popup auth and Google as the identity provider.
  var provider = new GoogleAuthProvider();
  await signInWithPopup(getAuth(), provider);
}

// Signs-out of Friendly Chat.
function signOutUser() {
  // Sign out of Firebase.
  signOut(getAuth());
}

// Initialize firebase auth
function initFirebaseAuth() {
  // Listen to auth state changes.
  onAuthStateChanged(getAuth(), authStateObserver);
}
function authStateObserver(user) {
  if (user) {
    // User is signed in!
    // Get the signed-in user's profile pic and name.
    var profilePicUrl = getProfilePicUrl();
    var userName = getUserName();

    console.log(profilePicUrl);
    console.log(userName);
    // Set the user's profile pic and name.
    //userPicElement.style.backgroundImage =
    //  "url(" + addSizeToGoogleProfilePic(profilePicUrl) + ")";
    //userNameElement.textContent = userName;

    // Show user's profile and sign-out button.
    //userNameElement.removeAttribute("hidden");
    //userPicElement.removeAttribute("hidden");
    //signOutButtonElement.removeAttribute("hidden");

    // Hide sign-in button.
    //signInButtonElement.setAttribute("hidden", "true");

    // We save the Firebase Messaging Device token and enable notifications.
    //saveMessagingDeviceToken();
  } else {
    console.log("signed out");
    // User is signed out!
    // Hide user's profile and sign-out button.
    //userNameElement.setAttribute("hidden", "true");
    //userPicElement.setAttribute("hidden", "true");
    //signOutButtonElement.setAttribute("hidden", "true");
    // Show sign-in button.
    // signInButtonElement.removeAttribute("hidden");
  }
}

// Returns the signed-in user's profile Pic URL.
function getProfilePicUrl() {
  return getAuth().currentUser.photoURL || "/images/profile_placeholder.png";
}

// Returns the signed-in user's display name.
function getUserName() {
  return getAuth().currentUser.displayName;
}

// Returns true if a user is signed-in.
function isUserSignedIn() {
  return !!getAuth().currentUser;
}

//saves the current users projects and todos to the store
async function saveProjects(projects) {
  try {
    await addDoc(collection(getFirestore(), "messages"), {
      name: getUserName(),
      text: JSON.stringify(projects),
      profilePicUrl: getProfilePicUrl(),
      timestamp: serverTimestamp(),
    });
  } catch (error) {
    console.error("Error writing new message to Firebase Database", error);
  }
}

// /*
function newPageOpener() {
  // sign in button
  const signInButton = document.createElement("button");
  signInButton.innerHTML = "press this to sign in with google account";
  signInButton.addEventListener("click", () => {
    signIn();
    // get the projects and todos from this user or a anonymous login first time
    renderPage();
    allListeners();
    General.toggleActive();
    checkForActiveProject();
    // add them to the arrays
    //render the page
  });
  document.body.appendChild(signInButton);

  //sign out button
  const signOutButton = document.createElement("button");
  signOutButton.innerHTML = "press this to sign Out";
  signOutButton.addEventListener("click", () => {
    signOutUser();
    while (document.body.firstElementChild) {
      document.body.removeChild(document.body.firstElementChild);
    }
    newPageOpener();
  });
  document.body.appendChild(signOutButton);

  //anonymous sign in button
  const signInAnon = document.createElement("button");
  signInAnon.innerHTML = "press this to sign in anonymously";
  signInAnon.addEventListener("click", () => {
    const auth = getAuth();
    signInAnonymously(auth);

    // load the basic load page
    renderPage();
    anonymousSigninSetup();
    allListeners();
    General.toggleActive();
    checkForActiveProject();
    // hide the buttons
    signInButton.setAttribute("hidden", "true");
    //signOutButton.setAttribute("hidden", "true");
    signInAnon.setAttribute("hidden", "true");
  });
  document.body.appendChild(signInAnon);
}
// */
// initialize page
newPageOpener();

//initialie firebase
const firebaseAppConfig = getFirebaseConfig();
const app = initializeApp(firebaseAppConfig);
const db = getFirestore(app);
initFirebaseAuth();

export { saveProjects };
