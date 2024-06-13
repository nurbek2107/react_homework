import { NavLink } from 'react-router-dom';
import "../header/header.css";
import { useEffect, useState } from 'react';

const themeFromLocalS = () => {
  return localStorage.getItem('theme') || 'retro';
};

function Header() {
  const [theme, setTheme] = useState(themeFromLocalS);

  const handleTheme = () => {
    const newTheme = theme === "retro" ? "dracula" : "retro";
    setTheme(newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <header className="bg-base-200 text-base-content rounded mb-10 ">
      <nav className='flex justify-between items-center'>
        <div className="left">
          <NavLink to='/'>
            <svg className='fill-slate-600'
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 23.631 23.631"
              xmlSpace="preserve"
            >
              <path d="M0 0.663L9.401 0.663 15.882 7.146 15.882 14.127 5.307 3.608 5.274 22.969 0 22.969z"></path>
              <path d="M23.631 22.969L14.232 22.969 7.752 16.485 7.752 9.501 18.327 20.018 18.359 0.662 23.631 0.662z"></path>
            </svg>
          </NavLink>
        </div>
        <div className="center flex gap-10">
          <ul className="flex gap-10 list-none">
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/about'>About</NavLink></li>
            <li><NavLink to='/contact'>Contact</NavLink></li>
          </ul>
        </div>
        <div className="right">
          <label className="swap swap-rotate">
            <input
              onClick={handleTheme}
              type="checkbox"
              className="theme-controller"
              value="synthwave"
              checked={theme === 'dracula'}
              readOnly
            />
            {/* sun icon */}
            <svg className={`swap-off fill-current w-10 h-10 ${theme === 'dracula' ? 'hidden' : 'block'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>
            {/* moon icon */}
            <svg className={`swap-on fill-current w-10 h-10 ${theme === 'dracula' ? 'block' : 'hidden'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>
        </div>
      </nav>
    </header>
  );
}

export default Header;
