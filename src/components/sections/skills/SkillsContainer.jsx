export default function SkillContainer({ skills }) {
    return (
        <div className="grid gap-4 mb-10 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
            { skills }
        </div>

    );
}
