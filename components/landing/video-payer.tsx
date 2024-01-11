const VideoPlayer = () => {
  return (
    <div className="my-4 rounded">
      <video width="640" height="360" controls autoPlay muted loop>
        <source src="/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
