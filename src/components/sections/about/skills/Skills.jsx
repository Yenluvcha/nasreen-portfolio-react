
import skills from "../../../../data/skills.json";
import SkillContainer from "./SkillsContainer";
import SkillBadge from "./SkillBadge";

export default function Skill() {

    return (
        <>
            <div className="mx-6 my-6 space-y-4 sm:space-y-2 md:mx-8">
                <SkillContainer category={'Frontend'} skills={skills.frontend.map((skill) => (
                    <SkillBadge
                        key={skill.name}
                        name={skill.name}
                        level={skill.level}
                        logo={skill.logo}
                        backgroundColor={skill.backgroundColor}
                    />
                ))} />

                <SkillContainer category={'Backend'} skills={skills.backend.map((skill) => (
                    <SkillBadge
                        key={skill.name}
                        name={skill.name}
                        level={skill.level}
                        logo={skill.logo}
                        backgroundColor={skill.backgroundColor}
                    />
                ))} />

                <SkillContainer category={'Database'} skills={skills.database.map((skill) => (
                    <SkillBadge
                        key={skill.name}
                        name={skill.name}
                        level={skill.level}
                        logo={skill.logo}
                        backgroundColor={skill.backgroundColor}
                    />
                ))} />

                <SkillContainer category={'Tools'} skills={skills.tools.map((skill) => (
                    <SkillBadge
                        key={skill.name}
                        name={skill.name}
                        level={skill.level}
                        logo={skill.logo}
                        backgroundColor={skill.backgroundColor}
                    />
                ))} />
            </div>
        </>
    )

}