import { useEffect, useState } from "react";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2"

export function ThemeToggle() {

    const [isDark, setIsDark] = useState(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) return savedTheme === "dark";
        // fallback to system setting
        return window.matchMedia("(prefers-color-scheme: dark)").matches;
    });

    useEffect(() => {
        const root = document.documentElement;
        if (isDark) {
            root.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            root.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [isDark]);

    return (
        <button
            onClick={() => setIsDark((prev) => !prev)}
            className="p-2 font-medium text-black transition-colors duration-200 rounded-md dark:text-white hover:bg-zinc-200 dark:hover:bg-zinc-800"
        >
            {isDark ? (
                <HiOutlineSun className="size-5"/>
            ) : (
                <HiOutlineMoon className="size-5"/>
            )}
        </button>
    );
}