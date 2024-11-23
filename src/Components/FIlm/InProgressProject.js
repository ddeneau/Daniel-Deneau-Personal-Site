const InProgressProject = ({ title, description, images, youtubeLink, role }) => (
  <div className="rounded-2xl bg-white mt-6 mx-5 p-6">
    <div className="flex">
      <h3 className="text-xl font-bold mb-2 mr-2">Title:</h3>
      <p className="text-xl text-slate-900 font-medium mb-2">{title}</p>
    </div>

    <div className="flex">
      <h3 className="text-xl font-bold mr-2">Tags:</h3>
      <p className="text-xl text-slate-900 font-medium mb-2">{description}</p>
    </div>

    <div className="flex">
      <h3 className="text-xl font-bold mr-2">Images:</h3>
    </div>

    <div className="flex gap-2">
      {images.map((src, index) => (
        <img key={index} src={src} alt={`Project ${index + 1}`} className="w-1/3 rounded-lg" />
      ))}
    </div>

    <div className="flex gap-4">
      <p>Link Coming Soon</p>
    </div>
    
    <div className="flex">
      <h3 className="text-xl font-bold mr-2">Role:</h3>
      <p className="text-xl text-slate-900 font-medium mb-2">{role}</p>
  </div>

  </div>
  );
  
  export default InProgressProject