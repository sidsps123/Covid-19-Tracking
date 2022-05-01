import { React,useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Home from './Home';
import SignIn from './sign';
import {firebase} from './Firebase/firebase';
function SignApp() {
    const [isUserSignedIn,setIsUserSignedIn]=useState(true);
    firebase.auth().onAuthStateChanged((user)=>{
            if(user){
                return setIsUserSignedIn(true);
            }
            setIsUserSignedIn(false);
        }) 
    if(isUserSignedIn===true){
        return (
            <Router>
                <Routes>
                    <Route path="/" component={Home}/>
                </Routes>
            </Router>
        );
    }else{
        return(
            <Router>
            <Routes>
                <Route path="/" component={SignIn}/>
            </Routes>
        </Router>
        );
       }
} 
export default SignApp