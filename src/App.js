import React from "react";
import CssLearn06 from "./CssLearn06.js"

import Header from "./Components/Header.jsx";
import Footer from "./Components/Footer.jsx";
import Test from "./Components/Test.js";

function App() {
  return (
    <div className="App">
      {/* <CssLearn06/> */}
      <Header/>
      <Test/>
      <Footer/>
    </div>
  );
}

export default App;