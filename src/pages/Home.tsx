const videoURL =
  "https://player.vimeo.com/video/606198131?h=cc3db5339c?autoplay=1&loop=1";

export const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center flex-1 w-full gap-4 bg-background">
      <iframe
        src={videoURL}
        width="100%"
        height={window.innerHeight * 0.8 + "px"}
        allowFullScreen
        id="video"
      />
    </div>
  );
};
