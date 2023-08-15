import { createRef, useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";

export const videosPrimary: IDemoReelVideo = {
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

interface IDemoReelVideo {
  [key: string]: {
    main: string;
    breakdown: string | null;
    isIFrame: boolean;
    current: string;
    title: string;
    description: string;
  };
}

export const videosOtherWorks: IDemoReelVideo = {
  lava: {
    breakdown:
      "https://s3-us-west-1.amazonaws.com/gregkalamdaryanbucket2/website_files/videos/lava/lavabreakdown.mov",
    main: "https://s3-us-west-1.amazonaws.com/gregkalamdaryanbucket2/website_files/videos/lava/lava.mov",
    current: "main",
    title: "Falling Lava",
    description: "This shot was made based off the tutorial by Ben Watts.",
    isIFrame: false,
  },
  sword: {
    breakdown:
      "https://s3-us-west-1.amazonaws.com/gregkalamdaryanbucket2/website_files/videos/sword/sword_breakdown.mov",
    main: "https://s3-us-west-1.amazonaws.com/gregkalamdaryanbucket2/website_files/videos/sword/sword.mov",
    current: "main",
    title: "Sword",
    description:
      "This was done by making changes to an existing tool I had. In order to allow me to use materials on the objects, I had to delete the faces as opposed making their opacity 0 like I did on the other scenes. This was done in Houdini and composited in Nuke.",
    isIFrame: false,
  },
  treegrowth: {
    breakdown:
      "https://s3-us-west-1.amazonaws.com/gregkalamdaryanbucket2/website_files/videos/treegrowth/breakdown.mov",
    main: "https://s3-us-west-1.amazonaws.com/gregkalamdaryanbucket2/website_files/videos/treegrowth/beauty_2.mov",
    current: "main",
    title: "Tree Growth",
    description:
      "This tree growth was made off a tool using L-systems. It can also support the look of actual trees and even vines. It used packed objects to allow me to potentially replicate very dense geometry with barely any extra strain on the computer. This was done in Houdini and composited in Nuke.",
    isIFrame: false,
  },
  cloud: {
    breakdown: null,
    main: "https://s3-us-west-1.amazonaws.com/gregkalamdaryanbucket2/website_files/videos/clouds/cloudship.mov",
    current: "main",
    title: "Cloudship",
    description:
      "This shot was made based off the tutorial by Andreas Vrhovsek.",
    isIFrame: false,
  },
  gears: {
    breakdown: null,
    main: "https://s3-us-west-1.amazonaws.com/gregkalamdaryanbucket2/website_files/videos/transmog/gears.mov",
    current: "main",
    title: "Gears",
    description: "This shot was made based off the tutorial by Jeff Wolverton.",
    isIFrame: false,
  },
  ship: {
    breakdown: null,
    main: "https://s3-us-west-1.amazonaws.com/gregkalamdaryanbucket2/website_files/videos/transmog/ship.mov",
    current: "main",
    title: "Ship",
    description: "This shot was made based off the tutorial by Jeff Wolverton.",
    isIFrame: false,
  },
  candle: {
    breakdown:
      "https://s3-us-west-1.amazonaws.com/gregkalamdaryanbucket2/website_files/videos/candle/candle_breakdown.mov",
    main: "https://s3-us-west-1.amazonaws.com/gregkalamdaryanbucket2/website_files/videos/candle/candle.mov",
    current: "main",
    title: "Candle",
    description:
      "I put a lot of work into the shaders of the smoke on this shot. The debris had a bit of a ripple effect but some compositing and the smoke fixed it naturally. This was modeled in Maya, and effects were done in Houdini. Composited in Nuke.",
    isIFrame: false,
  },
};

export const DemoReel = ({ videos }: { videos: IDemoReelVideo }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const videoName = searchParams.get("video");

  // remove the video param from the url
  useEffect(() => {
    if (videoName) {
      searchParams.delete("video");
      setSearchParams(searchParams);
    }
  }, [videoName]);
  const [imgBreakdownStatus, setImgBreakdownStatus] = useState(
    Object.keys(videos).reduce<Record<string, boolean>>((acc, key) => {
      acc[key] = false;
      return acc;
    }, {}),
  );

  const videoRefs = Object.keys(videos).reduce<Record<string, any>>(
    (acc, key) => {
      acc[key] = createRef<any>();
      return acc;
    },
    {},
  );

  useEffect(() => {
    if (videoName) {
      const videoRef = videoRefs[videoName];
      if (videoRef.current) {
        videoRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  }, [videoName, videoRefs]);

  return (
    <div className="flex flex-col gap-8 bg-background text-foreground py-4">
      {Object.keys(videos).map((key, index) => {
        const video = videos[key];
        const imgBreakdown = imgBreakdownStatus[key];
        const videoUrl =
          video.breakdown === null
            ? video.main
            : video[imgBreakdown ? "breakdown" : "main"];
        return (
          <div
            className="flex flex-col gap-4 w-full justify-center text-center"
            ref={videoRefs[key]}
            key={key}
          >
            <h1 className="text-2xl">{video.title}</h1>

            <div className="flex flex-col gap-2 items-center">
              {video.isIFrame ? (
                <iframe
                  //@ts-ignore
                  src={videoUrl}
                  title={video.title}
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  className="w-full h-[300px] md:h-[500px]"
                ></iframe>
              ) : (
                //@ts-ignore
                <video src={videoUrl} width="640" height="360" controls></video>
              )}
            </div>

            <div className="flex flex-col gap-4 mt-4 w-full items-center">
              <p className="max-w-[600px]">{video.description}</p>
              {video.breakdown !== null && (
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
              )}
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
