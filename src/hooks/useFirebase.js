import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication  from "./../components/Firebase/firebase.init"

initializeAuthentication();

const useFirebase = () =>{
    const[user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);


    const auth = getAuth();
      
    const googleProvider = new GoogleAuthProvider();


   const  signInUsingGoogle = () =>{
       setIsLoading(true); 
    return signInWithPopup(auth, googleProvider)
    .then(result => {
        setUser(result.user);
    })
    .finally(()=> setIsLoading(false) );





   }

   useEffect(() =>{
    const unsubscribed =   onAuthStateChanged(auth, user=>{
           if(user){
              setUser(user); 
           }
           else{
               setUser({})
           }
           setIsLoading(false)
       });
       return () => unsubscribed;
   },[])

   const logOut = () =>{
    setIsLoading(true); 
       signOut(auth)
       .then(() =>{ })
       .finally(() => setIsLoading(false));
   } 

    return {
        user,
        isLoading,
        signInUsingGoogle,
        logOut
    }
}

export default useFirebase;