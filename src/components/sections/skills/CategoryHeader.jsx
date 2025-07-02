

export function CategoryHeader({ text, icon }) {

    return (
        <h1 className="inline-flex items-center gap-2 mb-6 text-2xl font-bold">
            {icon}
            {text}
        </h1>
    )

}