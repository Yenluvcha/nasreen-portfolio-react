import { useEffect, useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi"

export function MenuToggle({isOpen, toggle}) {

    return (
        <button
            onClick={toggle}
            className="p-2 font-medium text-black rounded-md md:hidden dark:text-white hover:bg-zinc-200 dark:hover:bg-zinc-800"
        >
            {isOpen ? (
                <HiOutlineX className="size-5"/>
            ) : (
                <HiOutlineMenu className="size-5"/>
            )}
        </button>
    );
}