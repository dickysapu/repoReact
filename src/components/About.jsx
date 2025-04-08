import aboutImg from "../assets/aboutimg.jpg";
import { ABOUT_TEXT } from "../constants";
const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">
        About
        <span className="text-neutral-500">Me</span>
      </h1>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8 flex justify-center">
          <img className="rounded-3xl max-w-md" src={aboutImg} alt="about" />
        </div>
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
          <div className="lg:pl-8">
            <p className="my-2 max-w-md py-6">{ABOUT_TEXT}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
