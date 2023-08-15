//@ts-ignore
import resumePdf from "assets/Greg-Resume.pdf";
import gregPhoto from "assets/gregphoto.jpg";
import resumeImg from "assets/resume_img.png";
import { Button } from "components/Button";

export const About = () => {
  return (
    <div className="flex flex-col items-center w-full flex-1 gap-4 py-4 dark bg-background text-foreground">
      <object
        data={resumePdf}
        type="application/pdf"
        width="100%"
        className="hidden md:flex flex-col items-center gap-4 h-[550px] md:h-[1200px] "
      >
        <img src={resumeImg} alt="resume" />
      </object>

      <img className="flex md:hidden" src={resumeImg} alt="resume" />

      <a href={resumePdf} download>
        <Button>Download Resume</Button>
      </a>

      <img alt="Gregory Kalamdaryan" src={gregPhoto} className="w-48 md:w-64" />
      <div className="text-3xl">Proficient with</div>
      <div className="flex flex-wrap justify-center gap-4">
        {logoUrls.map((logoUrl, i) => (
          <img
            key={i}
            src={logoUrl}
            alt="software logo"
            className="w-16 h-16"
          />
        ))}
      </div>
    </div>
  );
};

const logoUrls = [
  "https://s3-us-west-1.amazonaws.com/gregkalamdaryanbucket2/website_files/logos/aftereffect.png",
  "https://s3-us-west-1.amazonaws.com/gregkalamdaryanbucket2/website_files/logos/houdini.png",
  "https://s3-us-west-1.amazonaws.com/gregkalamdaryanbucket2/website_files/logos/maya.png",
  "https://s3-us-west-1.amazonaws.com/gregkalamdaryanbucket2/website_files/logos/mocha.png",
  "https://s3-us-west-1.amazonaws.com/gregkalamdaryanbucket2/website_files/logos/nuke.png",
  "https://s3-us-west-1.amazonaws.com/gregkalamdaryanbucket2/website_files/logos/photoshop.png",
  "https://s3-us-west-1.amazonaws.com/gregkalamdaryanbucket2/website_files/logos/realflow.png",
  "https://s3-us-west-1.amazonaws.com/gregkalamdaryanbucket2/website_files/logos/zbrush.png",
];
