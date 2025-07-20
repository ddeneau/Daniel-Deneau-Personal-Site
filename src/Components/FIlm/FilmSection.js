import React from 'react';
import ProjectCard from './ProjectCard';
import image_dimensions from '../Home/Images/dimensions.png'
import image_hjsn from '../Home/Images/hjsn.png'
import image_hjsn2 from '../Home/Images/hjsn2.png'
import image_ss1 from '../Home/Images/ss1.png';
import image_ss2 from '../Home/Images/ss2.png';



const FilmSection = () => {
  // Dummy data for projects
  const projects = {
    past: [
      {
        title: 'Sample Space',
        pageURL: '/sample-space',
        description: 'comedy, sci-fi, romance, short',
        images: [image_ss1, image_ss2],
        youtubeLink: 'https://www.youtube.com/watch?v=1W6RhrcbhFk',
        role: 'Director, Writer, Producer, Editor'
        
      },
      {
        title: 'Hot Jazz Saturday Night',
        description: 'documentary, music, art, short',
        images: [image_hjsn, image_hjsn2],
        role: 'Writer, Director, Producer, Editor',
        youtubeLink: 'https://filmfreeway.com/projects/2721151',
      },
      // Add more past projects here
    ],
    development: [
      {
        title: 'Knights',
        description: 'action, drama, horror',
        images: ['/img1.jpg', '/img2.jpg'],
        role: 'Guest Role'
        
      },
        {
            title: 'Sample Space Part 2',
            description: 'sci-fi, comedy',
            images: [image_dimensions],
            role: 'Director, Producer, Editor'
          },
  

      // Add more development projects here
    ]
  };

  return (
    <section className="container mx-auto py-8">
      <div className="md:flex md:gap-8">
        {/* Past Projects */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-2xl font-bold m-6 bg-white rounded-2xl text-center">Past Projects</h2>
          {projects.past.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        {/* Projects in Development */}
        <div className="md:w-1/2">
        <h2 className="text-2xl font-bold m-6 bg-white rounded-2xl text-center">In Development</h2>
          {projects.development.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FilmSection;
