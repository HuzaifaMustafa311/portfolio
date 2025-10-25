import React from 'react'
import pdf from './pdf/huzaifa_frontend_web_developer_CV.pdf'

const Myresume = () => {
    return (
        <section id='Resume' className="bg-[linear-gradient(135deg,_#1e3c72,_#2a5298)] bg-cover bg-center text-white md:py-24 py-12">
            <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20">
                <div className='text-center lg:text-start'>
                    <p className="text-sm lg:text-lg mb-2">
                        Take a look at my professional experience and skills.
                    </p>
                    <h2 className="text-2xl lg:text-4xl font-bold">
                        Want to Know More About Me?
                    </h2>
                </div>

                <div className="mt-6 lg:mt-0">
                    <a
                        href={pdf} download="Huzaifa_Mustafa_Frontend_Developer_Resume.pdf"
                        className="bg-blue-500 hover:bg-blue-600 text-white text-sm lg:text-base font-medium py-3 px-6 rounded-full shadow-lg transition-all"
                    >
                        Download My Resume
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Myresume
