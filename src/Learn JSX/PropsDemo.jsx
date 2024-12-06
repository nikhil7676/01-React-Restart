import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

function PropsDemo(props) {

    //props destructuring
    const {cName , cEmail} = props.companyInfo

    console.log(`company name : ${cName}`);
    // console.log(`company name : ${companyInfo.name}`);
    

  return (
    <div>
        <Header/>
            <h1 style={{textAlign : "center"}} >Poprs example</h1>
            <h3>User's Name : {props.username} </h3>
            <h3> Comapany name : {cName} </h3>
            <h3> Comapany Email Address : {cEmail} </h3>
        <Footer/>
    </div>
  )
}

export default PropsDemo