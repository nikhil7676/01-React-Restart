import React from 'react'

function ChilderProps({children}) {
  return (
    <div>
        <h1 style={{ textAlign : "center" }} >children Props</h1>
        {children}
    </div>
  )
}

export default ChilderProps