import { EDUCATION } from "../constants";

export const Education = () => {
  return (
        <div className="border-b border-neutral-900 pb-4">
            <h2 className="my-20 text-center text-4xl text-blue-300">  
                Education
            </h2>
            <div>
                {EDUCATION.map((education, index) => (
                    <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                        <div className="w-full lg:w-1/4">
                            <p className="mb-2 text-sm text-neutral-400"> 
                                {education.year} 
                            </p>
                        </div>
                        <div className="w-full max-w-xl lg:w-3/4">
                            <h6 className="mb-2 font-semibold">
                                {education.degree} - {" "}
                                <span className="text-sm text-purple-100">
                                    {education.school}
                                </span>
                            </h6>
                            <p className="mb-4 text-neutral-400">
                                {education.description}
                            </p>
                            <div className="flex flex-wrap gap-1">
                            {education.knowledge.map((knowledge, index)=> (
                                <span key={index} className="mr-2 mt-4 text-sm bg-neutral-900 text-green-300 px-2 py-1 rounded">
                                    {knowledge}
                                </span>
                            ))}
                            </div>
                        </div>
                     </div>
                ))}
            </div>
        </div>
  );
};
export default Education;
