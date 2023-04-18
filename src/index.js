import "./style.css";
import { renderPage } from "./renderPage";
import { allListeners } from "./eventListeners.js";
import {
  anonymousSigninSetup,
  checkForActiveProject,
  General,
  Project,
  projects,
} from "./projectsTodos";
// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import {
  getAuth,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
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
  getDoc,
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
import { parseDataToProjectsTodos, parseProjectsToJSON } from "./saveToDrive";
// Signs-in Friendly Chat.
async function signIn() {
  // Sign in Firebase using popup auth and Google as the identity provider.
  var provider = new GoogleAuthProvider();
  try {
    await signInWithRedirect(getAuth(), provider);
  } catch (error) {
    console.log(error);
  }
}

// Signs-out of Friendly Chat.
export const signOutUser = async () => {
  try {
    await getAuth().signOut();
    console.log("User signed out successfully");
  } catch (error) {
    console.log(error);
  }
};

// Initialize firebase auth
function initFirebaseAuth() {
  // Listen to auth state changes.
  onAuthStateChanged(getAuth(), authStateObserver);
}
function authStateObserver(user) {
  if (user) {
    collectProjects();

    // User is signed in!
    // Get the signed-in user's profile pic and name.
    var profilePicUrl = getProfilePicUrl();
    var userName = getUserName();

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
    // User is signed out!
    while (projects[0]) {
      projects.pop();
    }
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
    await setDoc(doc(db, getUserName(), getUserName() + " Projects"), {
      name: getUserName(),
      text: parseProjectsToJSON(projects),
      timestamp: serverTimestamp(),
    });
  } catch (error) {
    console.error("Error writing new message to Firebase Database", error);
  }
}

// get the info from the previous saved to-dos
async function collectProjects() {
  const docRef = doc(db, getUserName(), getUserName() + " Projects");
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    const newProjects = parseDataToProjectsTodos(docSnap.data().text);

    for (let i = 0; i < newProjects.length; i++) {
      projects.push(newProjects[i]);
    }
    clearOpeningScreen();
    renderPage();
    allListeners();
    General.toggleActive();
    checkForActiveProject();
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
    clearOpeningScreen();
    renderPage();
    anonymousSigninSetup();
    allListeners();
    General.toggleActive();
    checkForActiveProject();
  }
}
function clearOpeningScreen() {
  while (document.body.firstElementChild) {
    document.body.removeChild(document.body.firstElementChild);
  }
}
// /*
function signOutButton() {
  //sign out button
  const signOutButton = document.createElement("button");
  signOutButton.classList.add("login-btn", "sign-out-btn");
  signOutButton.innerHTML = "Sign Out";
  signOutButton.addEventListener("click", () => {
    signOutUser();
    while (document.body.firstElementChild) {
      document.body.removeChild(document.body.firstElementChild);
    }
    newPageOpener();
  });
  return signOutButton;
}
function newPageOpener() {
  const wrapper = document.createElement("div");
  wrapper.classList.add("wrapper");
  document.body.appendChild(wrapper);
  // sign in button
  const signInButton = document.createElement("button");
  signInButton.classList.add("login-with-google-btn");
  signInButton.classList.add("login-btn");
  signInButton.innerHTML = "Sign In With Google Account";
  signInButton.addEventListener("click", () => {
    signIn();

    // get the projects and todos from this user or a anonymous login first time

    // add them to the arrays
    //render the page
  });
  wrapper.appendChild(signInButton);

  //anonymous sign in button
  const signInAnon = document.createElement("button");
  signInAnon.classList.add("login-btn");

  signInAnon.innerHTML = "Guest Signin";
  signInAnon.addEventListener("click", () => {
    const auth = getAuth();
    signInAnonymously(auth);

    // load the basic load page
    clearOpeningScreen();
    renderPage();
    anonymousSigninSetup();
    allListeners();
    General.toggleActive();
    checkForActiveProject();
  });
  wrapper.appendChild(signInAnon);
}
// */
// initialize page
newPageOpener();

//initialie firebase
const firebaseAppConfig = getFirebaseConfig();
const app = initializeApp(firebaseAppConfig);
const db = getFirestore(app);
initFirebaseAuth();

export { saveProjects, signOutButton };
