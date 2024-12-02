
"use client"
import React from 'react';
import './MeSection.scss'
import Image from 'next/image'
const MeSection = () => {
  
  return (
    <section>
     <div className="container">
          <div className="text-section">
            <h1>Hi, I am Lucas!</h1>
            <h2>Software Developer</h2>
            <h3>Based on Brazil</h3>
            <p>Met minimi molt non desenant ularco est sit aliqua dolor do amet sint. Velt officin conseguiat duis enim welt molle. Exercitation winism consequat sunt nostrud amet.</p>
            <div className="buttons">
              <button className="btn">Discuss for Projects</button>
              <a href='https://github.com/L-Goncalves' target='_blank' className="btn">View Github</a>

             
            </div>
            <div className='socials-badge'>
                <div className='socials'>
                  <div className='socials link'> 
                  <a href='https://www.linkedin.com/in/l-goncalves12/' target="_blank" rel="noopener noreferrer">
                    <Image 
                      src="https://www.linkedin.com/favicon.ico" // Correct path: no 'public' prefix
                      alt="My Image"
                      width={32} 
                      height={32}
                    />
                    </a>
                  </div>
                  <div className='socials link'> 
                  <a href='https://github.com/L-Goncalves' target="_blank" rel="noopener noreferrer">
                    <Image 
                      src="https://github.githubassets.com/favicons/favicon-dark.png"
                      alt="My Image"
                      width={32} 
                      height={32}
                    />
                    </a>
                  </div>
                
                
        
                </div>
                <div className='badges'>
              
                </div>
              
            </div>
          </div>
          <div className="image-section">
            <div className="image-placeholder">
              <img alt='Profile Picture' src='https://media.licdn.com/dms/image/v2/D4D03AQEnh4LhGflcBw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1685480763807?e=1732752000&v=beta&t=Cv2QaBR8MySe_zMq60Yir9QPIeapcHCEFc-4jzHR_wU'/>
            </div>
          </div>
        </div>
    </section>
  );
};

export default MeSection;
