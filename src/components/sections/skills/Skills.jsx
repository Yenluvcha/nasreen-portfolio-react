import { CategoryHeader } from "./CategoryHeader";
import SkillContainer from "./SkillsContainer";
import SkillCard from "./SkillCard";

import { HiOutlineCodeBracket, HiOutlineCircleStack, HiOutlineWrenchScrewdriver } from "react-icons/hi2";

import skills from "../../../data/skills.json";

export default function Skills() {

    return (
        <>
            <CategoryHeader icon={<HiOutlineCodeBracket className="size-6" />} text="Frontend" />

            <SkillContainer skills={skills.frontend.map((skill) => (
                <SkillCard
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    logo={skill.logo}
                    backgroundColor={skill.backgroundColor}
                />
            ))} />

            <CategoryHeader icon={<HiOutlineCodeBracket className="size-6" />} text="Backend" />

            <SkillContainer skills={skills.backend.map((skill) => (
                <SkillCard
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    logo={skill.logo}
                    backgroundColor={skill.backgroundColor}
                />
            ))} />

            <CategoryHeader icon={<HiOutlineCircleStack className="size-6" />} text="Database" />

            <SkillContainer skills={skills.database.map((skill) => (
                <SkillCard
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    logo={skill.logo}
                    backgroundColor={skill.backgroundColor}
                />
            ))} />

            <CategoryHeader icon={<HiOutlineWrenchScrewdriver className="size-6" />} text="Tools" />

            <SkillContainer skills={skills.tools.map((skill) => (
                <SkillCard
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    logo={skill.logo}
                    backgroundColor={skill.backgroundColor}
                />
            ))} />

        </>
    )

}