import React from 'react'

 const Header = ({active, activeStatus}) => {

  return (
    <div>
        <h1>hello World</h1>
        <h2>{active}</h2>
        <h3>{activeStatus}</h3>

    </div>
  )
}
export default Header
