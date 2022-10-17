import React from 'react'
import Logout from '../logout/Logout'

const Header = () => {
  return (
    <div>
        
           {/* SEARCH */}
           <li className="xn-search">
          <form role="form">
            <input type="text" name="search" placeholder="Search..." />
          </form>
        </li>   
        <Logout />
        {/* END SEARCH */}
       
    </div>
  )
}

export default Header