// import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";

import { Link, useNavigate } from "react-router-dom";

// import { useEffect, useState } from "react";
const videoURL =
  "https://player.vimeo.com/video/606198131?h=cc3db5339c?autoplay=1&loop=1";

const description =
  "I am Gregory Kalamdaryan and I've been working with VFX for 7 years. I started out with Maya's nParticles and Bifrost engine. During my time at Los Angeles Film School, I moved on to Realflow and eventually HoudiniFX. I have now been using Houdini for 5 years alongside Nuke to build 3D scenes to composite in.";

export const Home = () => {
  return (
    <div className="flex flex-col items-center flex-1 w-full gap-8 bg-background py-8">
      <iframe
        src={videoURL}
        className="w-full h-[300px] md:h-[500px]"
        allowFullScreen
        id="video"
      />
      <div className="text-foreground w-[300px] md:w-[600px] text-center">
        {description}
      </div>
      <h1 className="text-3xl text-foreground">Other Works</h1>

      <div className="">
        <ImageSlider images={otherWorksImageUrls} />
      </div>
    </div>
  );
};

const otherWorksImageUrls = [
  "https://s3-us-west-1.amazonaws.com/gregkalamdaryanbucket2/website_files/Screenshots/CloudShip.jpg",
  "https://s3-us-west-1.amazonaws.com/gregkalamdaryanbucket2/website_files/Screenshots/gears.jpg",
  "https://s3-us-west-1.amazonaws.com/gregkalamdaryanbucket2/website_files/Screenshots/Lava.jpg",
  "https://s3-us-west-1.amazonaws.com/gregkalamdaryanbucket2/website_files/Screenshots/ship.jpg",
  "https://s3-us-west-1.amazonaws.com/gregkalamdaryanbucket2/website_files/Screenshots/Treegrowth.jpg",
];

const otherWorksHrefs = ["cloud", "gears", "lava", "ship", "treegrowth"];

interface ImageSliderProps {
  images: string[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const navigate = useNavigate();
  return (
    <div className="flex overflow-hidden w-full max-w-[800px]">
      <div className="flex animate-slide infinite">
        {images.map((imageUrl, index) => (
          <img
            key={index}
            src={imageUrl}
            alt={`Image ${index}`}
            className="w-1/2 object-cover h-48 cursor-pointer"
            onClick={() => {
              navigate(`/other-works?video=${otherWorksHrefs[index]}`);
            }}
          />
        ))}
      </div>
    </div>
  );
};

// very nice but not in use
// const ImageCarousel = () => {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   const nextImage = () => {
//     setCurrentImageIndex((prev) => (prev + 1) % otherWorksImageUrls.length);
//   };

//   const prevImage = () => {
//     setCurrentImageIndex((prev) =>
//       prev === 0 ? otherWorksImageUrls.length - 1 : prev - 1,
//     );
//   };

//   // auto change image every 5 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       nextImage();
//     }, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="flex flex-col items-center justify-center gap-4">
//       <div className="flex items-center justify-center gap-4">
//         <button onClick={prevImage}>
//           <ArrowLeftIcon className="w-8 h-8 text-foreground" />
//         </button>
//         <img
//           src={otherWorksImageUrls[currentImageIndex]}
//           alt="other works"
//           className="w-[300px] h-[300px] object-cover"
//         />
//         <button onClick={nextImage}>
//           <ArrowRightIcon className="w-8 h-8 text-foreground" />
//         </button>
//       </div>
//       <div className="flex items-center justify-center gap-4">
//         {otherWorksImageUrls.map((_, index) => (
//           <div
//             key={index}
//             onClick={() => setCurrentImageIndex(index)}
//             className={`w-4 h-4 rounded-full cursor-pointer ${
//               index === currentImageIndex ? "bg-foreground" : "bg-foreground/20"
//             }`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };
