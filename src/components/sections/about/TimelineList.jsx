export default function TimelineList({ items }) {
    return (
        <div className="flex justify-start mx-6 my-6 md:mx-8">
            <ol className="relative border-l border-zinc-200 dark:border-zinc-700">
                {items}
            </ol>
        </div>
    );
}
