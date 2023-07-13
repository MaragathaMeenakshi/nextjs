import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from ".";


export const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [isAuthenticate,setIsAuthenticate] =useState(false);
  useEffect(()=>{
    console.log(currentUser)
  },[currentUser])

  function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function signIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth,(user) => {
      setCurrentUser(user);
      setLoading(false);
      if(user){
        setIsAuthenticate(true);
      }
      else{
        setIsAuthenticate(false);
      }
    });

    return () => unsubscribe();
  }, []);

  const value = {
    currentUser,
    signUp,
    signIn,
    isAuthenticate
  };
  useEffect(()=>{
    document.cookie='Authenticate'+ "=" + isAuthenticate;
    console.log(document.cookie)
  },[value])
  

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}