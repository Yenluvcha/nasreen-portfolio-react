export default function SectionHeader({ icon, title }) {

    return (
        <div className="inline-flex items-center justify-center w-full">
            <hr className="w-full h-px my-8 border-0 bg-zinc-300 dark:bg-zinc-700" />
            <span className="absolute inline-flex items-center px-3 font-bold text-center -translate-x-1/2 gap-x-2 text-zinc-900 bg-zinc-50 left-1/2 dark:text-white dark:bg-zinc-950">
                {icon}
                {title}
            </span>
        </div>
    )

}