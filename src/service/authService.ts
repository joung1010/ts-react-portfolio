import {Auth,  User, UserCredential} from "@firebase/auth";
import {signInWithPopup, GoogleAuthProvider, GithubAuthProvider, signOut, onAuthStateChanged} from "firebase/auth";

export class AuthService {
    private googleProvider :GoogleAuthProvider
    private githubProvider :GithubAuthProvider;

    constructor(private auth :Auth ) {
        this.googleProvider = new GoogleAuthProvider();
        this. githubProvider = new GithubAuthProvider();
    }
    getProvider(target : string) :  GoogleAuthProvider|GithubAuthProvider{
        switch (target) {
            case "Google":
                return this.googleProvider;
            case "Github":
                return this.githubProvider;
            default:
                throw new Error(`not supported provider: ${target}`);
        }
    }

    login(providerName:string):Promise<UserCredential> {
        const provider = this.getProvider(providerName);
        return signInWithPopup(this.auth, provider);
    }

    logout():Promise<void> {
        return signOut(this.auth);
    }

    onAuthStateChanged(movePage: (user: User | null)=> void) {
        onAuthStateChanged(this.auth, (user) => {
             movePage(user);
        });
    }

    getGithubProvider():GithubAuthProvider {
        return this.githubProvider;
    }

    getGoogleProvider():GoogleAuthProvider {
        return this.googleProvider;
    }
}