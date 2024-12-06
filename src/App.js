import React from "react";
import CssLearn06 from "./CssLearn06.js"

import Header from "./Components/Header.jsx";
import Footer from "./Components/Footer.jsx";
import Test from "./Components/Test.js";
import Home from "./Home.jsx";
import PropsDemo from "./Learn JSX/PropsDemo.jsx";
import ChilderProps from "./Learn JSX/ChilderProps.jsx";
import Posts from "./Posts.jsx";

function App() {

  //PropDemo component props
  let companyInfo = {
    cName : "Extremo Tech",
    cEmail : "extremoTech@gmail.com"
  }

  return (
    <div className="App">
      {/* <CssLearn06/> */}
      
      {/* <Header/> */}
        {/* here we use bootstrap classes */}
       {/* <div className="container text-danger">
        hello this is Home page
       </div>
      <Footer/> */}

      {/* <Home/> */}
      {/* <PropsDemo companyInfo = {companyInfo} username = "Nikhil Joshi"/> */}

      {/* this is the childer props data / concept
      <ChilderProps>
        <p style={{ marginLeft : "3%" }} >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt voluptate, earum aperiam animi consequuntur illo corporis quidem numquam sequi repellendus!
        </p>
      </ChilderProps> */}

      <Posts/>
    </div>
  );
}

export default App;