import React from 'react'

function Helmet(props) {
    document.title = "Elessi - "+ props.title
  return (
    <div style={{width: "100%"}}>
        {props.children}
    </div>
  )
}

export default Helmet