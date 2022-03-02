import logo from './logo.svg';
import './App.css';
import Profile from './component/Profile.js'
import FuncProfile from './component/FuncProfile';
import StateComp from './component/StateComp';
import HooksComp from './component/HooksComp';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <>
    <div>
    <Router>
    <Switch>
    <Link to="">Profile</Link>
        <Link to="/about">About</Link>
        <Link to="/courses">Course</Link>

        <Route exact path="/" component={Profile}></Route>
        <Route path="/about" component={FuncProfile}></Route>
        <Route path="/courses" component={StateComp}></Route>
        <Route path="/games" component={HooksComp}></Route>
        {/* <div>
      <Profile text3="text from App"/>
      <Profile text4="another text from App"/>
      <FuncProfile text="text from main app component!" text2={{name:'Jhon',currentNumber:1}}/>
      <StateComp/>
    </div> */}
    {/* <div>
      <HooksComp/>
      <UseEffect/>
    </div> */}
    </Switch>
      </Router>
    </div>    
    </>
    
  );
}

export default App;
