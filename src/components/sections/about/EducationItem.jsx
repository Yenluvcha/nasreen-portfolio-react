export default function EducationItem({ icon, title, institution, time, result, description, coursesList = [] }) {

    return (
        <li className="mb-8 ms-8">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-orange-100 rounded-full md:w-7 md:h-7 -start-4 ring-8 ring-white dark:ring-zinc-900 dark:bg-orange-900">
                {icon}
            </span>
            <h3 className="flex items-center mb-1 text-lg font-bold text-zinc-900 dark:text-white">{title}</h3>
            <span className="block mb-2 text-sm font-medium leading-none text-zinc-700 dark:text-zinc-300">
                {institution}
            </span>
            <time className="block mb-5 text-sm font-normal leading-none text-zinc-500 dark:text-zinc-400">
                {time}
            </time>
            <div className="mb-4 text-sm font-normal prose text-zinc-700 dark:text-zinc-300 prose-slate dark:prose-invert">
                {result && <p className="mb-3">CGPA: {result}</p>}
                {description && <p className="mb-1">{description}</p>}
                {coursesList && (
                    <ul className="max-w-md space-y-1 list-inside dark:text-zinc-300">
                        {coursesList.map((item, index) => (
                            <li key={index} className="flex items-center">
                                {item.icon}
                                {item.text}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </li>
    );

}