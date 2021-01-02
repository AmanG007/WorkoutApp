// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import firebase from "firebase";

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyADsXyVV4Gzbk78w0-pKJXo6mnSKVUAZ9Y",
    authDomain: "ag-fitness-tracker-dn.firebaseapp.com",
    projectId: "ag-fitness-tracker-dn",
    storageBucket: "ag-fitness-tracker-dn.appspot.com",
    messagingSenderId: "786854708770",
    appId: "1:786854708770:web:948fb285df7a9a0e222c7b",
    measurementId: "G-CV9JX4MD50",
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
