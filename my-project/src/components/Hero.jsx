import { INTRO } from "../constants";
import profilePic from "../assets/Grad.png";

export const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">
              Mark Adrian Santander
            </h1>
            <span className="bg-gradient-to-r from-pink-300 via-slate-500 
              to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
                Software Developer
            </span>
            <p className="my-2 max-w-xl py-6 font-light tracking-tighter">
              {INTRO}
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center lg:justify-end">
            <img src={profilePic} alt="Grad" className="w-96 h-auto lg:w-80"/>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Hero;
