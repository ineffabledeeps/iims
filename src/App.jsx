import React, { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./pages/Home";
import Classroom from "./pages/Classroom";
import Exam from "./pages/Exam";
import Calender from "./pages/Calender";
import Faculty from "./pages/Faculty";
import Navbar from "./components/header/Navbar";
import Footer from "./components/header/Footer";
import LostandFound from "./pages/LostandFound";
import { Switch, Route, Redirect } from "react-router-dom";
import Loginuser from "./pages/Loginuser";
import Bluebar from "./components/header/Bluebar";


// Kaiff Work Start


// Kaiff work End



//Start Preloader for Welcome Screen
const App = () => {
  const [loading, setLoading] = useState(true);
  const spinner = document.getElementById("spinner");
  if (spinner) {
    setTimeout(() => {
      spinner.style.display = "none";
      setLoading(false);
    }, 3000);
  }
  //End Preloader for Welcome Screen


 
  // Home Login Start
  


  // Home Login End

  return (
    !loading && (
    <>
      {/* ............................................................ */}
      <Bluebar/>
      <Navbar/>
      <Switch>
      <Route exact path="/" component={Home} />
        <Route exact path="/calender" component={Calender} />
        <Route exact path="/classroom" component={Classroom} />
        <Route exact path="/faculty" component={Faculty} />
        <Route exact path="/exam" component={Exam} />
        <Route exact path="/lostandfound" component={LostandFound} />
        <Route exact path="/loginuser" component={Loginuser} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </>
    )
  );
};

export default App;
