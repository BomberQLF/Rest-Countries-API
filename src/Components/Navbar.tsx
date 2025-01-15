import { useState } from "react";

const Navbar = () => {

    // const [isDarkMode, setDarkMode] = useState(false);
    const [isDarkMode, setDarkMode] = useState(false);

    const handleToggleMode = () => {
        setDarkMode(!isDarkMode);
    };

    return (
        <nav className="p-4 sm:p-6 lg:p-8 ">
            <ul className="flex justify-between">
                <li className="text-sm font-medium sm:text-lg">Where in the world?</li>
                <li>
                    <div className="dark-mode-container flex">
                        <img className="pr-2" src="/src/assets/moon.png" alt="Light Dark mode" />
                        <span className="text-sm" onClick={handleToggleMode}>{isDarkMode ? 'Dark Mode' : 'Light Mode'}</span>
                    </div>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;