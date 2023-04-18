import './App.css';
import {React,useState,useEffect} from 'react'

import Navbar from "./components/Navbar";
 import { getAuth,onAuthStateChanged,signOut} from "firebase/auth";
 import { app } from './firebase';
import SingUppage from './components/SingUppage';
import Loginpage from './components/Loginpage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
//import { isDocument } from '@testing-library/user-event/dist/utils';
//import { ProviderId } from 'firebase/auth';


const auth=getAuth(app);

function App() {
  const [user, setUser]  = useState(null);
  useEffect(() => {
    onAuthStateChanged (auth, (user) => {
      if (user) {
      // Yes, you are logged in
      setUser(user); 
      console.log("Hello", user);
      } else {
      // User is logged out
      console.log("You are logged out");
      setUser(null);
      }
      });
  }, [])

  if(user === null) {
    return (
   
    <Router>
  <Route>
          <Navbar/>
    </Route>
    
   <Switch>
   <Route path="/login">
          <Loginpage/>
    </Route>
   <Route path="/">
         <SingUppage/>
    </Route>
    </Switch>
  </Router>
    
    )
  }
    
  return (
    <>
    <div className="App">
    <h1>Hello {user.displayName}</h1>
    <h4>Email {user.email}</h4>
    
    <button onClick={()=>signOut(auth)}>logout</button>
    </div>
    
  {/* <Router>
  <Route>
          <Navbar/>
    </Route>
    
   <Switch>
   <Route path="/login">
          <Loginpage/>
    </Route>
   <Route path="/">
         <SingUppage/>
    </Route>
    </Switch>
  </Router> */}
</>
  );
}
export default App;
