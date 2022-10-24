import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getDatabase} from "firebase/database";
import {FirebaseApp} from "@firebase/app";
import {Auth} from "@firebase/auth";
import firebase from "firebase/compat";
import {Database} from "@firebase/database";

type fireBaseConfig = {
    apiKey : string;
    authDomain : string;
    databaseURL : string;
    projectId : string;
    messagingSenderId : string;
    appId : string;
    measurementId : string;
};

const firebaseConfig : fireBaseConfig ={
    apiKey: process.env.REACT_APP_FIREBASE_APIKEY ! as string,
    authDomain:process.env.REACT_APP_AUTH_DOMAIN ! as string,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL! as string,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID! as string,
    messagingSenderId:process.env.REACT_APP_MESSAGING_SENDER_ID! as string,
    appId: process.env.REACT_APP_FIREBASE_APPID! as string,
    measurementId:process.env.REACT_APP_MEASUREMENT_ID! as string,
}

const app:FirebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth:Auth = getAuth(app);
export const firebaseDataBase:Database = getDatabase(app);