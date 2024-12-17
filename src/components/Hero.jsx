import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useEffect } from "react";
import { useMotionTemplate, useMotionValue, motion, animate, useTransform } from "framer-motion";
import { useNavigate } from "react-router-dom";
import pdf from './pdf/huzaifa_frontend_web_developer_CV.pdf'
import profileimg from '/assets/img/huzaifa_original_pic_1.jpg'
import { FaLinkedinIn, FaWhatsapp, FaInstagram, FaEnvelope, FaGithub } from 'react-icons/fa';


function isWebGLAvailable() {
    try {
        const canvas = document.createElement('canvas');
        return !!window.WebGLRenderingContext && !!canvas.getContext('webgl');
    } catch (e) {
        return false;
    }
}

function Hero() {

    const navigate = useNavigate();

    const COLORS_TOP = [0, 1, 2, 3]; // Indices for color animation
    const color = useMotionValue(0);

    const interpolatedColor = useTransform(color, COLORS_TOP, [
        "#13FFAA",
        "#1E67C6",
        "#CE84CF",
        "#DD335C",
    ]);

    useEffect(() => {
        if (!isWebGLAvailable()) {
            console.error("WebGL is not supported in this environment.");
            alert("Your browser does not support WebGL.");
            return;
        }

        animate(color, COLORS_TOP, {
            ease: "easeInOut",
            duration: 10,
            repeat: Infinity,
            repeatType: "mirror",
        });
    }, []);

    const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${interpolatedColor})`;
    const border = useMotionTemplate`1px solid ${interpolatedColor}`;
    const boxShadow = useMotionTemplate`0px 4px 24px ${interpolatedColor}`;

    return (
        <div id="Home">
            <motion.section
                style={{
                    backgroundImage,
                }}
                className="relative grid sm:min-h-[75vh] md:min-[80vh] lg:min-h-[91vh] min-h-[70vh] mt-16 place-content-center overflow-hidden bg-gray-950 px-4 py-10 sm:py-14 md:py-20 text-gray-200"
            >
                <div className="relative z-10 flex flex-col items-center">
                    <div className="animate-superman h-[130px] w-[130px] md:h-[150px] md:w-[150px] rounded-full flex justify-center items-center">
                        <img src={profileimg} className="h-[130px] md:h-[150px] w-[100%] border-[4px] border-solid object-cover rounded-[100%]" alt="" />
                    </div>
                    <motion.h1
                        animate={{ y: [0, -20, 0] }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                        className="bg-gradient-to-br from-white to-gray-400 bg-clip-text mt-6 mg:mt-10 mb-4 text-center text-2xl font-medium leading-tight text-transparent sm:text-4xl sm:leading-tight md:text-4xl lg:text-5xl md:leading-tight"
                    >
                        Hello, I am Huzaifa Mustafa.<br />
                        Frontend Web Developer
                    </motion.h1>

                    <motion.button
                        style={{
                            border,
                            boxShadow,
                        }}
                        whileHover={{
                            scale: 1.015,
                        }}
                        whileTap={{
                            scale: 0.985,
                        }}
                        className="mr-3 group relative flex w-fit items-center gap-1.5 rounded-full bg-gray-950/10 py-2 text-gray-50 transition-colors hover:bg-gray-950/50"
                    >
                        <a className="md:px-20 px-12" href={pdf} download="Huzaifa_Mustafa_Frontend_Developer_Resume.pdf">Get Resume</a>
                    </motion.button>

                    <div className="flex flex-row items-center text-gray-400 md:mt-10 mt-6">
                        <a
                            href="https://www.linkedin.com/in/huzaifa-mustafa-frontend-developer/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[linear-gradient(0deg,_#243971_0%,_#5fc6ff_100%)] hover:shadow-[0_0_5px_#ffffff,0_0_5px_#ffffff] text-gray-100 transition-shadow shadow-2xl duration-500 px-3 py-3 md:px-4 md:py-4 me-3 border-2 rounded-full"
                        >
                            <FaLinkedinIn className="w-6 h-6" />
                        </a>
                        <a
                            href="https://wa.me/923065312422"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[linear-gradient(0deg,_#243971_0%,_#5fc6ff_100%)] hover:shadow-[0_0_5px_#ffffff,0_0_5px_#ffffff] text-gray-100 transition-shadow shadow-2xl duration-500 px-3 py-3 md:px-4 md:py-4 me-3 border-2 rounded-full"
                        >
                            <FaWhatsapp className="w-6 h-6" />
                        </a>
                        <a
                            href="https://www.instagram.com/huzaifas1108/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[linear-gradient(0deg,_#243971_0%,_#5fc6ff_100%)] hover:shadow-[0_0_5px_#ffffff,0_0_5px_#ffffff] text-gray-100 transition-shadow shadow-2xl duration-500 px-3 py-3 md:px-4 md:py-4 me-3 border-2 rounded-full"
                        >
                            <FaInstagram className="w-6 h-6" />
                        </a>
                        <a
                            href="mailto:huzaifamustafa76@gmail.com"
                            className="bg-[linear-gradient(0deg,_#243971_0%,_#5fc6ff_100%)] hover:shadow-[0_0_5px_#ffffff,0_0_5px_#ffffff] text-gray-100 transition-shadow shadow-2xl duration-500 px-3 py-3 md:px-4 md:py-4 me-3 border-2 rounded-full"
                        >
                            <FaEnvelope className="w-6 h-6" />
                        </a>
                        <a
                            href="https://github.com/HuzaifaMustafa311"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[linear-gradient(0deg,_#243971_0%,_#5fc6ff_100%)] hover:shadow-[0_0_5px_#ffffff,0_0_5px_#ffffff] text-gray-100 transition-shadow shadow-2xl duration-500 px-3 py-3 md:px-4 md:py-4 me-3 border-2 rounded-full"
                        >
                            <FaGithub className="w-6 h-6" />
                        </a>
                    </div>

                </div>

                <div className="absolute inset-0 z-0">
                    <Canvas>
                        <Stars radius={50} count={2500} factor={4} fade speed={2} />
                    </Canvas>
                </div>

            </motion.section>





        </div>
    );
}

export default Hero;
