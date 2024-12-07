import React from 'react'
// import "./css/06.css"

function CssLearn06() {

    let name = "nikhil";
    let arr = [10, 20, 30, 40, 50]

    let isLogin = false

    return (
        <div className='main'>
            {/* map function example in jsx */}
            <h1> hello this is 06 video learning , my name is {name} </h1>
            {
                arr.map((val) => (
                    <div>
                        {val}
                    </div>
                ))
            }

            {/* turnary operator in example */}
            <div className='turnary'>
                <h3>turnary operator in jsx</h3>
                <button onClick={ () => {console.log(isLogin); return isLogin = !isLogin} }>
                    login
                </button>
                {console.log(isLogin)}
                <br />
                {
                    (isLogin) ?
                        "hello you are login"
                        :
                        "enter correct password"
                }
            </div>
        </div>
    )
}

export default CssLearn06