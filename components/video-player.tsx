const ProjectVideoPlayer = () => {
  return (
    <div className="my-4 flex items-center justify-center">
      <video className="w-full max-w-screen-lg" controls muted loop>
        <source src="/HelpmateAI.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default ProjectVideoPlayer;
