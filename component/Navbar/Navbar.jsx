"use client";
import navbarcss from './Navbar.css';
export default function NavbarComponent() {

    const toggleTheame=()=>{
        document.documentElement.classList.toggle('dark-mode');
    }
    return(
       <nav className="navbar-full">
        <div className='navbar-logo'>
            <div>Jui</div>
        </div>
        
        <div className='navbar-info' >
            <div className='navbar-other-info'>
                <div>About</div>
            <div>Project</div>
            <div>Contact</div>
            <div>resume button</div>
            </div>
            <div className='navbar-other-info'>
              <button  style={{cursor:'pointer'}}onClick={toggleTheame}>M</button>
            </div>
            
        </div>
       </nav>
    )
}