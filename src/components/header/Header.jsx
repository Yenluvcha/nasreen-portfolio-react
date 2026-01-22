import { useState } from 'react'
import { AnimatePresence, easeInOut, motion } from "motion/react"

import logo from '../../assets/images/logo.svg'
import { ThemeToggle } from './ThemeToggle'
import { NavLink } from './NavLink'
import { MenuToggle } from './MenuToggle'

export default function Header({ selectedTab, setSelectedTab }) {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <nav className="fixed top-0 z-20 w-full bg-white dark:bg-black start-0">

                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <div className="shrink-0">
                                <a href="">
                                    <img className="size-8" src={logo} />
                                </a>
                            </div>
                            <div className="hidden md:block">
                                <div className="flex items-baseline ml-10 space-x-4">
                                    <NavLink text="Home" tab="home" selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
                                    <NavLink text="About" tab="about" selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
                                    <NavLink text="Resume" tab="resume" selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
                                </div>
                            </div>
                        </div>

                        <div className="flex -mr-2 gap-x-2">
                            <ThemeToggle />
                            <MenuToggle isOpen={menuOpen} toggle={() => setMenuOpen(prev => !prev)} />
                        </div>
                    </div>
                </div>
                <AnimatePresence mode='wait'>
                    {menuOpen && (
                        <motion.div
                            key="mobile-menu"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="md:hidden overflow-hidden" id="mobile-menu">
                            <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
                                <NavLink text="Home" tab="home" selectedTab={selectedTab} setSelectedTab={setSelectedTab} setMenuOpen={setMenuOpen} mobile={true} />
                                <NavLink text="About" tab="about" selectedTab={selectedTab} setSelectedTab={setSelectedTab} setMenuOpen={setMenuOpen} mobile={true} />
                                <NavLink text="Resume" tab="resume" selectedTab={selectedTab} setSelectedTab={setSelectedTab} setMenuOpen={setMenuOpen} mobile={true} />
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </>
    )

}