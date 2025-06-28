
// normal active -> <a href="#" className="px-3 py-2 text-sm font-semibold text-black bg-gray-100 rounded-md dark:bg-gray-950 dark:text-white" aria-current="page">Home</a>

// mobile active -> <a href="#" className="block px-3 py-2 text-base font-semibold text-black bg-gray-100 rounded-md dark:bg-gray-950 dark:text-white" aria-current="page">Dashboard</a>

export function NavLink({ mobile = false, text, tab, selectedTab, setSelectedTab }) {

    const baseClass = "px-3 py-2 rounded-md text-sm font-medium cursor-pointer";
    const activeClass = "bg-gray-100 text-black dark:bg-gray-950 dark:text-white";
    const inactiveClass = "text-gray-800 hover:bg-gray-200 hover:text-black dark:text-gray-300 dark:hover:bg-gray-900 dark:hover:text-white";

    const buttonClass = `${baseClass} ${selectedTab === tab ? activeClass : inactiveClass}`;

    return (
        <button
            onClick={() => setSelectedTab(tab)}
            className={`${mobile ? "block w-full text-left" : ""} ${buttonClass}`}
        >
            {text}
        </button>
    );

}