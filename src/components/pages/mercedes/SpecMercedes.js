import React from 'react'

const SpecMercedes = ({stat, index, toogleStat}) => {
    return (
        <div className={"stat " + (stat.show ? "show" : "")} key={index} onClick={() => toogleStat(index)}>
            <div className="stat-info">{stat.info}</div>
            <div className="stat-statements">{stat.statements}</div>
            
        </div>
    )
}

export default SpecMercedes
