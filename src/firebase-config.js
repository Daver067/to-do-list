/**
 * To find your Firebase config object:
 *
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
  apiKey: "AIzaSyDeArDPNymNVq4_0Th9mKA9t7Ciefmnhr8",
  authDomain: "to-do-me-c5d3a.firebaseapp.com",
  projectId: "to-do-me-c5d3a",
  storageBucket: "to-do-me-c5d3a.appspot.com",
  messagingSenderId: "747792416895",
  appId: "1:747792416895:web:bb0d478edddc26b6b07f4a",
  measurementId: "G-88MR6E5CNT",
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error(
      "No Firebase configuration object provided." +
        "\n" +
        "Add your web app's configuration object to firebase-config.js"
    );
  } else {
    return config;
  }
}
