import React from 'react'
import projects from './data/projects.json'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Projects = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 768, // Adjust slides for mobile view
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <>
            <section className="bg-gray-50 dark:bg-[#0f1632] py-12" id='Projects'>
                <div className="container mx-auto px-6 lg:px-20">
                    <h2 className="text-3xl text-center dark:text-white font-bold mb-6">Projects</h2>
                    <h3 className="text-2xl text-center dark:text-white font-semibold mb-8">My Real-Time Projects in Different Technologies</h3>
                    <div className="slider-container">

                        <Slider {...settings}>
                            {projects.map((data) => (

                                <>
                                    <div key={data.id} className="bg-white dark:bg-[#284f92] text-center rounded-lg overflow-hidden shadow-sm">
                                        <a href="#">
                                            <img className="rounded-t-lg h-[275px] w-[100%] p-4" src={`src/assets/${data.imageSrc}`} alt="image" />
                                        </a>
                                        <div className="px-5 pb-5 pt-0">
                                            <a href="#">
                                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{data.title}</h5>
                                            </a>
                                            <p className="mb-3 font-normal text-gray-900 dark:text-gray-300">{data.description}</p>
                                            <div className='mt-7 mb-3'>
                                                <a target='_blank' href={data.link} className="bg-[#1e3c73] dark:bg-[#397ded] hover:bg-[#284f93] dark:hover:bg-blue-600 text-white text-sm lg:text-base font-medium py-2 px-6 rounded-full shadow-lg transition-all">
                                                    Explore Project
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            ))}
                        </Slider>

                    </div>
                </div>
            </section>

        </>
    )
}

export default Projects
