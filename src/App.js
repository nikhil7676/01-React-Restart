import React from "react";
import CssLearn06 from "./CssLearn06.js"

import Header from "./Components/Header.jsx";
import Footer from "./Components/Footer.jsx";
import Test from "./Components/Test.js";
import Home from "./Home.jsx";

function App() {
  return (
    <div className="App">
      {/* <CssLearn06/> */}
      
      {/* <Header/> */}
        {/* here we use bootstrap classes */}
       {/* <div className="container text-danger">
        hello this is Home page
       </div>
      <Footer/> */}

      <Home/>
    </div>
  );
}

export default App;