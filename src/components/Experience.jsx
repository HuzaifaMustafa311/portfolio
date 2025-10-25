import React from "react";
import experience from "./data/experience.json";

/**
 * Notes:
 * - Ensure /images/placeholder.png exists in your public folder.
 * - Make sure imageSrc in experience.json is valid.
 */

const Experience = () => {
  const handleImgError = (e) => {
    e.currentTarget.src = "/images/placeholder.png";
  };

  return (
    <section className="py-12 bg-gray-50 dark:bg-[#0f1632]" id="Experience">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h1 className="text-center text-3xl md:text-4xl font-bold mb-10 text-gray-900 dark:text-white">
          Experience
        </h1>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {experience.map((data) => (
            <article
              key={data.id}
              className="w-full max-w-[370px] shadow-[0px_5px_15px_rgba(40,38,105,0.54)]
                         cursor-pointer hover:scale-[1.02] transition-transform duration-300
                         bg-white dark:bg-[#284f92] rounded-2xl overflow-hidden"
            >
              {/* Image Section */}
              <div className="relative w-full h-48 sm:h-56 bg-gray-200">
                <img
                  src={data.imageSrc}
                  alt={data.role}
                  onError={handleImgError}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent"
                />
              </div>

              {/* Text Section */}
              <div className="p-6 flex flex-col justify-between">
                <div>
                  <h2 className="text-lg md:text-xl font-bold text-gray-800 dark:text-white">
                    {data.role}{" "}
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-200">
                      at
                    </span>{" "}
                    <span className="text-md text-[#1f549f] dark:text-blue-300">
                      {data.organisation}
                    </span>
                  </h2>

                  <p className="text-gray-600 dark:text-gray-100 text-sm mt-3 line-clamp-3">
                    {data.experiences}
                  </p>
                </div>

                <div className="flex items-center justify-between mt-5">
                  <time className="text-sm font-semibold text-[#1f549f] dark:text-white">
                    {data.startDate} - {data.endDate}
                  </time>
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-200">
                    {data.location}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
