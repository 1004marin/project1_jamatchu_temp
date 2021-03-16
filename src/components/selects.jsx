import React, { useState } from "react"
import "../css/inputs.css"

function Select({ n, value, message, type, up }) {
  const [text, setText] = useState("")
  const [errorMessage, setErrorMessage] = useState("")

  return (
    <div className="inputBox">
      <div className="topMessage">{up}</div>
      <div className="Box">
        <select name={n} value={value} value={text} />
      </div>
    </div>
  )
}

export default Select
