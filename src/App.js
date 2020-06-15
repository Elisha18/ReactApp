import React from 'react';
import logo from './logo.svg';
import NavBar from './component/navBar';
import {Route,Switch,Redirect} from 'react-router-dom';
import AboutUs from './component/aboutUs';
import Register from './component/register';
import Login from './component/Login';
import ContactUs from './component/contactUs';
import Home from './component/home';
import Footer from './component/footer';
import Patient from './component/patient';
import PatientRecord from './component/patientRecord';
import './App.css';
import NotFound from './component/notFound';

function App() {
  return (
    <React.Fragment>
      <NavBar/>
      <main className="container">
        <Switch>
            <Route path="/patient/:id" component={PatientRecord}></Route>
            <Route path="/patient" component={Patient}></Route>
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/contactUs" component={ContactUs}></Route>
            <Route path="/aboutUs" component={AboutUs}></Route>
            <Route path="/not-found" component={NotFound}/>
            <Route path="/" component={Home}></Route>      
        </Switch>
      </main>
      <Footer />
    </React.Fragment>
    
  );
}

export default App;
