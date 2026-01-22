import { LuChevronUp } from "react-icons/lu";

import { useState, useEffect } from "react";

export default function BackToTopButton() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setVisible(window.scrollY > 300); // show after scrolling 300px
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <button
            onClick={scrollToTop}
            className={`
        fixed bottom-4 right-4 p-2 rounded-sm bg-primary/70 bg-orange-400 hover:bg-orange-500 text-black shadow-sm
        transition-all duration-300 ease-in-out cursor-pointer
        ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}
      `}
            aria-label="Back to Top"
        >
            <LuChevronUp size="20"/>
        </button>
    );
}
