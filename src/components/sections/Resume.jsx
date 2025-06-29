
import resume from '../../assets/pdfs/resume.pdf'
import page1 from '../../assets/images/resume/resume-1.png'
import page2 from '../../assets/images/resume/resume-2.png'

export default function Resume() {

    return (
        <>
            <div className="flex flex-col items-center gap-5">
                <a
                    href={resume}
                    target="_blank"
                    className="inline-flex items-center gap-2 px-3 py-2 text-sm font-semibold text-white bg-green-700 rounded-md shadow-sm hover:bg-green-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="size-4"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m.75 12 3 3m0 0 3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                        />
                    </svg>
                    Download
                </a>
                <img
                    src={page1}
                    alt=""
                    className="md:h-[1171px] md:w-[828px]"
                />
                <img
                    src={page2}
                    alt=""
                    className="md:h-[1171px] md:w-[828px]"
                />
            </div>

        </>
    )

}