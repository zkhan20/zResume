import React from 'react'
import './About.css'
function About()  {
  return (
    <div className='About'>
        <section className="about">

        <div className="about-head">
            <h1>ABOUT ME</h1>
        </div>
        <div className="about-content">
            <dd>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error pariatur nesciunt sed aut illum unde
                repellat impedit, at obcaecati atque harum aperiam, eaque ipsa debitis culpa, sunt accusamus? Sint,
                fugit dolor? Voluptatum nihil nemo beatae. Ab sint, quidem at odio voluptatum rem accusamus reiciendis
                dolore id labore voluptates aperiam tempore vero, quasi quo repellat! Voluptas aperiam quia quisquam
                atque? Iure alias placeat asperiores dignissimos totam ab? Quibusdam molestias vitae quisquam iste
                quasi? Dicta voluptate doloribus dolores in aut repellat? Nam sed molestiae porro, culpa alias ex
                tenetur architecto doloribus dolores possimus, ducimus quas sunt perferendis officiis! Ut id commodi in.
            </dd>
        </div>
        <div className="about-btn">
            <button className="btn">
                <a href="../Job Description.pdf" download>Download Resume</a>
            </button>
        </div>

        </section>

    </div>
  )
}

export default About
