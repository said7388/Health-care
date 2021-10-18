import {
    getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/Firebase.init";



initializeAuthentication();

const UseFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const GoogleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    const SignInWithGoogle = () => {
        setIsLoading(true);
        return signInWithPopup(auth, GoogleProvider)
    };

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, []);

    const LogOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => { })
            .finally(() => {
                setIsLoading(false);
            })
    };

    return {
        SignInWithGoogle,
        isLoading,
        setIsLoading,
        user,
        LogOut
    };
};

export default UseFirebase;