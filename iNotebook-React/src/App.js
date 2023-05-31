import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from './components/Navbar';
import { Home } from './components/Home';
import About from './components/About';
import NoteState from './context/notes/NoteState';
import { Alert } from './components/Alert';
import Signup from './components/Signup';
import Login from './components/Login';
import { useState } from 'react';

function App() {
  const [alert, setAlert] = useState({msg:"",type:""})
  const showAlert = (msg,type)=>{
    setAlert({
      msg,type
    })
    setTimeout(()=>{
      setAlert({msg:"",type:""})
    },2000)
  }
  return (
    <>
      <NoteState>
        <Router>
          <Navbar />
          <Alert message={alert.msg} type = {alert.type} />
          <div className="container">
            <Switch>
              <Route exact path="/">
                <Home showAlert = {showAlert} />
              </Route>
              <Route exact path="/about">
                <About />
              </Route>
              <Route exact path="/login">
                <Login showAlert = {showAlert}/>
              </Route>
              <Route exact path="/signup">
                <Signup showAlert = {showAlert}/>
              </Route>
            </Switch>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
