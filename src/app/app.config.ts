import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';


const firebaseConfig = {
  apiKey: "AIzaSyDZmtskskrWqjJtbHKKINcPlYvopINSwuA",
  authDomain: "parkease-45f2b.firebaseapp.com",
  databaseURL: "https://parkease-45f2b-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "parkease-45f2b",
  storageBucket: "parkease-45f2b.appspot.com",
  messagingSenderId: "251840447693",
  appId: "1:251840447693:web:8f840b7dbd7df7ffec5584",
  measurementId: "G-8WQ8SN2YQM"
}; 

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    importProvidersFrom([
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideAuth(() => getAuth())
  ]), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"parkease-45f2b","appId":"1:251840447693:web:8f840b7dbd7df7ffec5584","databaseURL":"https://parkease-45f2b-default-rtdb.asia-southeast1.firebasedatabase.app","storageBucket":"parkease-45f2b.appspot.com","apiKey":"AIzaSyDZmtskskrWqjJtbHKKINcPlYvopINSwuA","authDomain":"parkease-45f2b.firebaseapp.com","messagingSenderId":"251840447693","measurementId":"G-8WQ8SN2YQM"}))), importProvidersFrom(provideFirestore(() => getFirestore())), provideAnimationsAsync(), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"parkease-45f2b","appId":"1:251840447693:web:8f840b7dbd7df7ffec5584","databaseURL":"https://parkease-45f2b-default-rtdb.asia-southeast1.firebasedatabase.app","storageBucket":"parkease-45f2b.appspot.com","apiKey":"AIzaSyDZmtskskrWqjJtbHKKINcPlYvopINSwuA","authDomain":"parkease-45f2b.firebaseapp.com","messagingSenderId":"251840447693","measurementId":"G-8WQ8SN2YQM"}))), importProvidersFrom(provideFirestore(() => getFirestore())),
],
};
