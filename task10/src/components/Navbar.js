import React from 'react'


const Navbar = () => {
  return (
    <div>
        <nav className='navbar navbar-expand-lg  ' >
            <div className='container ' >
                <a className='navbar-brand text-light'>TAMILNADU TOURISM</a>
                <div className='navbar-nav ml-auto'>
                    <a className='nav-link text-light'>Home</a>
                    <a className='nav-link text-light'>Place To Visit</a>
                    <a className='nav-link text-light'>Best Time To Visit</a>
                    <a className='nav-link text-light'>Packages</a> 
                    <a className='nav-link text-light'>Destination</a>
                    <a className='nav-link text-light'>Food</a>

                </div>

            </div>

        </nav>
    </div>
    
  )
}

export default Navbar