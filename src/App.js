import './App.css';
import Navbar from "./components/Navbar";
// import { getAuth} from "firebase/auth";
// import { app } from './firebase';
import SingUppage from './components/SingUppage';
import Loginpage from './components/Loginpage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
//import { ProviderId } from 'firebase/auth';




function App() {
  return (
    <>
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


  </>
  );
}
export default App;
// Context Api
// 1)Create
// 2)Provider
// 3)Consumne
