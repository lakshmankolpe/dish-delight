import "./Navbar.css"
import logo from "./../../assets/logo.png"
import {Link} from 'react-router-dom';
import menuicon from "./menu.png"
import { useState } from 'react';


function Navbar() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (<>
    
    <div className="navbar-container "  >
    <div className='logo-container'>
        <img src={logo} className='logo'/>

          <img src={menuicon} className='menuicon' onClick={toggleMenu}/>
          </div>

         {/* for small device */}
         {
          isMenuOpen ?
         <div className='menu-icon-container'>
            <Link to="/" className='menu-navbar-item'>Home</Link>
            <Link to="/categories/veg" className='menu-navbar-item'>Categories</Link>
    
            <Link to="/blog"className='menu-navbar-item'>Blog</Link>
            <Link to="/about" className='menu-navbar-item'>About</Link>
            <Link to="/login" className='menu-navbar-item'>Log-in</Link>
            
          </div>: null}
       
        <div className='nav-item-container '>
         <Link to="/" className='nav-item'>Home</Link>
         <Link to="/veg"  className='nav-item'>Categories</Link>
         
         <Link to="/blog"className='nav-item'>Blog</Link>
         <Link to="/about" className='nav-item'>About</Link>
        
       </div>
       <div>
         <Link to='/login' className='login '>Log-in</Link>
       </div>
    </div> 
    </>
  )
}


export default Navbar