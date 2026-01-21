import pfp from '../../../assets/images/pfp.jpg'
import githubIcon from '../../../assets/images/skills/svg/github.svg'
import linkedinIcon from '../../../assets/images/skills/svg/linkedin.svg'

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { FaFileLines } from "react-icons/fa6";


export default function AboutMe({ setSelectedTab }) {

    return (
        <div className="flex flex-col w-full gap-4 my-6 sm:flex-row sm:justify-center">
            <img
                src={pfp}
                alt=""
                className="self-center p-1 rounded-full size-36 ring-2 ring-orange-500"
            />
            <div className="sm:max-w-lg">
                <h3 className="mb-3 text-2xl font-bold text-center sm:text-left">
                    About Me
                </h3>
                <p className="mb-5 text-center sm:text-start dark:text-zinc-300">
                    My name is <b>Nasreen Nordin</b> and i’m a{" "}
                    <span className="font-semibold dark:text-white">Junior Fullstack Web Developer</span> based in Malaysia.
                    With experience in {" "}
                    <span className="text-[#F7DF1E]">JavaScript</span>,{" "}
                    <span className="text-[#777BB3]">PHP</span>, and{" "}
                    <span className="text-[#F05340]">Laravel</span>. I’m always eager to learn
                    and collaborate.
                </p>
                <div className='flex flex-col items-center gap-3 sm:flex-row'>
                    <div className="flex justify-center gap-3 sm:justify-start">
                        <a
                            href="https://github.com/Yenluvcha"
                            target="_blank"
                            className="inline-flex items-center gap-1.5 p-2 text-sm font-medium text-center group hover:text-orange-500 transition-colors duration-200"
                        >

                            <FaGithub className='transition-colors duration-200 size-6 group-hover:text-orange-500' />
                            Github

                        </a>
                        <a
                            href="https://www.linkedin.com/in/nasreen-nordin-362bb22b8/"
                            target="_blank"
                            className="inline-flex items-center gap-1.5 p-2 text-sm font-medium text-center group hover:text-orange-500 transition-colors duration-200"
                        >
                            <FaLinkedin className='transition-colors duration-200 size-6 group-hover:text-orange-500' />
                            LinkedIn

                        </a>
                        <a
                            href="mailto:nasreenaqmal12@gmail.com"
                            target="_blank"
                            className="inline-flex items-center gap-1.5 p-2 text-sm transition-colors duration-200 font-medium text-center group hover:text-orange-500"
                        >
                            <FaEnvelope className='transition-colors duration-200 size-6 group-hover:text-orange-500' />
                            Email
                        </a>
                    </div>
                    <button
                        onClick={() => setSelectedTab('resume')}
                        className="inline-flex items-center gap-1.5 p-2 text-sm transition-colors duration-200 font-medium text-center group hover:text-orange-500 cursor-pointer"
                    >
                        <FaFileLines className='transition-colors duration-200 size-5.5 group-hover:text-orange-500' />
                        Resume
                    </button>
                </div>

            </div>
        </div>
    )

}