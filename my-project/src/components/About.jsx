import aboutImg from "../assets/dog.jpg";
import { ABOUT_TEXT } from "../constants";
export const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <h2 className="my-20 text-center text-4xl text-blue-300">
            About
            <span className="text-neatural-500"> Me</span>
        </h2>
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-start lg:pl-8">
                    <img className="rounded-2xl w-96 h-auto" src={aboutImg} alt="my dog"/>
             </div>
             <div className="w-full lg:w-1/2">
                <div className="flex flex-col items-center lg:items-start">
                    <p className="my-2 max-w-xl py-6 font-light tracking-tighter">
                    {ABOUT_TEXT}
                    </p>
                </div>
            </div>
        </div> 
    </div>
  );
};
export default About;
