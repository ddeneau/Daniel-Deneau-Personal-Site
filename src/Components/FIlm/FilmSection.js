import React from 'react';
import ProjectCard from './ProjectCard';
import FilmPage from './FilmPage';

import image_hjsn from '../Images/hjsn.png';
import image_hjsn2 from '../Images/hjsn2.png';
import image_ss1 from '../Images/ss1.png';
import image_ss2 from '../Images/ss2.png';

import aa_1 from '../Images/aa8.jpg'
import aa_2 from '../Images/aa_2.png'
import aa_7 from '../Images/aa7.jpg'
import joh1 from '../Images/JoH1.png'
import joh2 from '../Images/Joh2.png'
import joh3 from '../Images/Jack1.jpg'
import poster from '../Images/poster2.png'

import hunch1 from '../Images/Hunch1.jpg'
import hunch2 from '../Images/Hunch2.jpg'
import hunch3 from '../Images/Hunch3.jpg'

import es_title from '../Images/ES_title_logo.png'

    ;
const FilmSection = () => {
  // Dummy data for projects
  const projects = {
      past: [
      {
        title: 'Asocial Artist',
        url: "/asocial",
        description: 'An artist struggles to physically keep painting after accident',
        images: [aa_7, aa_1, aa_2],
        youtubeLink:'https://filmfreeway.com/projects/4207595',
        role: 'Director, Writer, Editor, Photography'
      },
      {
        title: 'Sample Space',
        url: "/sample_space",
        description: 'A concept opening scene for a longer idea about a group of bartenders that get involved in a multidimensional love-triangle',
        images: [image_ss1, image_ss2],
        youtubeLink: 'https://www.youtube.com/watch?v=1W6RhrcbhFk',
        role: 'Director, Writer, Producer, Editor'
      },
      {
        title: 'Hot Jazz Saturday Night',
        url: "/hot_jazz_saturday_night",
        description: 'A short documentary about a radio host for a jazz music and history show.',
        images: [image_hjsn, image_hjsn2],
        role: 'Writer, Director, Producer, Editor',
        youtubeLink: 'https://filmfreeway.com/projects/2721151',
      },
      // Add more past projects here
    ],
    development: [
      {
        title: 'Jack is Haunted',
        description: 'A struggling decoration craftsman deals with supernatural forces while a neighborhood gang plots their schemes. (Currently re-working the score from the temp score heard in the link below)',
        role: 'Director, Writer, Editor',
        images: [joh1, joh2, joh3],
        youtubeLink: 'https://youtu.be/z53Gq3zEqeo'
        },
        {
        title: 'Hunch',
        description: 'After blowing his shot on his first case, intern-detective Dimitri and his friends must work outside the system to confront a dark criminal conspiracy.',
        role: 'Showrunner, Writer, Director, Editor',
        images: [hunch1, hunch2, hunch3]
        },
        {
        title: "Encrypted Signals",
        description: "A group of ordinary friends are recruited by a mysterious organization and tasked with counter-spying against a group of corrupt elites.",
        role: "Writer, Director",
        images: [es_title]

        }
      // Add more development projects here
    ]
  };

  return (
    <section className="w-full max-w-screen-lg mx-auto py-8 px-2 sm:px-4 md:px-8">
      <div className="flex flex-col md:flex-row md:gap-8">
        {/* Past Projects */}
        <div className="w-full md:w-1/2 mx-0 sm:mx-2 md:mx-4 bg-white rounded-2xl mb-8 md:mb-0">
          <h2 className="text-2xl font-bold bg-white rounded-2xl text-center w-fit px-6 py-2 mx-auto mb-6">-Watch Now-</h2>
          <div className="border border-red-400 mx-2 sm:mx-4"></div>
          {projects.past.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        {/* Projects in Development */}
        <div className="w-full md:w-1/2 mx-0 sm:mx-2 md:mx-4 bg-white rounded-2xl">
          <h2 className="text-2xl font-bold bg-white rounded-2xl text-center w-fit px-6 py-2 mx-auto mb-6">-Coming Soon-</h2>
          <div className="border border-red-400 mx-2 sm:mx-4"></div>
          {projects.development.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
              </div>
      </div>
    </section>
  );
};

export default FilmSection;
