import { useState } from "react";

const videos: {
  [key: string]: {
    main: string;
    breakdown: string;
    isIFrame: boolean;
    current: string;
    title: string;
    description: string;
  };
} = {
  "planetary explosion": {
    main: "https://player.vimeo.com/video/606086990?h=96d7133a41",
    breakdown: "https://player.vimeo.com/video/606111779?h=8200f31954",
    isIFrame: true,
    current: "main",
    title: "Planetary Explosion",
    description:
      "Using Octane for the ice like shaders was very important to keep render times low here. Most volumes were also kept within houdini but all godrays were done using nuke",
  },
  volcano: {
    main: "https://player.vimeo.com/video/606038190?h=48f1b3be27",
    breakdown: "https://player.vimeo.com/video/606074390?h=06c79e3938",
    isIFrame: true,
    current: "main",
    title: "Underwater Volcano",
    description:
      "Used a volcano in Hawaii as inspiration for this. Had to do some extra work in nuke to really make a vibrant afternoon scene.",
  },

  disintegrate: {
    isIFrame: true,
    main: "https://player.vimeo.com/video/606146454?h=825d266591",
    breakdown: "https://player.vimeo.com/video/606161085?h=19b1a8d235",
    current: "main",
    title: "Metal Disintegration ",
    description:
      "My final iteration of the disintegration effect. Really pushing for better lighting and more complex photon maps.",
  },
  ocean: {
    breakdown:
      "https://s3-us-west-1.amazonaws.com/gregkalamdaryanbucket2/website_files/videos/ship/shipbreakdown.mov",
    main: "https://s3-us-west-1.amazonaws.com/gregkalamdaryanbucket2/website_files/videos/ship/ship2.mov",
    current: "main",
    title: "Ocean",
    description:
      "The scale of this shot extended render times but it was still done in reasonable time. I’m responsible for all aspects except modeling the ship. Everything was done in Houdini and composited in Nuke. ",
    isIFrame: false,
  },
  tornado: {
    breakdown:
      "https://s3-us-west-1.amazonaws.com/gregkalamdaryanbucket2/website_files/videos/tornado/tornado.mov",
    main: "https://s3-us-west-1.amazonaws.com/gregkalamdaryanbucket2/website_files/videos/tornado/tornado_breakdown.mov",
    current: "main",
    title: "Tornado",
    description:
      "This tornado was made by projecting UV’s on an animated cylinder. While it looks very dense, the simulation times are very quick. Background was filmed by me. All effects were done in Houdini and composited in Nuke.",
    isIFrame: false,
  },
  underwater: {
    breakdown:
      "https://s3-us-west-1.amazonaws.com/gregkalamdaryanbucket2/website_files/videos/underwater/underwater_breakdown.mov",
    main: "https://s3-us-west-1.amazonaws.com/gregkalamdaryanbucket2/website_files/videos/underwater/underwater.mov",
    current: "main",
    title: "Underwater",
    description:
      "This shot was made using a lot of noise with edge detection and mixing color channels in a 3d scene. Most of this shot was done using Nuke with some additional effects from Houdini.",
    isIFrame: false,
  },
};

export const DemoReel = () => {
  const [imgBreakdownStatus, setImgBreakdownStatus] = useState(
    Object.keys(videos).reduce<Record<string, boolean>>((acc, key) => {
      acc[key] = false;
      return acc;
    }, {}),
  );

  return (
    <div className="flex flex-col gap-8 bg-background text-foreground py-4">
      {Object.keys(videos).map((key, index) => {
        const video = videos[key];
        const imgBreakdown = imgBreakdownStatus[key];
        const videoUrl = video[imgBreakdown ? "breakdown" : "main"];
        return (
          <div className="flex flex-col gap-4 w-full justify-center text-center">
            <h1 className="text-2xl">{video.title}</h1>

            <div className="flex flex-col gap-2 items-center">
              {video.isIFrame ? (
                <iframe
                  src={videoUrl}
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  className="w-full h-[300px] md:h-[500px]"
                ></iframe>
              ) : (
                <video src={videoUrl} width="640" height="360" controls></video>
              )}
            </div>

            <div className="flex flex-col gap-4 mt-4 w-full items-center">
              <p className="max-w-[600px]">{video.description}</p>
              <div className="flex flex-row gap-4  w-full justify-center">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => {
                    setImgBreakdownStatus({
                      ...imgBreakdownStatus,
                      [key]: false,
                    });
                  }}
                >
                  Main
                </button>
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => {
                    setImgBreakdownStatus({
                      ...imgBreakdownStatus,
                      [key]: true,
                    });
                  }}
                >
                  Breakdown
                </button>
              </div>
            </div>

            {index !== Object.keys(videos).length - 1 && (
              <div className="flex w-full justify-center">
                <div className="border-b-4 w-[600px]" />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
