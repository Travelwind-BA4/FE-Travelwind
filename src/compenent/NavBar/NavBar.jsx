import React from 'react';

const NavBar = () => {
  return (
    <nav className='navbar bg-[#DCE2E5] relative z-30'>
        <div className='container'>
            <div className='nav-logo'>
                <h1>LOGO</h1>
            </div>
            <div className='nav-menu'>
                <div className='nav-list'>
                    <a>Flight</a>
                    <a>Flight</a>
                </div>
                <div className='nav-login'>
                    <button>Login</button>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default NavBar;