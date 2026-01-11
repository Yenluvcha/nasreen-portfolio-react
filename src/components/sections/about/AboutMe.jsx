import pfp from '../../../assets/images/pfp.jpg'
import githubIcon from '../../../assets/images/skills/svg/github.svg'
import linkedinIcon from '../../../assets/images/skills/svg/linkedin.svg'
import { HiEnvelope } from "react-icons/hi2";

export default function AboutMe() {

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
                    I’m a{" "}
                    <span className="font-semibold dark:text-white">Junior Fullstack Web Developer</span> based in Malaysia.
                    With experience in {" "}
                    <span className="text-[#F7DF1E]">JavaScript</span>,{" "}
                    <span className="text-[#777BB3]">PHP</span>, and{" "}
                    <span className="text-[#F05340]">Laravel</span>. I’m always eager to learn
                    and collaborate—let’s connect and create something amazing!
                </p>
                <div className="flex justify-center gap-2 sm:justify-start">
                    <a
                        href="https://github.com/Yenluvcha"
                        target="_blank"
                        className="inline-flex items-center p-2 text-sm font-medium text-center text-white rounded-full shadow-sm focus:ring-4 focus:outline-none bg-zinc-50 hover:bg-zinc-200 hover:ring-2 hover:ring-orange-500"
                    >
                        <img
                            src={githubIcon}
                            alt=""
                            className="w-6 h-6"
                        />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/nasreen-nordin-362bb22b8/"
                        target="_blank"
                        className="inline-flex items-center p-2 text-sm font-medium text-center text-white rounded-full shadow-sm focus:ring-4 focus:outline-none bg-zinc-50 hover:bg-zinc-200 hover:ring-2 hover:ring-orange-500"
                    >
                        <img
                            src={linkedinIcon}
                            alt=""
                            className="w-6 h-6"
                        />
                    </a>
                    <a
                        href="mailto:nasreenaqmal12@gmail.com"
                        target="_blank"
                        className="inline-flex items-center p-2 text-sm font-medium text-center rounded-full shadow-sm text-zinc-700 focus:ring-4 focus:outline-none bg-zinc-50 hover:bg-zinc-200 hover:ring-2 hover:ring-orange-500"
                    >
                        <HiEnvelope className='size-6' />
                    </a>
                </div>
            </div>
        </div>
    )

}