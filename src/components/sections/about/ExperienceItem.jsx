import { div } from "motion/react-client"

export default function ExperienceItem({ icon, title, subtitle, time, description, projectList = [] }) {

    return (
        <li className="mb-10 ml-6">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-orange-100 rounded-full -left-3 dark:bg-orange-900 ring-8 ring-white dark:ring-zinc-900">
                {icon}
            </span>
            <div className="ps-2">
                <h3 className="mb-1 text-lg font-semibold text-zinc-900 dark:text-white">{title}</h3>
                <span className="block mb-2 text-sm font-medium leading-none text-zinc-700 dark:text-zinc-300">
                    {subtitle}
                </span>
                <time className="block mb-5 text-sm font-normal leading-none text-zinc-500 dark:text-zinc-400">
                    {time}
                </time>
                {projectList.map((project, index) => (
                    <div key={index} className="mb-3">
                        <h4 className="mb-2 text-sm font-medium text-zinc-900 dark:text-white">
                            {project.title}
                        </h4>
                        <ul className="space-y-2 text-sm list-disc list-inside text-zinc-600 dark:text-zinc-400">
                            {project.details.map((detail, i) => (
                                <li key={i}>{detail}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </li>
    );

}