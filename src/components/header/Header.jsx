import { useState } from 'react'

import logo from '../../assets/images/logo.svg'
import { ThemeToggle } from './ThemeToggle'
import { NavLink } from './NavLink'
import { MenuToggle } from './MenuToggle'

export default function Header({ selectedTab, setSelectedTab }) {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <nav className="bg-white dark:bg-black fixed w-full z-20 top-0 start-0">

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
                                    <NavLink text="Skills" tab="skill" selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
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

                {menuOpen && (
                    <div className="md:hidden" id="mobile-menu">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            <NavLink text="Home" tab="home" selectedTab={selectedTab} setSelectedTab={setSelectedTab} setMenuOpen={setMenuOpen} mobile={true} />
                            <NavLink text="About" tab="about" selectedTab={selectedTab} setSelectedTab={setSelectedTab} setMenuOpen={setMenuOpen} mobile={true} />
                            <NavLink text="Skills" tab="skill" selectedTab={selectedTab} setSelectedTab={setSelectedTab} setMenuOpen={setMenuOpen} mobile={true} />
                            <NavLink text="Resume" tab="resume" selectedTab={selectedTab} setSelectedTab={setSelectedTab} setMenuOpen={setMenuOpen} mobile={true} />
                        </div>
                    </div>
                )}

            </nav>
        </>
    )

}