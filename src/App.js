import logo from './logo.svg';
import './App.css';
import Header from './Component/Header';
import HomePage from './Component/HomePage';
import Footer from './Component/Footer';
import About from './Component/About';
import Courses from './Component/Courses';
import CoursePage from './Pages/CoursePage';
import LoginFrom from './Component/LoginForm';
import Course from './Component/Course';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
    <Router>
    <Header/>
        <Routes>
          <Route exact path="/" element={<HomePage/>}>
          </Route>
          <Route exact path="/about" element={<About/>}>
          </Route>
          <Route exact path="/courses" element={<CoursePage/>}>
          </Route>
          <Route exact path="/login" element={<LoginFrom login="true" formHeading1="Log in" formHeading2="To your account" loginButton="Log In" downText1="Don't have an account?" downText2="Register"/>}>
          </Route>
          <Route exact path="/register" element={<LoginFrom login="false" formHeading1="Register" formHeading2="For your account" loginButton="Register" downText1="Have an account?" downText2="Login"/>}>
          </Route>
          <Route exact path="/apply" element={<LoginFrom login="false" formHeading1="Register" formHeading2="For your account" loginButton="Register" downText1="Have an account?" downText2="Login"/>}>
          </Route>
          <Route exact path="/course" element={<Course/>}>
          </Route>
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
