import { useEffect, useState } from "react";
import { HiOutlineBars3, HiOutlineXMark } from "react-icons/hi2"

export function MenuToggle({isOpen, toggle}) {

    return (
        <button
            onClick={toggle}
            className="p-2 font-medium text-black rounded-md md:hidden dark:text-white hover:bg-zinc-200 dark:hover:bg-zinc-800"
        >
            {isOpen ? (
                <HiOutlineXMark className="size-5"/>
            ) : (
                <HiOutlineBars3 className="size-5"/>
            )}
        </button>
    );
}