import React from 'react'
import  './Navbar.css'



function Navbar  ()  {
  return (
    <div className='Navbar'>
        <nav className="navbar">

          <div className="logo-div">
             <h1 id="logo">SR</h1>
          </div>
        <div className="navart">
            <div className="navdiv">Home</div>
            <div className="navdiv">About</div>
            <div className="navdiv">Projects</div>
            <div className="navdiv">Contact</div>
        </div>

        <div className="icons">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-linkedin"></i>
            <i className="fa-brands fa-twitter"></i>
        </div>
        {/* <div className="container">
           
              <input type="checkbox" className='checkbox' id='checkbox' />
            <label classNameName="switch" for="checkbox" id="backgroundToggle">
                <span className="slider"></span>
            </label> 
         </div> */}


        </nav>

          {/* const backgroundToggle = document.getElementById('backgroundToggle');
          const body = document.body;

          const dark = document.getElementById("chekbox");
          checkbox.addEventListener('click',()=>{
              body.classList.toggle('dark-mode'); */}
{/* }) */}

    </div>
  )
}

export default Navbar
