const ProjectCard2 = ({ title, description, images, youtubeLink, imdbLink }) => (
    <div className="rounded-2xl bg-white mt-6 mx-5 p-6">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-700 mb-4">{description}</p>
      <div className="flex gap-2 mb-4">
        {images.map((src, index) => (
          <img key={index} src={src} alt={`Project ${index + 1}`} className="w-1/3 rounded-lg" />
        ))}
      </div>
      <div className="flex gap-4">
        <p>Link Coming Soon</p>
      </div>
    </div>
  );
  
  export default ProjectCard2