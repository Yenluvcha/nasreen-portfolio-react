
import projects from "../../../data/projects.json";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function ProjectItem() {

    return (
        <div className="mx-6 my-6 space-y-4 sm:space-y-2 md:mx-8">

            <div className="grid gap-4 mb-10 sm:grid-cols-2 lg:grid-cols-3">

                {
                    projects.map((project) => (

                        <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm hover:shadow-md transition">

                            <div className="p-4 space-y-2">
                                <div className="flex justify-between items-center">
                                    <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
                                        {project.title}
                                    </h3>
                                    <a href={project.link} target="_blank" className="text-sm inline-flex items-center gap-1 hover:text-orange-500 transition-colors duration-200">
                                        <FaGithub size="16" />
                                        <span className="flex gap-1">
                                            Github
                                            <FaExternalLinkAlt size="8"/>
                                        </span>
                                    </a>
                                </div>

                                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                                    {project.details}
                                </p>

                                <div className="flex flex-wrap gap-2 pt-2">
                                    {
                                        project.techs.map(tech => (
                                            <span className="px-2 py-1 text-xs rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
                                                {tech}
                                            </span>
                                        ))
                                    }
                                </div>
                            </div>

                        </div>

                    ))
                }

            </div>

        </div>
    )
}