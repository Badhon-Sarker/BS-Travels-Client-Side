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
  const [loader, setLoader] = useState(true)

 


  const registerUser = (email, password) => {
    
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUserWithEmailAndPass = (email, password) => {
    setLoader(true)
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleLogin = () => {
    setLoader(true)
    return signInWithPopup(auth, googleProvider);
  };

  const githubLogin = () => {
    setLoader(true)
    return signInWithPopup(auth, githubProvider);
  };

  const logOut =() =>{
    setLoader(true)
    return signOut(auth)
  }


  useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth , currentUser => {
        setUser(currentUser)
        setLoader(false)
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
    logOut,
    loader
  };

  return (
    <div>
      <AuthContext.Provider value={data}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
