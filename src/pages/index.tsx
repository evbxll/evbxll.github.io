import React, { useState } from 'react';
import AboutMe from './AboutMe';
import ProjectGrouping from './ProjectGrouping';

const HomePage = () => {
  return (
    <div className='flexbox justify-center space-y-8'>
      <AboutMe />
      <ProjectGrouping />
    </div>
  );
};

export default HomePage;
