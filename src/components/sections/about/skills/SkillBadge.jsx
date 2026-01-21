

export default function SkillBadge({ name, level, logo, backgroundColor }) {

    // At top level (outside the component)
    const svgImports = import.meta.glob('/src/assets/images/skills/svg/*.svg', {
        eager: true,
        import: 'default'
    });

    // Inside the component or a function
    const logoSrc = svgImports[`/src/assets/images/skills/svg/${logo}`];

    const backgroundColorMap = {
        red: 'bg-red-500/10',
        blue: 'bg-blue-500/10',
        yellow: 'bg-yellow-500/10',
        green: 'bg-green-500/10'
    };

    const logoContainerClass = `flex items-center justify-center`;

    return (
        <div className="flex gap-1.5 p-1.5 px-2.5 transition-colors duration-200 bg-white border rounded-lg shadow-xs border-zinc-300/0 hover:border-zinc-300 hover:bg-zinc-50 dark:bg-zinc-900 dark:border-zinc-700/0 dark:hover:border-zinc-500 dark:hover:bg-zinc-800">
            <div className={logoContainerClass}>
                <img
                    src={logoSrc}
                    alt=""
                    className="size-4"
                />
            </div>
            <div className="self-center">
                <h3 className="text-xs font-semibold text-zinc-800 dark:text-zinc-200">
                    {name}
                </h3>
            </div>
        </div>
    );

}