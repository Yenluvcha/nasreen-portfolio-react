import AboutMe from "./AboutMe"
import SectionHeader from "./SectionHeader";
import TimelineList from "./TimelineList";
import ExperienceItem from "./ExperienceItem";
import EducationItem from "./EducationItem";
import CertificationCard from "./CertificationCard";

import { HiOutlineBriefcase, HiGlobeAlt, HiOutlineAcademicCap, HiOutlineCheckBadge, HiOutlineBookOpen } from "react-icons/hi2";

import workingExperiences from "../../../data/workingExperiences.json";
import educations from "../../../data/educations.json";
import certificates from "../../../data/certificates.json";

export default function About() {

    return (
        <>
            <AboutMe />

            <SectionHeader icon={<HiOutlineBriefcase className="size-5 stroke-[2]" />} title="Working Experience" />

            <TimelineList items={workingExperiences.map((item, index) => (
                <ExperienceItem
                    key={index}
                    title={item.title}
                    subtitle={item.subtitle}
                    time={item.time}
                    description={item.description}
                    icon={<HiOutlineBriefcase className="text-orange-800 size-5 dark:text-orange-300" />}
                    projectList={item.projectList}
                />
            ))} />

            <SectionHeader icon={<HiOutlineAcademicCap className="size-5 stroke-[2]" />} title="Education" />

            <TimelineList items={educations.map((item, index) => (
                <EducationItem
                    key={index}
                    title={item.title}
                    institution={item.institution}
                    time={item.time}
                    result={item.result}
                    description={item.description}
                    icon={<HiOutlineAcademicCap className="text-orange-800 size-5 dark:text-orange-300" />}
                    coursesList={item.coursesList}
                />
            ))} />

            <SectionHeader icon={<HiOutlineCheckBadge className="size-5 stroke-[2]" />} title="Achievements" />

            <div className="flex justify-center mx-auto my-6">
                <div className="flex flex-col items-center gap-5 sm:flex-row">
                    {certificates.map((cert, i) => (
                        <CertificationCard key={i} {...cert} />
                    ))}
                </div>
            </div>

        </>
    )

}