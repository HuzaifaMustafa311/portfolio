import React from "react";
import experience from "./data/experience.json";

const Experience = () => {
    return (
        <div className="py-10 bg-gray-50 dark:bg-[#0f1632]" id="Experience">
            <div className="container mx-auto px-6">
                <h1 className="text-center text-2xl md:text-3xl dark:text-white font-bold mb-6">Experience</h1>
                <div className="flex flex-wrap justify-center gap-6">
                    {experience.map((data) => (

                        <div
                            key={data.id}
                            className="max-w-[800px] md:max-h-[165px] md:h-[165px] shadow-[0px_5px_15px_rgb(40_38_105_/_54%)] cursor-pointer hover:bg-[#bcccf1] dark:hover:bg-[#3361af] bg-white dark:bg-[#284f92] rounded-lg flex flex-col md:flex-row overflow-hidden"
                        >
                            {/* Image Section */}

                            {/* <div className="w-full md:w-[150px] h-[250px] md:h-full md:m-[20px] bg-gray-300">
                                <img
                                    src={data.imageSrc}
                                    alt="Image"
                                    className="object-cover h-full md:w-full mx-auto"
                                />
                            </div> */}

                            <div className="md:min-w-[150px] m-[10px] md:m-[20px] bg-gray-300">
                                <img
                                    src={data.imageSrc}
                                    alt="Image"
                                    className="object-cover h-full md:w-full mx-auto md:mx-0"
                                />
                            </div>

                            {/* Content Section */}
                            <div className="p-4 md:p-6 pt-0 md:pt-6 flex flex-col justify-between">
                                <div>
                                    <h2 className="md:text-xl text-lg font-bold text-gray-800 dark:text-white">
                                        {data.role} at {data.organisation}
                                    </h2>
                                    <p className="text-gray-600 dark:text-white text-sm mt-2">{data.experiences}</p>
                                </div>
                                <div className="flex justify-between items-center mt-4">
                                    <h3 className="text-md font-semibold text-[#1f549f] dark:text-white">
                                        {data.startDate} - {data.endDate}
                                    </h3>
                                    <h3 className="text-md font-semibold text-[#1f549f] dark:text-white">
                                        {data.location}
                                    </h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Experience;
