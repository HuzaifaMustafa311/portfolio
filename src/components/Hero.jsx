import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useEffect } from "react";
import { useMotionTemplate, useMotionValue, motion, animate, useTransform } from "framer-motion";
import { useNavigate } from "react-router-dom";
import pdf from './pdf/huzaifa_frontend_web_developer_CV.pdf'
import profileimg from '/assets/img/huzaifa_original_pic_1.jpg'
// import profileimg from '../../public/assets/img/huzaifa_original_pic_1.jpg'

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
                            className="bg-[linear-gradient(0deg,_#243971_0%,_#5fc6ff_100%)] hover:shadow-[0_0_5px_#ffffff,0_0_5px_#ffffff] text-gray-100 transition-shadow duration-500 px-3 py-3 md:px-4 md:py-4 me-3 border-2 rounded-full"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                className="w-6 h-6"
                            >
                                <path d="M20.452 20.452h-3.568v-5.592c0-1.334-.026-3.052-1.86-3.052-1.86 0-2.144 1.452-2.144 2.952v5.692h-3.568v-11.5h3.423v1.571h.05c.478-.902 1.637-1.85 3.374-1.85 3.609 0 4.276 2.373 4.276 5.457v6.322zM5.337 8.822h.025c1.174 0 1.934-.788 1.934-1.775-.022-1.003-.76-1.776-1.909-1.776-1.149 0-1.934.772-1.934 1.776 0 .987.759 1.775 1.884 1.775zM6.905 20.452h-3.568v-11.5h3.568v11.5zM22.225 0h-20.449c-.977 0-1.776.798-1.776 1.776v20.449c0 .978.799 1.775 1.776 1.775h20.449c.978 0 1.775-.797 1.775-1.775v-20.449c0-.978-.797-1.776-1.775-1.776z" />
                            </svg>
                        </a>

                        {/* Twitter Icon */}
                        <a
                            href="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[linear-gradient(0deg,_#243971_0%,_#5fc6ff_100%)] hover:shadow-[0_0_5px_#ffffff,0_0_5px_#ffffff] text-gray-100 transition-shadow duration-500 px-3 py-3 md:px-4 md:py-4 me-3 border-2 rounded-full"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                className="w-6 h-6"
                            >
                                <path d="M24 4.556c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.723-.951.565-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-2.719 0-4.924 2.205-4.924 4.924 0 .386.044.762.127 1.124-4.092-.205-7.719-2.165-10.141-5.144-.424.729-.666 1.574-.666 2.476 0 1.708.869 3.216 2.188 4.099-.807-.026-1.566-.247-2.228-.616v.062c0 2.386 1.697 4.374 3.946 4.828-.413.112-.849.172-1.296.172-.318 0-.626-.031-.927-.088.627 1.956 2.444 3.379 4.6 3.419-1.684 1.32-3.809 2.106-6.116 2.106-.398 0-.79-.023-1.175-.068 2.179 1.398 4.768 2.211 7.548 2.211 9.057 0 14.01-7.506 14.01-14.009 0-.213-.005-.425-.014-.637.961-.694 1.797-1.562 2.457-2.549z" />
                            </svg>
                        </a>

                        {/* Instagram Icon */}
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[linear-gradient(0deg,_#243971_0%,_#5fc6ff_100%)] hover:shadow-[0_0_5px_#ffffff,0_0_5px_#ffffff] text-gray-100 transition-shadow duration-500 px-3 py-3 md:px-4 md:py-4 me-3 border-2 rounded-full"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                className="w-6 h-6"
                            >
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.309.975.975 1.247 2.242 1.309 3.608.058 1.266.07 1.645.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.309 3.608-.975.975-2.242 1.247-3.608 1.309-1.266.058-1.645.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.309-.975-.975-1.247-2.242-1.309-3.608-.058-1.266-.07-1.645-.07-4.85s.012-3.584.07-4.85c.062-1.366.334-2.633 1.309-3.608.975-.975 2.242-1.247 3.608-1.309 1.266-.058 1.645-.07 4.85-.07zm0-2.163c-3.259 0-3.667.012-4.947.071-1.426.062-2.792.366-3.88 1.454s-1.392 2.454-1.454 3.88c-.059 1.281-.071 1.689-.071 4.947s.012 3.667.071 4.947c.062 1.426.366 2.792 1.454 3.88s2.454 1.392 3.88 1.454c1.281.059 1.689.071 4.947.071s3.667-.012 4.947-.071c1.426-.062 2.792-.366 3.88-1.454s1.392-2.454 1.454-3.88c.059-1.281.071-1.689.071-4.947s-.012-3.667-.071-4.947c-.062-1.426-.366-2.792-1.454-3.88s-2.454-1.392-3.88-1.454c-1.281-.059-1.689-.071-4.947-.071zm0 5.838c-3.405 0-6.162 2.757-6.162 6.162s2.757 6.162 6.162 6.162 6.162-2.757 6.162-6.162-2.757-6.162-6.162-6.162zm0 10.324c-2.293 0-4.162-1.869-4.162-4.162s1.869-4.162 4.162-4.162 4.162 1.869 4.162 4.162-1.869 4.162-4.162 4.162zm6.406-11.845c-.796 0-1.441.645-1.441 1.441 0 .796.645 1.441 1.441 1.441.796 0 1.441-.645 1.441-1.441 0-.796-.645-1.441-1.441-1.441z" />
                            </svg>
                        </a>

                        {/* Email Icon */}
                        <a
                            href="mailto:huzaifamustafa76@gmail.com"
                            className="bg-[linear-gradient(0deg,_#243971_0%,_#5fc6ff_100%)] hover:shadow-[0_0_5px_#ffffff,0_0_5px_#ffffff] text-gray-100 transition-shadow duration-500 px-3 py-3 md:px-4 md:py-4 me-3 border-2 rounded-full"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                className="w-6 h-6"
                            >
                                <path d="M22 4h-20c-1.104 0-2 .896-2 2v12c0 1.104.896 2 2 2h20c1.104 0 2-.896 2-2v-12c0-1.104-.896-2-2-2zm-20 2h20l-10 7-10-7zm0 12v-10l10 7 10-7v10h-20z" />
                            </svg>
                        </a>

                        {/* GitHub Icon */}
                        <a
                            href="https://github.com/HuzaifaMustafa311"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[linear-gradient(0deg,_#243971_0%,_#5fc6ff_100%)] hover:shadow-[0_0_5px_#ffffff,0_0_5px_#ffffff] text-gray-100 transition-shadow duration-500 px-3 py-3 md:px-4 md:py-4 me-3 border-2 rounded-full"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                className="w-6 h-6"
                            >
                                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.615-4.042-1.615-.546-1.387-1.333-1.757-1.333-1.757-1.091-.746.083-.731.083-.731 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.775.419-1.305.762-1.605-2.665-.3-5.466-1.333-5.466-5.93 0-1.31.47-2.382 1.235-3.222-.123-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.241 2.874.118 3.176.768.84 1.233 1.912 1.233 3.222 0 4.609-2.805 5.625-5.475 5.92.43.37.823 1.096.823 2.21 0 1.596-.015 2.884-.015 3.276 0 .321.218.694.825.576 4.765-1.588 8.198-6.084 8.198-11.385 0-6.627-5.373-12-12-12z" />
                            </svg>
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
