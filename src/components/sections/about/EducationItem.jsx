export default function EducationItem({ icon, title, institution, time, result }) {

    return (
        <li className="mb-10 ml-6">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-orange-100 rounded-full -left-3 dark:bg-orange-900 ring-8 ring-white dark:ring-zinc-900">
                {icon}
            </span>
            <div className="ps-2">
                <h3 className="flex items-center mb-1 text-lg font-bold text-zinc-900 dark:text-white">{title}</h3>
                <span className="block mb-2 text-sm font-medium leading-none text-zinc-700 dark:text-zinc-300">
                    {institution}
                </span>
                <time className="block mb-5 text-sm font-normal leading-none text-zinc-500 dark:text-zinc-400">
                    {time}
                </time>
                <div className="mb-4 text-sm font-normal prose text-zinc-700 dark:text-zinc-300 prose-slate dark:prose-invert">
                    {result && <p className="mb-3">CGPA: {result}</p>}
                </div>
            </div>
        </li>
    );

}