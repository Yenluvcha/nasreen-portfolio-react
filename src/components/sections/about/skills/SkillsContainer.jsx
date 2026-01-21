export default function SkillContainer({ skills, category }) {
    return (
        <div className="flex flex-col items-center sm:flex-row sm:gap-x-3">
            <p className="mb-2 font-semibold sm:mb-0">{category}</p>
            <div className="flex flex-wrap justify-center gap-x-2 gap-y-2">
                {skills}
            </div>
        </div>
    );
}
