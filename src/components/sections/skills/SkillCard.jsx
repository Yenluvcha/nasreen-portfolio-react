export default function SkillCard({ name, level, logo, backgroundColor }) {

    // At top level (outside the component)
    const svgImports = import.meta.glob('/src/assets/images/skills/svg/*.svg', {
        eager: true,
        import: 'default'
    });

    // Inside the component or a function
    const logoSrc = svgImports[`/src/assets/images/skills/svg/${logo}`];

    const logoContainerClass = `flex items-center justify-center w-16 h-16 rounded-sm bg-${backgroundColor}-500/10`;

    return (
        <div className="flex gap-3 p-3 bg-white border rounded-lg shadow-xs border-zinc-300/0 hover:border-zinc-300 hover:bg-zinc-50 dark:bg-zinc-900 dark:border-zinc-700/0 dark:hover:border-zinc-500 dark:hover:bg-zinc-800">
            <div className={logoContainerClass}>
                <img
                    src={logoSrc}
                    alt=""
                    className="size-10"
                />
            </div>
            <div className="self-center">
                <h3 className="text-lg font-semibold text-zinc-800 dark:text-zinc-200">
                    {name}
                </h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">{level}</p>
            </div>
        </div>
    );
}