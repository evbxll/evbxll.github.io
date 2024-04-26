import React from 'react';

const projectWebpages = [
  {
    title: 'Cellular Automaton',
    url: 'https://evbxll.github.io/CellularAutomata/',
    description: 'A web-based platform for exploring various types of cellular automata models. Utilizes JavaScript and HTML5 Canvas for visualization and interaction.',
    image: 'https://via.placeholder.com/150' // Add your image URL here
  },
  {
    title: 'Bird Boid Simulator',
    url: 'https://evbxll.github.io/BirdBoidSim/',
    description: 'An interactive simulation of bird flocking behavior, implementing algorithms based on Craig Reynolds\'s boid model. Provides insights into collective behavior and autonomous agent systems.',
    image: 'https://via.placeholder.com/150' // Add your image URL here
  },
  // { name: 'Project 3', url: 'https://project3.com', description: '', image: '' },
  // Add more projects as needed
];

const ProjectGrouping = () => {
  return (
    <div className="flex flex-col items-center space-y-8">
      {projectWebpages.map((project, index) => (
        <a key={index} href={project.url} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 border border-gray-300 p-4 rounded-lg transition duration-300 hover:shadow-lg">
          <img src={project.image} alt={project.title} className="w-16 h-16 rounded-lg" />
          <div>
            <h2 className="text-lg font-semibold">{project.title}</h2>
            <p className="text-sm text-gray-600">{project.description}</p>
          </div>
        </a>
      ))}
    </div>
  );
}

export default ProjectGrouping;