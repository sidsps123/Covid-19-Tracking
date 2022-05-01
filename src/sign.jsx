import React from 'react';
import { firebase } from './Firebase/firebase';
const SignIn=()=>{
    const SignInWithFirebase=()=>{
        var google=new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(google)
        .then((re)=>{
          console.log(re);
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    return(
        <button onClick={SignInWithFirebase}>Sign In With Google</button>
    )
}
export default SignIn;