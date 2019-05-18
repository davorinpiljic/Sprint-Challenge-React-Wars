import React from 'react'

const CharList = (props) => {
    return(
      <div>{props.names.map((element, key) => {
      return (
        <li key={element.created}>{element.name}</li>)
    })}</div>)
}

export default CharList
