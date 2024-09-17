
import React from 'react';
import '../styles/Section.scss'

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
              <button className="btn">View Github</button>
              <button className="btn">View Github</button>
            </div>
          </div>
          <div className="image-section">
            <div className="image-placeholder">Image Placeholder</div>
          </div>
        </div>
    </section>
  );
};

export default MeSection;
