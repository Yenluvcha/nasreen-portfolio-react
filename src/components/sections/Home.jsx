
import wavingEmoji from '../../assets/images/gif/wave.gif'
import { HiArrowSmRight } from "react-icons/hi";

export default function Home({ setSelectedTab }) {

    return (
        <>
            <div className="max-w-3xl py-24 mx-auto sm:py-32 lg:py-48">
                <div className="text-center">
                    <div className="flex flex-col-reverse items-center justify-center gap-4 sm:flex-row">
                        <h1 className="text-5xl font-semibold tracking-tight text-zinc-900 sm:text-7xl dark:text-white">
                            Hi, I'm <span className="font-bold text-orange-500">Nasreen</span>
                        </h1>
                        <img
                            src={wavingEmoji}
                            alt="waving hand"
                            className="size-16 sm:size-24"
                        />
                    </div>
                    <p className="mt-8 text-lg font-medium text-zinc-600 text-pretty dark:text-zinc-400 sm:text-xl/8">
                        A passionate Junior Fullstack Web Developer.
                    </p>
                    <div className="flex flex-col items-center justify-center mt-10 sm:flex-row gap-y-4 sm:gap-x-6">
                        <button
                            onClick={() => setSelectedTab('about')}
                            className="inline-flex cursor-pointer items-center gap-1 rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                        >
                            Learn more
                            <HiArrowSmRight className="size-5" />
                        </button>
                    </div>
                </div>
            </div>
        </>
    )

}