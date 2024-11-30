import aboutImg from "../assets/dog.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

export const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-6
    ">
        <h2 className="my-20 text-center text-4xl text-blue-300">
            About
            <span className="text-neatural-500"> Me</span>
        </h2>
        <div className="flex flex-wrap items-center">
            <motion.div 
             whileInView={{opacity:1, x:0}} 
             initial={{opacity:0, x:-100}}  
             transition={{duration:0.5}}
             className="w-full lg:w-1/2 flex justify-center lg:justify-start lg:pl-60">
                    <img className="rounded-2xl w-96 h-auto" src={aboutImg} alt="my dog"/>
             </motion.div>
             <motion.div 
              whileInView={{opacity:1, x:0}} 
              initial={{opacity:0, x:100}}  
              transition={{duration:0.5}}
              className="w-full lg:w-1/2">
                <div className="flex flex-col items-center lg:items-start">
                    <p className="my-2 max-w-xl py-6 font-light tracking-tighter">
                    {ABOUT_TEXT}
                    </p>
                </div>
            </motion.div>
        </div> 
    </div>
  );
};
export default About;
