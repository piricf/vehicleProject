import React from 'react'

const SpecBmw = ({con, index, toogleCon}) => {
  return (
    <div className={"con " + (con.show ? "show" : "")} key={index} onClick={() => toogleCon(index)} >
      <div className="con-info">{con.info}</div>
      <div className="con-conditions">{con.conditions}</div>
    </div>
  )
}

export default SpecBmw 
