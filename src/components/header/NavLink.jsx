
// normal active -> <a href="#" className="px-3 py-2 text-sm font-semibold text-black rounded-md bg-zinc-100 dark:bg-zinc-950 dark:text-white" aria-current="page">Home</a>

// mobile active -> <a href="#" className="block px-3 py-2 text-base font-semibold text-black rounded-md bg-zinc-100 dark:bg-zinc-950 dark:text-white" aria-current="page">Dashboard</a>

export function NavLink({ mobile = false, text, tab, selectedTab, setSelectedTab, setMenuOpen }) {

    const baseClass = "px-3 py-2 rounded-md text-sm font-medium cursor-pointer";
    const activeClass = "bg-zinc-100 text-black dark:bg-zinc-950 dark:text-white";
    const inactiveClass = "text-zinc-800 hover:bg-zinc-200 hover:text-black dark:text-zinc-300 dark:hover:bg-zinc-900 dark:hover:text-white";

    const buttonClass = `${baseClass} ${selectedTab === tab ? activeClass : inactiveClass}`;

    const handleClick = () => {
        setSelectedTab(tab);
        if (setMenuOpen) {
            setMenuOpen(false);
        }
    }

    return (
        <button
            onClick={handleClick}
            className={`${mobile ? "block w-full text-left" : ""} ${buttonClass}`}
        >
            {text}
        </button>
    );

}