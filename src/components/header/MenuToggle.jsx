import { useEffect, useState } from "react";
import { HiOutlineBars3, HiOutlineXMark } from "react-icons/hi2"

export function MenuToggle({isOpen, toggle}) {

    return (
        <button
            onClick={toggle}
            className="p-1.5 font-medium text-black transition-colors duration-200 rounded-md md:hidden dark:text-white hover:bg-zinc-200 dark:hover:bg-zinc-800 cursor-pointer"
        >
            {isOpen ? (
                <HiOutlineXMark className="size-6"/>
            ) : (
                <HiOutlineBars3 className="size-6"/>
            )}
        </button>
    );
}