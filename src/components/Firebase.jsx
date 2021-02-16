import app from 'firebase';
import 'firebase/auth';

const config = {
apiKey: "AIzaSyBOgeck23mufE8gTktaAqK4OaK8GGI2ahQ",
authDomain: "marvel-quizz-a5cae.firebaseapp.com",
projectId: "marvel-quizz-a5cae",
storageBucket: "marvel-quizz-a5cae.appspot.com",
messagingSenderId: "404992951718",
appId: "1:404992951718:web:c489f61b37d3dd066d3b67"
};

class Firebase {
    constructor() {
        app.initializeApp(config);
        this.auth = app.auth();
    }
    // inscription
    signupUser = (email, password) => {
        this.auth.createUserWithEmailAndPassword(email, password);
    }
    // connexion
    loginUser = (email, password) => {
        this.auth.signInWithEmailAndPassword(email, password);
    }
    // deconnexion
    signoutUser = () => {
        this.auth.signOut();
    }
}

export default Firebase;