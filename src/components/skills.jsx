import React from 'react';
import skills from './data/skills.json';

function Skills() {
  return (
    <>
      <section id="skills" className="bg-[linear-gradient(135deg,_#1e3c72,_#2a5298)] bg-cover bg-center text-white py-12 px-4 sm:px-6">
        <div className="container mx-auto px-6 lg:px-20">
          <h2 className="md:text-3xl text-2xl text-center font-bold mb-4 sm:mb-6">Technical Skills</h2>
          <h3 className="text-lg sm:text-xl lg:text-2xl text-center font-medium mb-8">
            My Expertise in Latest Technologies
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {skills.map((data) => (
              <div
                key={data.id}
                className="relative group border-white border-2 cursor-pointer shadow-2xl rounded-lg md:p-4 p-2 text-center overflow-hidden"
              >
                <div className="absolute inset-0 bg-blue-600 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></div>
                <span className="relative text-lg sm:text-base lg:text-lg font-medium text-white z-10">
                  {data.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Skills;
