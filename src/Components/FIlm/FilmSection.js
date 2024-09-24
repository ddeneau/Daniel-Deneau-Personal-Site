import React from 'react';
import ProjectCard from './ProjectCard';
import ProjectCard2 from './ProjectCard2';
import image_dimensions from '../Home/Images/dimensions.png'
import image_hjsn from '../Home/Images/hjsn.png'
import image_hjsn2 from '../Home/Images/hjsn2.png'


const FilmSection = () => {
  // Dummy data for projects
  const projects = {
    past: [
      {
        title: 'Hot Jazz Saturday Night',
        description: 'documentary, music, art, short',
        images: [image_hjsn, image_hjsn2],
        youtubeLink: 'https://filmfreeway.com/projects/2721151',
      },

      {
        title: 'untilted short film',
        description: 'drama, short',
        images: ['/img1.jpg', '/img2.jpg'],
        youtubeLink: 'https://filmfreeway.com/projects/2721151',
      },
      // Add more past projects here
    ],
    development: [
        {
            title: 'Dimensions (Working Title)',
            description: 'sci-fi, comedy, vfx, feature length',
            images: [image_dimensions],
            youtubeLink: 'https://youtube.com/devlink',
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
            <ProjectCard2 key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FilmSection;
