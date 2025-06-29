
import resume from '../../assets/pdfs/resume.pdf'
import page1 from '../../assets/images/resume/resume-1.png'
import page2 from '../../assets/images/resume/resume-2.png'
import { HiOutlineDocumentArrowDown } from "react-icons/hi2";

export default function Resume() {

    return (
        <>
            <div className="flex flex-col items-center gap-5">
                <a
                    href={resume}
                    target="_blank"
                    className="inline-flex items-center gap-2 px-3 py-2 text-sm font-semibold text-white bg-green-700 rounded-md shadow-sm hover:bg-green-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700"
                >
                    <HiOutlineDocumentArrowDown className='size-4 stroke-[2]' />
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