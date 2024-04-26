import React from 'react';

const AboutMe = () => {
  return (
    <section id="about" className="bg-gray-100 p-8 rounded-lg m-4">
      <h2 className="text-2xl font-bold mb-6">About Me</h2>
      <div className="flex flex-wrap items-start justify-between">
        <div className="w-full md:w-2/3 mb-4 md:mb-0">
          <p className="mb-4">Hi there! My name is Evan, and I’m passionate about math and computer science, with a particular enjoyment in simulations recently.</p>
          <p>Here are a few technologies I’ve been working with recently:</p>
          <ul className="list-disc pl-6 mt-2">
            <li>TypeScript</li>
            <li>C++</li>
            <li>React</li>
            <li>Python</li>
          </ul>
        </div>
        <div className="w-full md:w-1/3">
          <img src="/static/8325ac5511b633b4f2561ad035c9e975/25f3c/me.jpg" alt="Headshot" className="w-full h-auto rounded-lg" />
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
