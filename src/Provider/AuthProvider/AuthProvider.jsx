import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../../firebase.config";

export const AuthContext = createContext(null);


const AuthProvider = ({ children }) => {
  const googleProvider = new GoogleAuthProvider();

  const githubProvider = new GithubAuthProvider();
 
  const [user , setUser] = useState(null)

 


  const registerUser = (email, password) => {
    
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUserWithEmailAndPass = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const githubLogin = () => {
    return signInWithPopup(auth, githubProvider);
  };

  const logOut =() =>{
    return signOut(auth)
  }


  useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth , currentUser => {
        setUser(currentUser)
    })
    return () =>{
        unSubscribe()
    }
  },[])


  const data = {
    user,
    registerUser,
    loginUserWithEmailAndPass,
    googleLogin,
    githubLogin,
    logOut
  };

  return (
    <div>
      <AuthContext.Provider value={data}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
